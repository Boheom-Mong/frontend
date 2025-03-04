import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import API from "../../store";

// 직업 한글 목록
const jobTypes = ["사무직", "배달", "건설", "자영업", "학생", "무직"];

// 한글 → Enum 상수
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
    chronicDiseases: [],
    jobType: "",
    hasChildren: false,
    hasOwnHouse: false,
    hasPet: false,
    hasFamilyHistory: false,
  });

  const [errorMsg, setErrorMsg] = useState("");

  // 필수 항목 검사 (나이, 성별, 키, 몸무게)
  const validateRequired = () => {
    if (!info.age || !info.gender || !info.height || !info.weight) {
      setErrorMsg("기본 정보(나이, 성별, 키, 몸무게)는 필수입니다.");
      return false;
    }
    return true;
  };

  // 입력 변경
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "chronicDiseases") {
        // 다중 체크: 이미 배열로 상태 관리
        setInfo((prev) => ({
          ...prev,
          chronicDiseases: checked
            ? [...prev.chronicDiseases, value]
            : prev.chronicDiseases.filter((d) => d !== value),
        }));
      } else {
        // 단일 checkbox (예: isSmoking, isDrinking 등)
        setInfo((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      // text/radio/select
      setInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  // BMI 계산 (문자열 대신 number)
  const calcBMI = () => {
    const h = Number(info.height);
    const w = Number(info.weight);
    if (!h || !w) return null; // 둘 중 하나가 없으면 null
    const m = h / 100;
    const rawBMI = w / (m * m);
    return Number(rawBMI.toFixed(1));
    // .toFixed(1)은 문자열, 다시 Number(...)로 감싸서 숫자로
  };

  // 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // 필수 값 검증
    if (!validateRequired()) return;

    try {
      const convertedJobType = jobTypeMap[info.jobType] || "UNEMPLOYED";

      const bpValue =
        info.bloodPressureLevel === "" ? null : Number(info.bloodPressureLevel);
      const bsValue =
        info.bloodSugarLevel === "" ? null : Number(info.bloodSugarLevel);
      const payload = {
        age: Number(info.age),
        gender: info.gender,
        height: Number(info.height),
        weight: Number(info.weight),
        bmi: calcBMI(), // 숫자 or null
        bloodPressureLevel: bpValue,
        bloodSugarLevel: bsValue,
        isSmoker: info.isSmoking,
        isDrinker: info.isDrinking,
        // **중요**: 만성질환 배열
        chronicDiseases: info.chronicDiseases,

        jobType: convertedJobType,
        hasChildren: info.hasChildren,
        hasOwnHouse: info.hasOwnHouse,
        hasPet: info.hasPet,
        hasFamilyHistory: info.hasFamilyHistory,
      };

      // POST 전송
      await API.post("/user-health", payload);
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
        {/* 왼쪽 컬럼 */}
        <S.Column>
          {/* 기본 정보 */}
          <S.Section>
            <S.SectionTitle>기본 정보</S.SectionTitle>
            <S.Grid>
              {/* 나이 */}
              <S.InputGroup>
                <label>나이*</label>
                <S.Input
                  type="number"
                  name="age"
                  value={info.age}
                  onChange={handleChange}
                />
              </S.InputGroup>
              {/* 성별 */}
              <S.InputGroup>
                <label>성별*</label>
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
              {/* 키 */}
              <S.InputGroup>
                <label>키(cm)*</label>
                <S.Input
                  type="number"
                  name="height"
                  value={info.height}
                  onChange={handleChange}
                />
              </S.InputGroup>
              {/* 몸무게 */}
              <S.InputGroup>
                <label>몸무게(kg)*</label>
                <S.Input
                  type="number"
                  name="weight"
                  value={info.weight}
                  onChange={handleChange}
                />
              </S.InputGroup>
              {/* BMI */}
              <S.InputGroup>
                <label>BMI</label>
                <S.BMIDisplay>{calcBMI() ?? "-"}</S.BMIDisplay>
              </S.InputGroup>
            </S.Grid>
          </S.Section>

          {/* 건강 상태 */}
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
          </S.Section>
        </S.Column>

        {/* 오른쪽 컬럼 */}
        <S.Column>
          {/* 만성질환 */}
          <S.Section>
            <S.SectionTitle>만성질환</S.SectionTitle>
            <S.ChronicDiseaseGrid>
              {["고혈압", "당뇨", "고지혈증", "천식", "암"].map((disease) => (
                <label key={disease}>
                  <input
                    type="checkbox"
                    name="chronicDiseases"
                    value={disease}
                    checked={info.chronicDiseases.includes(disease)}
                    onChange={handleChange}
                  />
                  {disease}
                </label>
              ))}
            </S.ChronicDiseaseGrid>
          </S.Section>

          {/* 직업 */}
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

          {/* 생활 정보 */}
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
