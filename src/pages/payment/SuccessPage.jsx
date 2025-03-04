import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./style"; // 위에서 만든 style.js 파일 import

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    async function confirm() {
      const response = await fetch("/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }
      // 결제 성공 비즈니스 로직
    }

    confirm();
  }, [navigate, searchParams]);

  return (
    <S.SuccessWrapper>
      <S.SuccessBox>
        <S.CheckIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0064ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </S.CheckIcon>

        <h2>결제 완료</h2>
        <p>결제가 완료되었습니다.</p>

        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(searchParams.get("amount")).toLocaleString()}원`}</p>
      </S.SuccessBox>
    </S.SuccessWrapper>
  );
}

export default SuccessPage;
