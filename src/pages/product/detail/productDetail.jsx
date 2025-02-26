"use client";

import { useParams } from "react-router-dom";
import * as S from "./style";

// 더미 데이터
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

const ProductDetail = () => {
  const { id } = useParams();
  const insurance = insuranceDetails[id];

  if (!insurance) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.CompanyName>{insurance.company}</S.CompanyName>
        <S.ProductName>{insurance.name}</S.ProductName>
        <S.CategoryTag>{insurance.category}</S.CategoryTag>
      </S.Header>

      <S.Content>
        <S.MainInfo>
          <S.Description>{insurance.description}</S.Description>
          <S.MonthlyFee>
            <span>월 보험료</span>
            <strong>{insurance.monthlyFee}</strong>
          </S.MonthlyFee>
        </S.MainInfo>

        <S.Section>
          <S.SectionTitle>보장 내용</S.SectionTitle>
          <S.CoverageGrid>
            {insurance.coverage.map((item, index) => (
              <S.CoverageCard key={index}>
                <h3>{item.title}</h3>
                <S.Amount>{item.amount}</S.Amount>
                <p>{item.description}</p>
              </S.CoverageCard>
            ))}
          </S.CoverageGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>주요 특징</S.SectionTitle>
          <S.FeatureList>
            {insurance.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </S.FeatureList>
        </S.Section>

        <S.Section>
          <S.SectionTitle>가입 조건</S.SectionTitle>
          <S.RequirementList>
            {insurance.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </S.RequirementList>
        </S.Section>
      </S.Content>

      <S.Actions>
        <S.ApplyButton>가입 신청하기</S.ApplyButton>
        <S.ConsultButton>상담 신청하기</S.ConsultButton>
      </S.Actions>
    </S.Wrapper>
  );
};

export default ProductDetail;
