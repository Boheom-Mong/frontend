import * as S from "./style";

const MyInsurance = () => {
  const userInsurances = [
    {
      id: 1,
      name: "스마트보장스페셜종신보험",
      company: "삼성생명",
      monthlyFee: "89,000원",
      coverage: "사망보험금 1억원, 재해사망보험금 2억원",
    },
    {
      id: 2,
      name: "건강백세종신보험",
      company: "한화생명",
      monthlyFee: "76,000원",
      coverage: "사망보험금 1억원, 암진단금 3천만원",
    },
  ];

  return (
    <S.Section>
      <S.SectionTitle>나의 보험</S.SectionTitle>
      {userInsurances.map((insurance) => (
        <S.InsuranceCard key={insurance.id}>
          <S.CardHeader>
            <S.CompanyName>{insurance.company}</S.CompanyName>
          </S.CardHeader>
          <S.CardBody>
            <h3>{insurance.name}</h3>
            <p>월 보험료: {insurance.monthlyFee}</p>
            <p>보장 내용: {insurance.coverage}</p>
          </S.CardBody>
        </S.InsuranceCard>
      ))}
    </S.Section>
  );
};

export default MyInsurance;
