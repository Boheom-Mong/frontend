// BillingAuth.jsx
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import * as S from "./style";
import PropTypes from "prop-types";

// clientKey / customerKey는 기존과 동일
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "Z5bbouOlF5gUBtdDbmYF1";

export function BillingAuth({ productId }) {
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
        // 여기에 productId를 포함해 카드 등록 완료 후 돌아올 URL을 지정
        successUrl: `${window.location.origin}/cardRegistration/${productId}`,
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
    <S.RegisterButton onClick={handleCardRegistration}>
      카드 등록하기
    </S.RegisterButton>
  );
}

BillingAuth.propTypes = {
  productId: PropTypes.number.isRequired,
};
