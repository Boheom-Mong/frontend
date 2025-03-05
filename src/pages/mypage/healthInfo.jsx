import { useEffect, useState } from "react";
import * as S from "./style";
import { useUserHealthStore } from "../../store/useUserHeatlhStore";

// 만성질환 목록 예시
const chronicDiseasesList = [
  "고혈압",
  "당뇨",
  "고지혈증",
  "천식",
  "관절염",
  "뇌졸중",
  "협심증",
  "암",
  "간염",
  "심부전",
  "편두통",
  "골다공증",
  "COPD",
  "간경화",
  "만성신장질환",
  "갑상선질환",
];

// 직업 한글 목록
const jobTypes = ["사무직", "배달", "건설", "자영업", "학생", "주부", "무직"];

// 한글 → 백엔드 enum 상수
const jobTypeMap = {
  사무직: "OFFICE",
  배달: "DELIVERY",
  건설: "CONSTRUCTION",
  자영업: "SELF_EMPLOYED",
  학생: "STUDENT",
  주부: "HOUSEWIFE",
  무직: "UNEMPLOYED",
};

const MypageHealthInfo = () => {
  const updateUserHealthInfo = useUserHealthStore(
    (state) => state.updateUserHealthInfo
  );
  const getUserHealthInfo = useUserHealthStore(
    (state) => state.getUserHealthInfo
  );

  // 로컬 상태
  const [healthInfo, setHealthInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodPressureLevel: "",
    bloodSugarLevel: "",
    surgeryCount: "0",
    isSmoking: false,
    isDrinking: false,
    chronicDiseases: [], // 로컬에서는 chronicDiseases 라는 이름으로 관리
    jobType: "",
    hasChildren: false,
    hasOwnHouse: false,
    hasPet: false,
    hasFamilyHistory: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserHealthInfo();
        if (data?.result) {
          const info = data.result;

          // 만성질환은 서버에서 'chronicDiseaseList'라는 배열로 내려온다고 가정
          setHealthInfo({
            age: info.age ?? "",
            gender: info.gender ?? "",
            height: info.height ?? "",
            weight: info.weight ?? "",
            bloodPressureLevel: info.bloodPressureLevel ?? "",
            bloodSugarLevel: info.bloodSugarLevel ?? "",
            surgeryCount: info.surgeryCount?.toString() ?? "0",
            isSmoking: info.isSmoker ?? false,
            isDrinking: info.isDrinker ?? false,
            // ▼ 서버의 chronicDiseaseList → 로컬 state chronicDiseases
            chronicDiseases: Array.isArray(info.chronicDiseaseList)
              ? info.chronicDiseaseList
              : [],
            jobType: reverseMapJobType(info.jobType),
            hasChildren: info.hasChildren ?? false,
            hasOwnHouse: info.hasOwnHouse ?? false,
            hasPet: info.hasPet ?? false,
            hasFamilyHistory: info.hasFamilyHistory ?? false,
          });
        }
      } catch (error) {
        console.error("초기 건강정보 조회 실패:", error);
      }
    })();
  }, [getUserHealthInfo]);

  // 백엔드 enum → 한글 역매핑
  const reverseMapJobType = (enumVal) => {
    const found = Object.entries(jobTypeMap).find(
      ([, value]) => value === enumVal
    );
    return found ? found[0] : "";
  };

  // BMI 계산
  const calculateBMI = () => {
    const h = Number(healthInfo.height);
    const w = Number(healthInfo.weight);
    if (!h || !w) return null;
    const meters = h / 100;
    return Number((w / (meters * meters)).toFixed(1));
  };

  // 인풋/체크박스/라디오 등 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "chronicDiseases") {
        // 만성질환: 다중 체크
        setHealthInfo((prev) => ({
          ...prev,
          chronicDiseases: checked
            ? [...prev.chronicDiseases, value]
            : prev.chronicDiseases.filter((d) => d !== value),
        }));
      } else {
        // 단일 체크(흡연, 음주 등)
        setHealthInfo((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      // 라디오나 셀렉트, 텍스트 인풋
      setHealthInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // PUT 요청 (만성질환 수정 포함)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const convertedJobType = jobTypeMap[healthInfo.jobType] || "UNEMPLOYED";
      const bpValue =
        healthInfo.bloodPressureLevel === ""
          ? null
          : Number(healthInfo.bloodPressureLevel);
      const bsValue =
        healthInfo.bloodSugarLevel === ""
          ? null
          : Number(healthInfo.bloodSugarLevel);
      const surgeryCountNum = Number(healthInfo.surgeryCount);
      const bmiVal = calculateBMI();

      // 서버가 'chronicDiseaseList'라는 키로 받는다고 가정
      const payload = {
        age: Number(healthInfo.age),
        gender: healthInfo.gender,
        height: Number(healthInfo.height),
        weight: Number(healthInfo.weight),
        bmi: bmiVal,
        bloodPressureLevel: bpValue,
        bloodSugarLevel: bsValue,
        surgeryCount: surgeryCountNum,
        isSmoker: healthInfo.isSmoking,
        isDrinker: healthInfo.isDrinking,
        // ▼ 로컬 chronicDiseases → 서버 chronicDiseaseList
        chronicDiseaseList: healthInfo.chronicDiseases,
        jobType: convertedJobType,
        hasChildren: healthInfo.hasChildren,
        hasOwnHouse: healthInfo.hasOwnHouse,
        hasPet: healthInfo.hasPet,
        hasFamilyHistory: healthInfo.hasFamilyHistory,
      };

      await updateUserHealthInfo(payload);
      alert("건강정보 수정 완료!");
    } catch (error) {
      console.error("건강정보 수정 에러:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {/* ------------------------
          (1) 기본 정보 섹션
       ------------------------ */}
      <S.Section>
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.Grid>
          <S.InputGroup>
            <label htmlFor="age">나이</label>
            <S.Input
              type="number"
              id="age"
              name="age"
              value={healthInfo.age}
              onChange={handleChange}
              placeholder="나이 입력"
            />
          </S.InputGroup>
          <S.InputGroup>
            <label>성별</label>
            <S.RadioGroup>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  checked={healthInfo.gender === "M"}
                  onChange={handleChange}
                />
                남성
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={healthInfo.gender === "F"}
                  onChange={handleChange}
                />
                여성
              </label>
            </S.RadioGroup>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="height">키 (cm)</label>
            <S.Input
              type="number"
              id="height"
              name="height"
              value={healthInfo.height}
              onChange={handleChange}
              placeholder="키 입력"
            />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="weight">몸무게 (kg)</label>
            <S.Input
              type="number"
              id="weight"
              name="weight"
              value={healthInfo.weight}
              onChange={handleChange}
              placeholder="몸무게 입력"
            />
          </S.InputGroup>

          <S.InputGroup>
            <label>BMI</label>
            <S.BMIDisplay>{calculateBMI() || "-"}</S.BMIDisplay>
          </S.InputGroup>
        </S.Grid>
      </S.Section>

      {/* ------------------------
          (2) 건강 상태 섹션
       ------------------------ */}
      <S.Section>
        <S.SectionTitle>건강 상태</S.SectionTitle>
        <S.Grid>
          <S.InputGroup>
            <label htmlFor="bloodPressureLevel">혈압 수준</label>
            <S.Select
              id="bloodPressureLevel"
              name="bloodPressureLevel"
              value={healthInfo.bloodPressureLevel}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="1">저혈압</option>
              <option value="2">정상</option>
              <option value="3">경계</option>
              <option value="4">고혈압1</option>
              <option value="5">고혈압2</option>
            </S.Select>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="bloodSugarLevel">혈당 수준</label>
            <S.Select
              id="bloodSugarLevel"
              name="bloodSugarLevel"
              value={healthInfo.bloodSugarLevel}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="1">저혈당</option>
              <option value="2">정상</option>
              <option value="3">공복혈당장애</option>
              <option value="4">당뇨전단계</option>
              <option value="5">당뇨</option>
            </S.Select>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="surgeryCount">수술 횟수</label>
            <S.Select
              id="surgeryCount"
              name="surgeryCount"
              value={healthInfo.surgeryCount}
              onChange={handleChange}
            >
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}회
                </option>
              ))}
            </S.Select>
          </S.InputGroup>

          <S.CheckboxSection>
            <label>
              <input
                type="checkbox"
                name="isSmoking"
                checked={healthInfo.isSmoking}
                onChange={handleChange}
              />
              흡연
            </label>
            <label>
              <input
                type="checkbox"
                name="isDrinking"
                checked={healthInfo.isDrinking}
                onChange={handleChange}
              />
              음주
            </label>
          </S.CheckboxSection>
        </S.Grid>
      </S.Section>

      {/* ------------------------
          (3) 만성질환 섹션
       ------------------------ */}
      <S.Section>
        <S.SectionTitle>만성질환</S.SectionTitle>
        <S.ChronicDiseaseGrid>
          {chronicDiseasesList.map((disease) => (
            <label key={disease}>
              <input
                type="checkbox"
                name="chronicDiseases"
                value={disease}
                checked={healthInfo.chronicDiseases.includes(disease)}
                onChange={handleChange}
              />
              {disease}
            </label>
          ))}
        </S.ChronicDiseaseGrid>
      </S.Section>

      {/* ------------------------
          (4) 직업 정보 섹션
       ------------------------ */}
      <S.Section>
        <S.SectionTitle>직업 정보</S.SectionTitle>
        <S.RadioGroup>
          {jobTypes.map((job) => (
            <label key={job}>
              <input
                type="radio"
                name="jobType"
                value={job}
                checked={healthInfo.jobType === job}
                onChange={handleChange}
              />
              {job}
            </label>
          ))}
        </S.RadioGroup>
      </S.Section>

      {/* ------------------------
          (5) 생활 정보 섹션
       ------------------------ */}
      <S.Section>
        <S.SectionTitle>생활 정보</S.SectionTitle>
        <S.CheckboxSection>
          <label>
            <input
              type="checkbox"
              name="hasChildren"
              checked={healthInfo.hasChildren}
              onChange={handleChange}
            />
            자녀 있음
          </label>
          <label>
            <input
              type="checkbox"
              name="hasOwnHouse"
              checked={healthInfo.hasOwnHouse}
              onChange={handleChange}
            />
            자가주택 보유
          </label>
          <label>
            <input
              type="checkbox"
              name="hasPet"
              checked={healthInfo.hasPet}
              onChange={handleChange}
            />
            반려동물 있음
          </label>
          <label>
            <input
              type="checkbox"
              name="hasFamilyHistory"
              checked={healthInfo.hasFamilyHistory}
              onChange={handleChange}
            />
            가족력 있음
          </label>
        </S.CheckboxSection>
      </S.Section>

      {/* 저장 버튼 (PUT) */}
      <S.SubmitButton type="submit">저장하기</S.SubmitButton>
    </S.Form>
  );
};

export default MypageHealthInfo;
