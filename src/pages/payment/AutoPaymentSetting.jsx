import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import useAutoPaymentStore from "../../store/useAutoPaymentStore";

function AutoPaymentSetting() {
  const navigate = useNavigate();
  const [dayOfMonth, setDayOfMonth] = useState(25);
  const [time, setTime] = useState("09:00");

  const { productId } = useParams();
  const numericProductId = Number(productId);

  // 사용자 정보
  const { user } = useAuthStore();

  // **Zustand 스토어**에서 가져오기
  const { createAutoPayment } = useAutoPaymentStore();

  const handleSave = async () => {
    try {
      const userId = user?.userId;
      const payload = {
        userId,
        productId: numericProductId,
        dayOfMonth,
        time,
      };

      await createAutoPayment(payload);

      alert("자동 결제 스케줄이 저장되었습니다.");
      navigate("/mypage/autoPayment");
    } catch (error) {
      console.error(error);
      alert("서버 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <div style={{ margin: "40px" }}>
      <h2>자동 결제 날짜/시간 설정</h2>

      <div>
        <label>결제일 (매월): </label>
        <input
          type="number"
          min={1}
          max={31}
          value={dayOfMonth}
          onChange={(e) => setDayOfMonth(e.target.value)}
        />
      </div>

      <div>
        <label>결제 시간: </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button onClick={handleSave}>저장하기</button>
    </div>
  );
}

export default AutoPaymentSetting;
