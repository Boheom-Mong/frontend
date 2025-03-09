"use client";

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./successStyle";
import useUserProductStore from "../../store/useUserProductStore";
import { CheckCircle, Home, FileText, ArrowRight } from "lucide-react";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // (1) purchaseProduct 함수를 스토어에서 가져온다
  const { purchaseProduct } = useUserProductStore();

  useEffect(() => {
    // URL 파라미터에서 productId, amount 가져온다고 가정
    const productId = searchParams.get("productId");
    const amountStr = searchParams.get("amount");
    const paidAmount = amountStr ? Number.parseInt(amountStr, 10) : 0;

    // 페이지에 들어오면 곧바로 POST
    async function postPurchase() {
      try {
        if (!productId) {
          console.warn("[SuccessPage] productId가 없습니다.");
          return;
        }

        // purchaseProduct -> 서버로 POST (UserProduct 테이블에 저장)
        await purchaseProduct(productId, paidAmount);

        console.log("결제 성공 & UserProduct에 productId 저장 완료!");
      } catch (err) {
        console.error("구매 이력 저장 실패:", err);
        // 필요한 경우 실패 시 처리
        // navigate("/fail");
      }
    }

    postPurchase();
  }, [searchParams, purchaseProduct, navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleViewMyInsurance = () => {
    navigate("/mypage/insurance");
  };

  // 현재 날짜를 YYYY-MM-DD 형식으로 반환
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <S.SuccessPageContainer>
      <S.SuccessCard>
        <S.SuccessIconWrapper>
          <CheckCircle size={80} color="#4169e1" strokeWidth={1.5} />
        </S.SuccessIconWrapper>

        <S.SuccessTitle>결제가 성공적으로 완료되었습니다!</S.SuccessTitle>
        <S.SuccessMessage>
          보험 가입이 정상적으로 처리되었습니다. 아래 정보를 확인해주세요.
        </S.SuccessMessage>

        <S.PaymentInfoContainer>
          <S.PaymentInfoItem>
            <S.PaymentInfoLabel>주문번호</S.PaymentInfoLabel>
            <S.PaymentInfoValueNumber>
              {searchParams.get("orderId") || "-"}
            </S.PaymentInfoValueNumber>
          </S.PaymentInfoItem>

          <S.PaymentInfoItem>
            <S.PaymentInfoLabel>결제 금액</S.PaymentInfoLabel>
            <S.PaymentInfoValue>
              {Number(searchParams.get("amount") || 0).toLocaleString()}원
            </S.PaymentInfoValue>
          </S.PaymentInfoItem>

          <S.PaymentInfoItem>
            <S.PaymentInfoLabel>결제 일시</S.PaymentInfoLabel>
            <S.PaymentInfoValue>{getCurrentDate()}</S.PaymentInfoValue>
          </S.PaymentInfoItem>
        </S.PaymentInfoContainer>

        <S.NextStepsContainer>
          <S.NextStepsTitle>다음 단계</S.NextStepsTitle>
          <S.NextStepsList>
            <S.NextStepsItem>
              <FileText size={18} />
              <span>마이페이지에서 가입 내역을 확인할 수 있습니다.</span>
            </S.NextStepsItem>
          </S.NextStepsList>
        </S.NextStepsContainer>

        <S.ButtonContainer>
          <S.HomeButton onClick={handleGoHome}>
            <Home size={18} />
            홈으로 돌아가기
          </S.HomeButton>

          <S.ViewInsuranceButton onClick={handleViewMyInsurance}>
            <FileText size={18} />
            가입 내역 보기
            <ArrowRight size={16} />
          </S.ViewInsuranceButton>
        </S.ButtonContainer>
      </S.SuccessCard>

      <S.ConfettiContainer>
        {Array.from({ length: 50 }).map((_, index) => (
          <S.Confetti key={index} delay={Math.random() * 5} />
        ))}
      </S.ConfettiContainer>
    </S.SuccessPageContainer>
  );
}

export default SuccessPage;
