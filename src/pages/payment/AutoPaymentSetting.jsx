import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AutoPaymentSetting() {
  const navigate = useNavigate();
  const [dayOfMonth, setDayOfMonth] = useState(25);
  const [time, setTime] = useState("09:00");

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/autoPayment", {
        dayOfMonth,
        time,
      });

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
