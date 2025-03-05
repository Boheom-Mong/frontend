import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useUserHealthStore } from "../../store/useUserHeatlhStore";

// Java 파일(ChronicDisease.java)에 나열된 질환 목록(한글 명칭)
const chronicDiseaseList = [
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

// 직업 한글 목록, Enum 매핑
const jobTypes = ["사무직", "배달", "건설", "자영업", "학생", "무직"];
const jobTypeMap = {
  사무직: "OFFICE",
  배달: "DELIVERY",
  건설: "CONSTRUCTION",
  자영업: "SELF_EMPLOYED",
  학생: "STUDENT",
  무직: "UNEMPLOYED",
};

const HealthInfo = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  // 폼 상태
  const [info, setInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodPressureLevel: "",
    bloodSugarLevel: "",
    isSmoking: false,
    isDrinking: false,
    chronicDiseases: [], // 로컬에서 만성질환 배열 관리
    jobType: "",
    hasChildren: false,
    hasOwnHouse: false,
    hasPet: false,
    hasFamilyHistory: false,
    surgeryCount: "0",
  });

  const { postUserHealthInfo } = useUserHealthStore();

  // 필수 항목 검사
  const validateRequired = () => {
    if (!info.age || !info.gender || !info.height || !info.weight) {
      setErrorMsg("기본 정보(나이, 성별, 키, 몸무게)는 필수입니다.");
      return false;
    }
    return true;
  };

  // 입력 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "chronicDiseases") {
        // 만성질환 다중 체크
        setInfo((prev) => ({
          ...prev,
          chronicDiseases: checked
            ? [...prev.chronicDiseases, value]
            : prev.chronicDiseases.filter((d) => d !== value),
        }));
      } else {
        // 단일 체크박스 (흡연, 음주, hasChildren 등)
        setInfo((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      // 텍스트/라디오/셀렉트
      setInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  // BMI 계산
  const calcBMI = () => {
    const h = Number(info.height);
    const w = Number(info.weight);
    if (!h || !w) return null;
    const m = h / 100;
    return Number((w / (m * m)).toFixed(1));
  };

  // 폼 제출 (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!validateRequired()) return;

    // 폼 데이터를 서버에 전송하기 전에 변환
    const convertedJobType = jobTypeMap[info.jobType] || "UNEMPLOYED";
    const bpValue =
      info.bloodPressureLevel === "" ? null : Number(info.bloodPressureLevel);
    const bsValue =
      info.bloodSugarLevel === "" ? null : Number(info.bloodSugarLevel);

    // === 만성질환 배열을 백엔드가 'chronicDiseaseList'로 받는다고 가정 ===
    const payload = {
      age: Number(info.age),
      gender: info.gender,
      height: Number(info.height),
      weight: Number(info.weight),
      bmi: calcBMI(),
      bloodPressureLevel: bpValue,
      bloodSugarLevel: bsValue,
      isSmoker: info.isSmoking,
      isDrinker: info.isDrinking,
      chronicDiseaseList: info.chronicDiseases, // 만성질환 배열 전송
      jobType: convertedJobType,
      hasChildren: info.hasChildren,
      hasOwnHouse: info.hasOwnHouse,
      hasPet: info.hasPet,
      hasFamilyHistory: info.hasFamilyHistory,
      surgeryCount: Number(info.surgeryCount),
    };

    try {
      await postUserHealthInfo(payload);
      // 성공 시 이동
      navigate("/");
    } catch (err) {
      console.error(err);
      setErrorMsg("저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}

      <S.TwoColumnWrapper>
        {/* 좌측 컬럼 */}
        <S.Column>
          {/* (1) 기본 정보 섹션 */}
          <S.Section>
            <S.SectionTitle>기본 정보</S.SectionTitle>
            <S.Grid>
              <S.InputGroup>
                {/* 필수 항목 *를 빨간색으로 표시 */}
                <label>
                  나이<span style={{ color: "red" }}>*</span>
                </label>
                <S.Input
                  type="number"
                  name="age"
                  value={info.age}
                  onChange={handleChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label>
                  성별<span style={{ color: "red" }}>*</span>
                </label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="M"
                      checked={info.gender === "M"}
                      onChange={handleChange}
                    />
                    남
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="F"
                      checked={info.gender === "F"}
                      onChange={handleChange}
                    />
                    여
                  </label>
                </div>
              </S.InputGroup>
              <S.InputGroup>
                <label>
                  키(cm)<span style={{ color: "red" }}>*</span>
                </label>
                <S.Input
                  type="number"
                  name="height"
                  value={info.height}
                  onChange={handleChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label>
                  몸무게(kg)<span style={{ color: "red" }}>*</span>
                </label>
                <S.Input
                  type="number"
                  name="weight"
                  value={info.weight}
                  onChange={handleChange}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label>BMI</label>
                <S.BMIDisplay>{calcBMI() ?? "-"}</S.BMIDisplay>
              </S.InputGroup>
            </S.Grid>
          </S.Section>

          {/* (2) 건강 상태 섹션 */}
          <S.Section>
            <S.SectionTitle>건강 상태</S.SectionTitle>
            <S.Grid>
              <S.InputGroup>
                <label>혈압 수준</label>
                <S.Select
                  name="bloodPressureLevel"
                  value={info.bloodPressureLevel}
                  onChange={handleChange}
                >
                  <option value="">선택</option>
                  <option value="1">저혈압</option>
                  <option value="2">정상</option>
                  <option value="3">경계</option>
                  <option value="4">고혈압</option>
                </S.Select>
              </S.InputGroup>

              <S.InputGroup>
                <label>혈당 수준</label>
                <S.Select
                  name="bloodSugarLevel"
                  value={info.bloodSugarLevel}
                  onChange={handleChange}
                >
                  <option value="">선택</option>
                  <option value="1">저혈당</option>
                  <option value="2">정상</option>
                  <option value="3">공복혈당장애</option>
                  <option value="4">당뇨</option>
                </S.Select>
              </S.InputGroup>
            </S.Grid>
            <S.Grid>
              <S.InputGroup>
                <label>수술횟수</label>
                <S.Select
                  name="surgeryCount"
                  value={info.surgeryCount}
                  onChange={handleChange}
                >
                  {Array.from({ length: 6 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}회
                    </option>
                  ))}
                </S.Select>
              </S.InputGroup>

              <S.CheckboxSection>
                <label>
                  <input
                    type="checkbox"
                    name="isSmoking"
                    checked={info.isSmoking}
                    onChange={handleChange}
                  />
                  흡연
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="isDrinking"
                    checked={info.isDrinking}
                    onChange={handleChange}
                  />
                  음주
                </label>
              </S.CheckboxSection>
            </S.Grid>
          </S.Section>
        </S.Column>

        {/* 우측 컬럼 */}
        <S.Column>
          {/* (3) 만성질환 */}
          <S.Section>
            <S.SectionTitle>만성질환</S.SectionTitle>
            <S.ChronicDiseaseGrid>
              {chronicDiseaseList.map((disease) => (
                <S.DiseaseLabel key={disease}>
                  <input
                    type="checkbox"
                    name="chronicDiseases"
                    value={disease}
                    checked={info.chronicDiseases.includes(disease)}
                    onChange={handleChange}
                  />
                  {disease}
                </S.DiseaseLabel>
              ))}
            </S.ChronicDiseaseGrid>
          </S.Section>

          {/* (4) 직업 */}
          <S.Section>
            <S.SectionTitle>직업</S.SectionTitle>
            <S.RadioGroup>
              {jobTypes.map((job) => (
                <label key={job}>
                  <input
                    type="radio"
                    name="jobType"
                    value={job}
                    checked={info.jobType === job}
                    onChange={handleChange}
                  />
                  {job}
                </label>
              ))}
            </S.RadioGroup>
          </S.Section>

          {/* (5) 생활 정보 */}
          <S.Section>
            <S.SectionTitle>생활 정보</S.SectionTitle>
            <S.CheckboxSection>
              <label>
                <input
                  type="checkbox"
                  name="hasChildren"
                  checked={info.hasChildren}
                  onChange={handleChange}
                />
                자녀 있음
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hasOwnHouse"
                  checked={info.hasOwnHouse}
                  onChange={handleChange}
                />
                자가주택 보유
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hasPet"
                  checked={info.hasPet}
                  onChange={handleChange}
                />
                반려동물 있음
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hasFamilyHistory"
                  checked={info.hasFamilyHistory}
                  onChange={handleChange}
                />
                가족력 있음
              </label>
            </S.CheckboxSection>
          </S.Section>
        </S.Column>
      </S.TwoColumnWrapper>

      <S.SubmitButton type="submit">저장하기</S.SubmitButton>
    </S.Form>
  );
};

export default HealthInfo;
