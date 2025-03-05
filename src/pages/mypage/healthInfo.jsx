import { useState } from "react";
import * as S from "./style";
import API from "../../store";

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
  const [healthInfo, setHealthInfo] = useState({
    // 기본 정보
    age: "",
    gender: "",
    height: "",
    weight: "",
    // 건강 상태
    bloodPressureLevel: "",
    bloodSugarLevel: "",
    surgeryCount: "0",
    isSmoking: false,
    isDrinking: false,
    // 만성질환
    chronicDiseases: [],
    // 직업
    jobType: "",
    // 생활 정보
    hasChildren: false,
    hasOwnHouse: false,
    hasPet: false,
    hasFamilyHistory: false,
  });

  // BMI 계산
  const calculateBMI = () => {
    const h = Number(healthInfo.height);
    const w = Number(healthInfo.weight);
    if (!h || !w) return null;
    const meters = h / 100;
    const rawBmi = w / (meters * meters);
    // 소수점 1자리 유지
    return Number(rawBmi.toFixed(1));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 체크박스 분기
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
        // 단일 체크 (흡연, 음주 등)
        setHealthInfo((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      // 라디오나 텍스트/셀렉트
      setHealthInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // 예시: 서버에 PUT으로 수정 요청
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 직업: 한글 → Enum 상수
      const convertedJobType = jobTypeMap[healthInfo.jobType] || "UNEMPLOYED";

      // 숫자 변환(빈 문자열이면 null)
      const bpValue =
        healthInfo.bloodPressureLevel === ""
          ? null
          : Number(healthInfo.bloodPressureLevel);
      const bsValue =
        healthInfo.bloodSugarLevel === ""
          ? null
          : Number(healthInfo.bloodSugarLevel);
      const surgeryCountNum = Number(healthInfo.surgeryCount);

      // BMI
      const bmiVal = calculateBMI(); // number or null

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
        chronicDiseases: healthInfo.chronicDiseases, // 배열
        jobType: convertedJobType,
        hasChildren: healthInfo.hasChildren,
        hasOwnHouse: healthInfo.hasOwnHouse,
        hasPet: healthInfo.hasPet,
        hasFamilyHistory: healthInfo.hasFamilyHistory,
      };

      // 예: PUT /api/user-health 수정
      await API.put("/user-health", payload);
      alert("건강정보 수정 완료!");
    } catch (error) {
      console.error("건강정보 수정 에러:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
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
