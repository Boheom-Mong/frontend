import { useNavigate, useParams } from "react-router-dom";
import * as S from "./CardStyle";
import { CheckCircle, CreditCard, ArrowRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

function CardRegistration() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [showAnimation, setShowAnimation] = useState(true);

  // 애니메이션 효과를 위한 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 페이지가 마운트될 때 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const handleGoToAutoPayment = () => {
    navigate(`/autoPaymentSetting/${productId}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // 현재 날짜 및 시간 포맷팅
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 카드 번호 마스킹 (예시)
  const maskedCardNumber = "****-****-****-2040";

  return (
    <S.CardRegistrationContainer>
      <S.CardRegistrationCard>
        <S.BackButton onClick={handleGoBack}>
          <ChevronLeft size={18} />
          뒤로 가기
        </S.BackButton>

        <S.SuccessIconWrapper showAnimation={showAnimation}>
          <S.SuccessCircle showAnimation={showAnimation}>
            <CheckCircle size={50} color="#ffffff" strokeWidth={2.5} />
          </S.SuccessCircle>
        </S.SuccessIconWrapper>

        <S.RegistrationTitle>카드 등록 완료!</S.RegistrationTitle>
        <S.RegistrationMessage>
          카드가 성공적으로 등록되었습니다. <br /> 이제 자동 결제를 설정할 수
          있습니다.
        </S.RegistrationMessage>

        <S.CardInfoContainer>
          <S.CardInfoHeader>
            <CreditCard size={20} color="#4169e1" />
            <span>등록된 카드 정보</span>
          </S.CardInfoHeader>

          <S.CardInfoContent>
            <S.CardInfoItem>
              <S.CardInfoLabel>카드 번호</S.CardInfoLabel>
              <S.CardInfoValue>{maskedCardNumber}</S.CardInfoValue>
            </S.CardInfoItem>

            <S.CardInfoItem>
              <S.CardInfoLabel>카드사</S.CardInfoLabel>
              <S.CardInfoValue>국민카드</S.CardInfoValue>
            </S.CardInfoItem>

            <S.CardInfoItem>
              <S.CardInfoLabel>등록 일시</S.CardInfoLabel>
              <S.CardInfoValue>{getCurrentDateTime()}</S.CardInfoValue>
            </S.CardInfoItem>
          </S.CardInfoContent>
        </S.CardInfoContainer>

        <S.NoticeContainer>
          <S.NoticeTitle>알려드립니다</S.NoticeTitle>
          <S.NoticeList>
            <S.NoticeItem>
              등록된 카드는 마이페이지에서 언제든지 변경하실 수 있습니다.
            </S.NoticeItem>
            <S.NoticeItem>
              자동 결제 설정 시 매월 지정된 날짜에 자동으로 보험료가 결제됩니다.
            </S.NoticeItem>
          </S.NoticeList>
        </S.NoticeContainer>

        <S.ButtonContainer>
          <S.AutoPaymentButton onClick={handleGoToAutoPayment}>
            자동 결제 설정하기
            <ArrowRight size={18} />
          </S.AutoPaymentButton>
        </S.ButtonContainer>
      </S.CardRegistrationCard>
    </S.CardRegistrationContainer>
  );
}

export default CardRegistration;
