import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "Z5bbouOlF5gUBtdDbmYF1";

export function BillingAuth() {
  const [paymentApi, setPaymentApi] = useState(null);

  useEffect(() => {
    async function initPaymentApi() {
      const tossPayments = await loadTossPayments(clientKey);
      const billingPayment = tossPayments.payment({ customerKey });
      setPaymentApi(billingPayment);
    }
    initPaymentApi();
  }, []);

  async function handleCardRegistration() {
    if (!paymentApi) return;

    try {
      // 카드 등록 요청
      await paymentApi.requestBillingAuth({
        method: "CARD",
        successUrl: window.location.origin + "/cardRegistration",
        failUrl: window.location.origin + "/failPage",
        customerEmail: "user@example.com",
        customerName: "홍길동",
      });
    } catch (error) {
      console.error(error);
      alert("카드 등록 중 오류가 발생했습니다.");
    }
  }

  return (
    <button onClick={handleCardRegistration}>
      카드 등록하기
    </button>
  );
}
