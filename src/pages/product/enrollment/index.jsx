import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";
import {
  AlertTriangle,
  ArrowLeft,
  Shield,
  DollarSign,
  FileText,
  Building,
  Package,
  Check,
} from "lucide-react";
import useInsuranceProductStore from "../../../store/useInsuranceProductStore";

const ConfirmInsurance = () => {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [insurance, setInsurance] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetchInsuranceById로 서버에서 상품 가져오기
  const { fetchInsuranceById } = useInsuranceProductStore();

  useEffect(() => {
    // 페이지가 마운트될 때 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  // 상품 불러오기
  useEffect(() => {
    (async () => {
      try {
        const fetchedInsurance = await fetchInsuranceById(productId);
        setInsurance(fetchedInsurance);
      } catch (error) {
        console.error("보험 상품을 불러오는 중 에러:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [productId, fetchInsuranceById]);

  // 가입 진행 버튼
  const handleConfirm = () => {
    if (!isConfirmed) {
      alert("가입 동의를 확인해주세요.");
      return;
    }
    navigate(`/agreement/${productId}`);
  };

  // 뒤로가기
  const handleCancel = () => {
    navigate(`/product/${productId}`);
  };

  // 1) 로딩 중
  if (loading) {
    return (
      <S.LoadingContainer>
        <S.LoadingSpinner />
        <S.LoadingText>상품 정보를 불러오는 중입니다...</S.LoadingText>
      </S.LoadingContainer>
    );
  }

  // 2) 상품 없음
  if (!insurance) {
    return (
      <S.ErrorContainer>
        <S.ErrorIconWrapper>
          <AlertTriangle size={64} />
        </S.ErrorIconWrapper>
        <S.ErrorTitle>보험 상품을 찾을 수 없습니다</S.ErrorTitle>
        <S.ErrorDescription>
          선택하신 상품이 존재하지 않거나 이미 삭제되었습니다.
        </S.ErrorDescription>
        <S.ErrorButton onClick={() => navigate("/")}>
          홈으로 돌아가기
        </S.ErrorButton>
      </S.ErrorContainer>
    );
  }

  // 3) 정상 렌더링
  return (
    <S.PageContainer>
      <S.ConfirmContainer>
        <S.BackButton onClick={handleCancel}>
          <ArrowLeft size={18} />
          <span>돌아가기</span>
        </S.BackButton>

        <S.HeaderSection>
          <S.HeaderContent>
            <S.CompanyBadge>{insurance.companyName}</S.CompanyBadge>
            <S.ProductTitle>{insurance.productName}</S.ProductTitle>
            <S.CategoryBadge>{insurance.productCategory}</S.CategoryBadge>
          </S.HeaderContent>
        </S.HeaderSection>

        <S.ContentSection>
          <S.SectionTitle>
            <S.SectionTitleIcon>
              <Shield size={20} />
            </S.SectionTitleIcon>
            <span>보험 상품 정보</span>
          </S.SectionTitle>

          <S.InfoCardsContainer>
            <S.InfoCard>
              <S.InfoCardIcon>
                <Building size={24} />
              </S.InfoCardIcon>
              <S.InfoCardContent>
                <S.InfoCardLabel>보험사</S.InfoCardLabel>
                <S.InfoCardValue>{insurance.companyName}</S.InfoCardValue>
              </S.InfoCardContent>
            </S.InfoCard>

            <S.InfoCard>
              <S.InfoCardIcon>
                <Package size={24} />
              </S.InfoCardIcon>
              <S.InfoCardContent>
                <S.InfoCardLabel>상품명</S.InfoCardLabel>
                <S.InfoCardValue>{insurance.productName}</S.InfoCardValue>
              </S.InfoCardContent>
            </S.InfoCard>

            <S.InfoCard>
              <S.InfoCardIcon>
                <DollarSign size={24} />
              </S.InfoCardIcon>
              <S.InfoCardContent>
                <S.InfoCardLabel>월 보험료</S.InfoCardLabel>
                <S.InfoCardValue highlight>
                  {insurance.monthlyPremium?.toLocaleString()}원
                </S.InfoCardValue>
              </S.InfoCardContent>
            </S.InfoCard>
          </S.InfoCardsContainer>

          <S.CoverageCard>
            <S.CoverageHeader>
              <FileText size={20} />
              <S.CoverageTitle>보장 내용</S.CoverageTitle>
            </S.CoverageHeader>
            <S.CoverageContent>{insurance.coverageDetails}</S.CoverageContent>
          </S.CoverageCard>
        </S.ContentSection>

        <S.WarningSection>
          <S.WarningIcon>
            <AlertTriangle size={24} />
          </S.WarningIcon>
          <S.WarningContent>
            <S.WarningTitle>가입 전 확인사항</S.WarningTitle>
            <S.WarningText>
              보험 가입 전 보장 내용을 충분히 숙지했나요?
              <br />
              보험 가입은 신중하게! 선택한 보험 내용을 다시 확인하세요.
            </S.WarningText>
          </S.WarningContent>
        </S.WarningSection>

        <S.AgreementSection>
          <S.CheckboxLabel>
            <S.HiddenCheckbox
              type="checkbox"
              checked={isConfirmed}
              onChange={() => setIsConfirmed(!isConfirmed)}
            />
            <S.CustomCheckbox checked={isConfirmed}>
              {isConfirmed && <Check size={16} />}
            </S.CustomCheckbox>
            <S.CheckboxText>
              위 내용을 모두 확인하였으며, 가입에 동의합니다.
            </S.CheckboxText>
          </S.CheckboxLabel>
        </S.AgreementSection>

        <S.ActionSection>
          <S.CancelButton onClick={handleCancel}>취소하기</S.CancelButton>
          <S.ConfirmButton onClick={handleConfirm} disabled={!isConfirmed}>
            가입 진행하기
          </S.ConfirmButton>
        </S.ActionSection>
      </S.ConfirmContainer>
    </S.PageContainer>
  );
};

export default ConfirmInsurance;
