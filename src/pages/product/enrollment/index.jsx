import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";
import { AlertTriangle, CheckCircle, DollarSign, Shield } from "lucide-react";

const insuranceDetails = {
  1: {
    id: 1,
    company: "삼성생명",
    name: "스마트보장스페셜종신보험",
    category: "종신보험",
    description: "든든한 보장과 함께 스마트한 혜택을 제공하는 종신보험입니다.",
    monthlyFee: "89,000원",
    coverage: [
      {
        title: "사망보험금",
        amount: "1억원",
        description: "피보험자가 사망한 경우",
      },
      {
        title: "재해사망보험금",
        amount: "2억원",
        description: "피보험자가 재해로 사망한 경우",
      },
      {
        title: "암진단금",
        amount: "5천만원",
        description: "피보험자가 암으로 진단받은 경우",
      },
    ],
    features: [
      "보험료 납입면제 혜택",
      "만기환급금 지급",
      "장기 납입 시 보험료 할인",
      "온라인 가입 시 추가 할인",
    ],
    requirements: [
      "가입연령: 만 15세 ~ 65세",
      "보험기간: 종신",
      "납입기간: 10년, 15년, 20년, 30년",
    ],
  },
  // ... 더 많은 상품 데이터
};

const ApplyInsurance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const insurance = insuranceDetails[id];
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!insurance) {
    return <S.ErrorMessage>상품을 찾을 수 없습니다.</S.ErrorMessage>;
  }

  const handleConfirm = () => {
    if (isConfirmed) {
      // TODO: 실제 가입 로직 구현
      alert("보험 가입이 완료되었습니다.");
      navigate("/");
    } else {
      alert("보험 내용을 확인하고 체크박스를 선택해주세요.");
    }
  };

  return (
    <S.ApplyWrapper>
      <S.ApplyHeader>
        <S.ApplyTitle>{insurance.name}</S.ApplyTitle>
        <S.ApplySubtitle>{insurance.company}</S.ApplySubtitle>
      </S.ApplyHeader>

      <S.WarningSection>
        <AlertTriangle size={24} color="#856404" />
        <S.WarningTextContainer>
          <S.WarningText>
            보험 가입 전 보장 내용을 충분히 숙지했나요?
          </S.WarningText>
          <S.WarningText>
            보험 가입은 신중하게! 선택한 보험 내용을 다시 확인하세요.
          </S.WarningText>
        </S.WarningTextContainer>
      </S.WarningSection>

      <S.InsuranceInfoSection>
        <S.InfoCard>
          <S.InfoIcon>
            <Shield size={24} color="#007bff" />
          </S.InfoIcon>
          <S.InfoContent>
            <S.InfoLabel>보험 종류</S.InfoLabel>
            <S.InfoValue>{insurance.category}</S.InfoValue>
          </S.InfoContent>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoIcon>
            <DollarSign size={24} color="#28a745" />
          </S.InfoIcon>
          <S.InfoContent>
            <S.InfoLabel>월 보험료</S.InfoLabel>
            <S.InfoValue>{insurance.monthlyFee}</S.InfoValue>
          </S.InfoContent>
        </S.InfoCard>
      </S.InsuranceInfoSection>

      <S.CoverageSection>
        <S.SectionTitle>주요 보장 내용</S.SectionTitle>
        {insurance.coverage.map((item, index) => (
          <S.CoverageItem key={index}>
            <S.CoverageTitle>{item.title}</S.CoverageTitle>
            <S.CoverageAmount>{item.amount}</S.CoverageAmount>
          </S.CoverageItem>
        ))}
      </S.CoverageSection>

      <S.ConfirmSection>
        <S.ConfirmCheckbox
          type="checkbox"
          id="confirmCheck"
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
        />
        <S.ConfirmLabel htmlFor="confirmCheck">
          위 내용을 모두 확인하였으며, 가입에 동의합니다.
        </S.ConfirmLabel>
      </S.ConfirmSection>

      <S.ConfirmButton onClick={handleConfirm} disabled={!isConfirmed}>
        <CheckCircle size={20} />
        확인했습니다
      </S.ConfirmButton>
    </S.ApplyWrapper>
  );
};

export default ApplyInsurance;
