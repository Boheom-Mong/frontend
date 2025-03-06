import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

import { BillingAuth } from "./BillingAuth"; 
import { useAuthStore } from "../../store/useAuthStore";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "tf5VUpqFDTAk-MVoQ9Ahj";

export function Payment() {
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);

  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 50_000,
  });

  const { getInsuranceProductDetail, selectedInsurance, loading, error } =
    useInsuranceProductStore();

  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

  const { productId } = useParams();

  useEffect(() => {
    async function initPaymentWidgets() {
      const tossPayments = await loadTossPayments(clientKey);
      const w = tossPayments.widgets({ customerKey });
      setWidgets(w);
    }
    initPaymentWidgets();
  }, []);

  useEffect(() => {
    if (!widgets) return;
    async function renderWidgets() {
      await widgets.setAmount(amount);
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
    renderWidgets();
  }, [widgets, amount]);

  useEffect(() => {
    if (productId) {
      getInsuranceProductDetail(productId);
    }
  }, [productId, getInsuranceProductDetail]);

  useEffect(() => {
    if (!selectedInsurance) return;
    setAmount((prev) => ({
      ...prev,
      value: selectedInsurance.monthlyPremium || 50000,
    }));
  }, [selectedInsurance]);

  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  if (!isLoggedIn) {
    return <div>로그인 정보가 없습니다.</div>;
  }
  if (!user) {
    return <div>로그인 정보를 가져오는 중...</div>;
  }
  if (loading) {
    return <div>상품 상세정보 불러오는 중...</div>;
  }
  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  const handlePaymentClick = async () => {
    try {
      const randomId = btoa(`${Date.now()}-${Math.random()}`);

      await widgets.requestPayment({
        orderId: randomId,
        orderName: selectedInsurance
          ? `${selectedInsurance.productName}`
          : `상품ID: ${productId || "없음"}`,
        successUrl: window.location.origin + "/successPage",
        failUrl: window.location.origin + "/failPage",
        customerEmail: user?.loginEmail || "",
        customerName: user?.name || "",
        customerMobilePhone: "01012345678",
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <S.Wrapper>
      <S.BoxSection>
        <div id="agreement" />
        <div id="payment-method" />
      </S.BoxSection>

      <BillingAuth />

      <S.PaymentButton disabled={!ready} onClick={handlePaymentClick}>
        결제하기
      </S.PaymentButton>
    </S.Wrapper>
  );
}

export default Payment;
