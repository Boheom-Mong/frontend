import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";  // 스타일
import { Shield, DollarSign, FileText, Phone } from 'lucide-react';
import useInsuranceProductStore from "../../../store/useInsuranceProductStore";
import insuranceDetailsData from "../../../data/insuranceDetailsData";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = Number(id);

  const { findInsuranceById } = useInsuranceProductStore();
  const insurance = findInsuranceById(productId);

  if (!insurance) {
    return (
      <S.Wrapper>
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>상품을 찾을 수 없습니다.</h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>요청하신 보험 상품 정보를 찾을 수 없습니다.</p>
          <button 
            onClick={() => navigate('/')} 
            style={{ 
              padding: '0.75rem 1.5rem', 
              background: '#4169e1', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer' 
            }}
          >
            홈으로 돌아가기
          </button>
        </div>
      </S.Wrapper>
    );
  }

  // 가입 신청 예시
  const handleApply = () => {
    navigate(`/product/${id}/enrollment`);
  };

  // 1) 카테고리에 맞춰 data 중 랜덤 하나 고르기
  const { productCategory } = insurance;
  const sameCategoryList = insuranceDetailsData.filter(
    (item) => item.category === productCategory
  );

  let randomDetail = null;
  if (sameCategoryList.length > 0) {
    const randIndex = Math.floor(Math.random() * sameCategoryList.length);
    randomDetail = sameCategoryList[randIndex];
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.CompanyName>{insurance.companyName}</S.CompanyName>
        <S.ProductName>{insurance.productName}</S.ProductName>
        <S.CategoryTag>{insurance.productCategory || "카테고리"}</S.CategoryTag>
      </S.Header>

      <S.Content>
        <S.MainInfo>
          {/* 상품 개요 섹션 */}
          <S.ProductOverview>
            <S.Description>{insurance.coverageDetails}</S.Description>
            <S.MonthlyFee>
              <span>월 보험료</span>
              <strong>{insurance.monthlyPremium?.toLocaleString()}원</strong>
            </S.MonthlyFee>
          </S.ProductOverview>

          {/* 상세 정보 섹션 */}
          {randomDetail && (
            <S.DetailSection>
              <S.SectionTitle>상품 상세 정보</S.SectionTitle>
              
              <S.InfoBlockContainer>
                {/* 보장 내용 블록 */}
                <S.InfoBlock>
                  <S.InfoBlockTitle>
                    <Shield size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    보장 내용
                  </S.InfoBlockTitle>
                  
                  <S.InfoBlockText>
                    <strong>보장금액</strong>
                    <span>{randomDetail.coverage.guaranteeAmount}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>제외사항</strong>
                    <span>{randomDetail.coverage.exclusions}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>특약</strong>
                    <span>{randomDetail.coverage.specialClauses}</span>
                  </S.InfoBlockText>
                </S.InfoBlock>

                {/* 보험료 정보 블록 */}
                <S.InfoBlock>
                  <S.InfoBlockTitle>
                    <DollarSign size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    보험료 정보
                  </S.InfoBlockTitle>
                  
                  <S.InfoBlockText>
                    <strong>예시</strong>
                    <span>{randomDetail.premiumDetails.planExamples}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>납입주기</strong>
                    <span>{randomDetail.premiumDetails.paymentCycle}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>면제조건</strong>
                    <span>{randomDetail.premiumDetails.waiverCondition}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>환급형태</strong>
                    <span>{randomDetail.premiumDetails.refundType}</span>
                  </S.InfoBlockText>
                </S.InfoBlock>

                {/* 가입 안내 블록 */}
                <S.InfoBlock>
                  <S.InfoBlockTitle>
                    <FileText size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    가입 안내
                  </S.InfoBlockTitle>
                  
                  <S.InfoBlockText>
                    <strong>온라인 가입</strong>
                    <span>{randomDetail.applicationProcess.onlinePossible ? "가능" : "불가"}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>콜센터</strong>
                    <span>{randomDetail.applicationProcess.callCenter}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>대면 상담</strong>
                    <span>{randomDetail.applicationProcess.faceToFaceConsult}</span>
                  </S.InfoBlockText>
                  
                  <S.InfoBlockText>
                    <strong>필요 서류</strong>
                    <span>{randomDetail.applicationProcess.neededDocuments}</span>
                  </S.InfoBlockText>
                </S.InfoBlock>
              </S.InfoBlockContainer>
              
              {/* 추가 정보 박스 */}
              <S.ExtraBox>
                <S.FeatureList>
                  <li>보험료 납입 면제 혜택이 있을 수 있습니다.</li>
                  <li>가입 후 3개월 이내 취소 시 전액 환급됩니다.</li>
                  <li>온라인 가입 시 최대 15% 할인 혜택을 받을 수 있습니다.</li>
                </S.FeatureList>
              </S.ExtraBox>
            </S.DetailSection>
          )}
        </S.MainInfo>
      </S.Content>

      {/* 가입/상담 버튼 */}
      <S.Actions>
        <S.ApplyButton onClick={handleApply}>
          <Shield size={20} />
          가입 신청하기
        </S.ApplyButton>
        <S.ConsultButton>
          <Phone size={20} />
          상담 신청하기
        </S.ConsultButton>
      </S.Actions>
    </S.Wrapper>
  );
};

export default ProductDetail;
