import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "tf5VUpqFDTAk-MVoQ9Ahj";

export function Payment() {
  // 여기서 { productId } 를 구조 분해
  const { productId } = useParams();
  const numericProductId = Number(productId); // 문자열 → 숫자 변환

  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);

  // 상품 정보를 로컬로 관리
  const [insurance, setInsurance] = useState(null);

  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 50000, // 기본값
  });

  // Store에서 fetch 함수 가져오기
  const { fetchInsuranceById, loading, error } = useInsuranceProductStore();

  // 사용자
  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

  /**
   * 1) 토스 위젯 초기화
   */
  useEffect(() => {
    console.log("[Payment] Initializing TossPayment widgets");
    (async () => {
      const tossPayments = await loadTossPayments(clientKey);
      const w = tossPayments.widgets({ customerKey });
      setWidgets(w);
    })();
  }, []);

  /**
   * 2) 위젯 렌더링
   */
  useEffect(() => {
    if (!widgets) return;

    console.log("[Payment] widgets ready. Setting amount:", amount);
    (async () => {
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
      console.log("[Payment] widgets rendered successfully");
    })();
  }, [widgets, amount]);

  /**
   * 3) 상품 단건 조회
   */
  useEffect(() => {
    // numericProductId가 0이거나 NaN이면 유효하지 않으므로
    if (!numericProductId) {
      console.warn("[Payment] No valid productId found in URL params");
      return;
    }

    console.log("[Payment] Starting product fetch. productId:", numericProductId);

    (async () => {
      try {
        const fetchedProduct = await fetchInsuranceById(numericProductId);
        console.log("[Payment] fetchInsuranceById result:", fetchedProduct);

        if (!fetchedProduct) {
          console.warn("[Payment] fetchedProduct is null/undefined");
        } else {
          // 콘솔에 백엔드가 준 productId도 찍어볼 수 있음
          console.log(
            "[Payment] Fetched productId from server:",
            fetchedProduct.productId
          );

          // 로컬 state에 저장
          setInsurance(fetchedProduct);

          // 결제금액도 상품 데이터로 설정
          setAmount((prev) => ({
            ...prev,
            value: fetchedProduct.monthlyPremium || 50000,
          }));
        }
      } catch (err) {
        console.error("[Payment] Error fetching product:", err);
      }
    })();
  }, [numericProductId, fetchInsuranceById]);

  /**
   * 4) 사용자 정보 로딩
   */
  useEffect(() => {
    if (isLoggedIn && !user) {
      console.log("[Payment] Logged in but user info not loaded. Fetching user info...");
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  /**
   * (로딩/에러/로그인) 체크
   */
  if (!isLoggedIn) {
    console.warn("[Payment] User is not logged in");
    return <div>로그인 정보가 없습니다.</div>;
  }
  if (!user) {
    return <div>로그인 정보를 가져오는 중...</div>;
  }
  if (loading) {
    return <div>상품 정보를 불러오는 중...</div>;
  }
  if (error) {
    console.error("[Payment] Error from store:", error);
    return <div>오류 발생: {error}</div>;
  }

  /**
   * 5) 결제 버튼
   */
  const handlePaymentClick = async () => {
    console.log("[handlePaymentClick] Called. insurance=", insurance);

    // insurance가 null이면 “상품 정보를 찾을 수 없습니다” 표시
    if (!insurance) {
      console.warn("[handlePaymentClick] insurance is null/undefined. productId=", numericProductId);
      return;
    }

    if (!widgets) {
      console.warn("[handlePaymentClick] widgets is not ready!");
      return;
    }

    try {
      const randomId = btoa(`${Date.now()}-${Math.random()}`);
  
      await widgets.requestPayment({
        orderId: randomId,
        orderName: insurance.productName || `상품ID: ${numericProductId}`,
        successUrl:
          window.location.origin +
          "/successPage" +
          `?productId=${numericProductId}&amount=${insurance.monthlyPremium ?? 0}&orderId=${randomId}`,
        failUrl: window.location.origin + "/failPage",
        customerEmail: user?.loginEmail || "",
        customerName: user?.name || "",
        customerMobilePhone: "01012345678",
      });
    } catch (err) {
      console.error("[handlePaymentClick] Payment failed:", err);
      alert(err);
    }
  };

  // insurance가 null이면 “상품 정보를 찾을 수 없습니다.” UI
  if (!insurance) {
    console.warn("[Payment] insurance is null. Returning fallback UI...");
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }

  /**
   * 정상 렌더링
   */
  return (
    <S.Wrapper>
      {/* 상단 상품 정보 */}
      <S.Header>
        <S.CompanyName>{insurance.companyName}</S.CompanyName>
        <S.ProductName>{insurance.productName}</S.ProductName>
        <S.CategoryTag>{insurance.productCategory || "카테고리"}</S.CategoryTag>
      </S.Header>


      <S.Content>
        <div style={{ marginBottom: "1rem" }}>
          <strong>월 보험료: </strong>
          {insurance.monthlyPremium?.toLocaleString()}원
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong>보장 내용: </strong>
          {insurance.coverageDetails}
        </div>

        {/* 토스 위젯 영역 */}
        <div id="agreement" />
        <div id="payment-method" />
      </S.Content>

      

      <button disabled={!ready} onClick={handlePaymentClick}>
        결제하기
      </button>
    </S.Wrapper>
  );
}

export default Payment;
