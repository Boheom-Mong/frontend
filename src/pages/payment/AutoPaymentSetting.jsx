import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./AutoPaymentStyle";
import {
  Calendar,
  Clock,
  CreditCard,
  Info,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import useAutoPaymentStore from "../../store/useAutoPaymentStore";

function AutoPaymentSetting() {
  const navigate = useNavigate();
  const [dayOfMonth, setDayOfMonth] = useState(25);
  const [time, setTime] = useState("09:00");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { productId } = useParams();
  const numericProductId = Number(productId);

  // 사용자 정보
  const { user } = useAuthStore();

  useEffect(() => {
    // 페이지가 마운트될 때 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const { createAutoPayment } = useAutoPaymentStore();

  // 날짜 변경 핸들러
  const handleDayChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 31) {
      setDayOfMonth(value);
    }
  };

  // 시간 변경 핸들러
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // 저장 핸들러
  const handleSave = async () => {
    try {
      setIsSubmitting(true);
      const userId = user?.userId;
      const payload = {
        userId,
        productId: numericProductId,
        dayOfMonth,
        time,
      };

      console.log(
        "userId:",
        userId,
        "productId:",
        numericProductId,
        "day:",
        dayOfMonth,
        "time:",
        time
      );

      await createAutoPayment(payload);

      // 성공 메시지 표시
      setIsSubmitting(false);

      // 성공 알림 표시
      S.showToast({
        type: "success",
        message: "자동 결제 설정이 완료되었습니다.",
      });

      // 잠시 후 페이지 이동
      setTimeout(() => {
        navigate("/mypage/autoPayment");
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);

      // 에러 알림 표시
      S.showToast({
        type: "error",
        message: "설정 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    }
  };

  // 뒤로 가기
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.AutoPaymentContainer>
      <S.AutoPaymentCard>
        <S.BackButton onClick={handleGoBack}>
          <ChevronLeft size={18} />
          뒤로 가기
        </S.BackButton>

        <S.AutoPaymentHeader>
          <S.AutoPaymentTitle>
            <CreditCard size={24} />
            자동 결제 설정
          </S.AutoPaymentTitle>
          <S.AutoPaymentSubtitle>
            매월 지정한 날짜와 시간에 자동으로 보험료가 결제됩니다.
          </S.AutoPaymentSubtitle>
        </S.AutoPaymentHeader>

        <S.FormContainer>
          <S.FormSection>
            <S.FormLabel>
              <Calendar size={18} />
              결제일 선택 (매월)
            </S.FormLabel>

            <S.FormDescription>
              매월 몇 일에 결제할지 선택해주세요. (1-31일)
            </S.FormDescription>

            <S.DayPickerContainer>
              <S.DaySlider
                type="range"
                min="1"
                max="31"
                value={dayOfMonth}
                onChange={handleDayChange}
              />
              <S.DayDisplay>
                <span>{dayOfMonth}</span>일
              </S.DayDisplay>
            </S.DayPickerContainer>

            <S.DayNumbersContainer>
              {[1, 5, 10, 15, 20, 25, 31].map((day) => (
                <S.DayNumber
                  key={day}
                  isSelected={dayOfMonth === day}
                  onClick={() => setDayOfMonth(day)}
                >
                  {day}
                </S.DayNumber>
              ))}
            </S.DayNumbersContainer>
          </S.FormSection>

          <S.FormSection>
            <S.FormLabel>
              <Clock size={18} />
              결제 시간 선택
            </S.FormLabel>

            <S.FormDescription>
              결제가 진행될 시간을 선택해주세요.
            </S.FormDescription>

            <S.TimePickerContainer>
              <S.TimeInput
                type="time"
                value={time}
                onChange={handleTimeChange}
              />
              <S.TimeDisplay>
                {time.split(":")[0]}시 {time.split(":")[1]}분
              </S.TimeDisplay>
            </S.TimePickerContainer>

            <S.TimePresets>
              <S.TimePresetButton
                isSelected={time === "09:00"}
                onClick={() => setTime("09:00")}
              >
                오전 9시
              </S.TimePresetButton>
              <S.TimePresetButton
                isSelected={time === "12:00"}
                onClick={() => setTime("12:00")}
              >
                정오
              </S.TimePresetButton>
              <S.TimePresetButton
                isSelected={time === "18:00"}
                onClick={() => setTime("18:00")}
              >
                오후 6시
              </S.TimePresetButton>
            </S.TimePresets>
          </S.FormSection>

          <S.NoticeContainer>
            <S.NoticeHeader>
              <Info size={18} />
              알려드립니다
            </S.NoticeHeader>
            <S.NoticeList>
              <S.NoticeItem>
                자동 결제는 설정한 날짜와 시간에 자동으로 진행됩니다.
              </S.NoticeItem>
              <S.NoticeItem>
                잔액 부족 등의 이유로 결제가 실패할 경우 3일 후 재시도합니다.
              </S.NoticeItem>
              <S.NoticeItem>
                자동 결제 설정은 마이페이지에서 언제든지 변경하실 수 있습니다.
              </S.NoticeItem>
            </S.NoticeList>
          </S.NoticeContainer>
        </S.FormContainer>

        <S.ButtonContainer>
          <S.CancelButton onClick={handleGoBack}>취소</S.CancelButton>
          <S.SaveButton onClick={handleSave} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <S.LoadingSpinner />
                저장 중...
              </>
            ) : (
              <>
                <CheckCircle size={18} />
                설정 완료
              </>
            )}
          </S.SaveButton>
        </S.ButtonContainer>
      </S.AutoPaymentCard>

      <S.ToastContainer id="toast-container" />
    </S.AutoPaymentContainer>
  );
}

export default AutoPaymentSetting;
