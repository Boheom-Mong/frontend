import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
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
    // 회원 결제
    const widgets = tossPayments.widgets({
      customerKey,
    });
    // 비회원 결제
    // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

    setWidgets(widgets);
  }

  fetchPaymentWidgets();
}, [clientKey, customerKey]);

useEffect(() => {
  async function renderPaymentWidgets() {
    if (widgets == null) {
      return;
    }
    // ------ 주문의 결제 금액 설정 ------
    await widgets.setAmount(amount);

    await Promise.all([
      // ------  결제 UI 렌더링 ------
      widgets.renderPaymentMethods({
        selector: "#payment-method",
        variantKey: "DEFAULT",
      }),
      // ------  이용약관 UI 렌더링 ------
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
  if (widgets == null) {
    return;
  }

  widgets.setAmount(amount);
}, [widgets, amount]);

const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

// 로그인되어 있고 아직 user 정보가 없으면 fetchUserInfo 호출
useEffect(() => {
  console.log("user정보", user);
  
  if (isLoggedIn && !user) {
    fetchUserInfo();
  }
}, [isLoggedIn, user, fetchUserInfo]);

// 아직 로그인되지 않았거나 user 정보를 못 가져온 상황
if (!isLoggedIn) {
  return <div>로그인 정보가 없습니다.</div>;
}
if (!user) {
  return <div>로그인 정보를 가져오는 중...</div>;
}

return (
  <div className="wrapper">
    <div className="box_section">
      {/* 이용약관 UI */}
      <div id="agreement" />

      {/* 쿠폰 체크박스 */}
      {/*
      <div>
        <div>
          <label htmlFor="coupon-box">
            <input
              id="coupon-box"
              type="checkbox"
              aria-checked="true"
              disabled={!ready}
              onChange={(event) => {
                // ------  주문서의 결제 금액이 변경되었을 경우 결제 금액 업데이트 ------
                setAmount(event.target.checked ? amount - 5_000 : amount + 5_000);
              }}
            />
            <span>5,000원 쿠폰 적용</span>
          </label>
        </div>
      </div>
      */}

      {/* 결제 UI */}
      <div id="payment-method" />

      {/* 결제하기 버튼 */}
      <button
        className="button"
        disabled={!ready}
        onClick={async () => {
          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
            const random = new Date().getTime() + Math.random(); //난수생성
            const randomId = btoa(random); //난수를 btoa(base64)로 인코딩한 orderID
            await widgets.requestPayment({
              orderId: randomId,//"RTWQWg_0ANWWmjOCcLTud",
              orderName: "정기결제 테스트",
              successUrl: window.location.origin + "/successPage",
              failUrl: window.location.origin + "/failPage",
              customerEmail:  user?.loginEmail,
              customerName: user?.name,
              customerMobilePhone: "01012345678",
            });
          } catch (error) {
            // 에러 처리하기
            //console.error(error);
            alert(error)
          }
        }}
      >
        결제하기
      </button>
    </div>
  </div>
  
);
}

export default payment;