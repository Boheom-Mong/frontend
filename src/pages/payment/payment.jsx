import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import * as S from "./style"; 

import { useAuthStore } from "../../store/useAuthStore";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "tf5VUpqFDTAk-MVoQ9Ahj";

export function payment() {
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 50_000,
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      const widgets = tossPayments.widgets({
        customerKey,
      });

      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      // ------ UI 렌더링 ------
      await Promise.all([
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (widgets) {
      widgets.setAmount(amount);
    }
  }, [widgets, amount]);

  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

  // 로그인되어 있고 아직 user 정보가 없으면 fetchUserInfo 호출
  useEffect(() => {
    console.log("user정보", user);
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  // 아직 로그인되지 않았거나 user 정보를 못 가져온 상황 처리
  if (!isLoggedIn) {
    return <div>로그인 정보가 없습니다.</div>;
  }
  if (!user) {
    return <div>로그인 정보를 가져오는 중...</div>;
  }

  // 결제하기 버튼 핸들러
  const handlePaymentClick = async () => {
    try {
      const random = new Date().getTime() + Math.random();
      const randomId = btoa(random.toString());
      await widgets.requestPayment({
        orderId: randomId,
        orderName: "정기결제 테스트",
        successUrl: window.location.origin + "/successPage",
        failUrl: window.location.origin + "/failPage",
        customerEmail: user?.loginEmail,
        customerName: user?.name,
        customerMobilePhone: "01012345678",
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <S.Wrapper>
      <S.BoxSection>
        {/* 이용약관 UI */}
        <div id="agreement" />

        {/* 결제 UI */}
        <div id="payment-method" />
      </S.BoxSection>

      {/* 결제하기 버튼 */}
      <S.PaymentButton disabled={!ready} onClick={handlePaymentClick}>
        결제하기
      </S.PaymentButton>
    </S.Wrapper>
  );
}

export default payment;
