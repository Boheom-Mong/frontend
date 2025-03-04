import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 필요한 axios 인스턴스(예: accessClient) import
// import accessClient from "../path/to/axiosInstance";

function TossCallback() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const paymentKey = new URL(window.location.href).searchParams.get("paymentKey");
    const orderId = new URL(window.location.href).searchParams.get("orderId");
    const amount = new URL(window.location.href).searchParams.get("amount");

    // spring 서버로 인증키를 통해 결제 검증/로그인/예약 정보등 처리
    accessClient.post(`${process.env.VITE_APP_REQUEST_URL}/api/client/token/payment`, {
      paymentKey,
      orderId,
      amount,
    })
    .then((res) => {
      // 서버에서 예약 정보(예: res.data) 응답 후 처리
      const reserv = res.data;
      // 임시 저장 정보 삭제
      localStorage.removeItem("rsvIdx");
      // 예약 내역 페이지로 이동
      navigate("/shop/reservation/detail", { state: reserv });
    })
    .catch((err) => {
      // 에러 처리
      alert(err.response.data.detail);
      // 이전 페이지로 돌아가기 (또는 다른 페이지로 이동)
      window.history.back();
    });
  }, [navigate]);

  return <div>결제 검증 처리중...</div>;
}

export default TossCallback;
