// ProductDetail.jsx
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import useInsuranceProductStore from "../../../store/useInsuranceProductStore";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();             // URL에서 /product/:id
  const productId = Number(id);           // 문자열 → 숫자 변환

  // 1) 스토어에서 findInsuranceById를 가져옴
  const { findInsuranceById } = useInsuranceProductStore();

  // 2) 해당 상품 찾기
  const insurance = findInsuranceById(productId);

  if (!insurance) {
    // 만약 홈 화면(또는 다른 화면)에서 상품을 불러오기 전에 접근했거나,
    // 해당 id의 상품이 스토어에 없는 경우 => 에러 처리
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  // 이 handleApply는 원하는 경로로 이동시키면 됩니다.
  const handleApply = () => {
    navigate(`/product/${id}/enrollment`);
  };

  // 3) 실제 렌더링
  return (
    <S.Wrapper>
      <S.Header>
        {/* 스토어에 저장된 필드 이름에 맞춰 변경 */}
        <S.CompanyName>{insurance.companyName}</S.CompanyName>
        <S.ProductName>{insurance.productName}</S.ProductName>
        <S.CategoryTag>{insurance.productCategory || "카테고리"}</S.CategoryTag>
      </S.Header>

      <S.Content>
        <S.MainInfo>
          <S.Description>{insurance.coverageDetails}</S.Description>
          <S.MonthlyFee>
            <span>월 보험료</span>
            <strong>
              {insurance.monthlyPremium?.toLocaleString()}원
            </strong>
          </S.MonthlyFee>
        </S.MainInfo>

        {/* 아래부터는, 만약 추가 필드(coverage, features 등)가 스토어에 없다면
            보이지 않을 수 있습니다. 필요하면 백엔드 상세 API 연결 */}
        
        {/* 예시: coverage가 배열이라면 */}
        {insurance.coverage && (
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
        )}

        {/* 예시: features */}
        {insurance.features && (
          <S.Section>
            <S.SectionTitle>주요 특징</S.SectionTitle>
            <S.FeatureList>
              {insurance.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </S.FeatureList>
          </S.Section>
        )}

        {/* 예시: requirements */}
        {insurance.requirements && (
          <S.Section>
            <S.SectionTitle>가입 조건</S.SectionTitle>
            <S.RequirementList>
              {insurance.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </S.RequirementList>
          </S.Section>
        )}
      </S.Content>

      <S.Actions>
        <S.ApplyButton onClick={handleApply}>가입 신청하기</S.ApplyButton>
        <S.ConsultButton>상담 신청하기</S.ConsultButton>
      </S.Actions>
    </S.Wrapper>
  );
};

export default ProductDetail;
