import { useState } from "react";
import * as S from "./style";

const chronicDiseases = [
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
];

const jobTypes = ["사무직", "배달", "건설", "자영업", "학생", "주부", "무직"];

const UserHealth = () => {
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
    chronicDiseases: [],
    jobType: "",
    hasChildren: false,
    hasOwnHouse: false,
    hasPet: false,
    hasFamilyHistory: false,
  });

  const calculateBMI = () => {
    if (!healthInfo.height || !healthInfo.weight) return null;
    const heightInMeters = healthInfo.height / 100;
    return (healthInfo.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "chronicDiseases") {
        setHealthInfo((prev) => ({
          ...prev,
          chronicDiseases: checked
            ? [...prev.chronicDiseases, value]
            : prev.chronicDiseases.filter((disease) => disease !== value),
        }));
      } else {
        setHealthInfo((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setHealthInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <S.Wrapper>
      <S.Title>내 건강 정보</S.Title>

      <S.Form>
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
          </S.Grid>

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
        </S.Section>

        <S.Section>
          <S.SectionTitle>만성질환</S.SectionTitle>
          <S.ChronicDiseaseGrid>
            {chronicDiseases.map((disease) => (
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

        <S.SubmitButton type="submit">저장하기</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default UserHealth;
