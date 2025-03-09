import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";
import { FileText, DollarSign } from "lucide-react";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "tf5VUpqFDTAk-MVoQ9Ahj";

export function Payment() {
  // URL 파라미터로부터 productId를 받아 숫자로 변환
  const { productId } = useParams();
  const numericProductId = Number(productId);

  // 토스 결제 위젯
  const [widgets, setWidgets] = useState(null);

  // 상품 정보
  const [insurance, setInsurance] = useState(null);

  // 결제 금액(기본값 50,000원)
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 50000,
  });

  // 다른 Store에서 가져온 함수/상태
  const { fetchInsuranceById, loading, error } = useInsuranceProductStore();
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
      // 설정된 금액으로 위젯 초기화
      await widgets.setAmount(amount);

      // 결제수단 / 약관 동의 등 렌더링
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

      console.log("[Payment] widgets rendered successfully");
    })();
  }, [widgets, amount]);

  /**
   * 3) 상품 단건 조회
   */
  useEffect(() => {
    if (!numericProductId) {
      console.warn("[Payment] No valid productId found in URL params");
      return;
    }

    console.log(
      "[Payment] Starting product fetch. productId:",
      numericProductId
    );

    (async () => {
      try {
        const fetchedProduct = await fetchInsuranceById(numericProductId);
        console.log("[Payment] fetchInsuranceById result:", fetchedProduct);

        if (!fetchedProduct) {
          console.warn("[Payment] fetchedProduct is null/undefined");
        } else {
          console.log(
            "[Payment] Fetched productId from server:",
            fetchedProduct.productId
          );

          // 상품 정보를 상태에 저장
          setInsurance(fetchedProduct);

          // 상품의 월 보험료로 결제금액 업데이트
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
      console.log(
        "[Payment] Logged in but user info not loaded. Fetching user info..."
      );
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
   * 5) 결제 버튼 로직
   */
  const handlePaymentClick = async () => {
    console.log("[handlePaymentClick] Called. insurance=", insurance);

    // insurance가 비어 있으면 취소
    if (!insurance) {
      console.warn(
        "[handlePaymentClick] insurance is null/undefined. productId=",
        numericProductId
      );
      return;
    }

    if (!widgets) {
      console.warn("[handlePaymentClick] widgets is not ready!");
      return;
    }

    try {
      // 주문번호 (임시로 Base64 인코딩)
      const randomId = btoa(`${Date.now()}-${Math.random()}`);

      // 결제 요청
      await widgets.requestPayment({
        orderId: randomId,
        orderName: insurance.productName || `상품ID: ${numericProductId}`,
        successUrl:
          window.location.origin +
          "/successPage" +
          `?productId=${numericProductId}&amount=${
            insurance.monthlyPremium ?? 0
          }&orderId=${randomId}`,
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

  // insurance가 없으면 “상품 정보를 찾을 수 없습니다.” 메시지
  if (!insurance) {
    console.warn("[Payment] insurance is null. Returning fallback UI...");
    return <div>상품 정보를 찾을 수 없습니다.</div>;
  }

  /**
   * 정상 렌더링 (결제 UI 표시)
   */
  return (
    <S.Wrapper>
      {/* 상단 상품 정보 */}
      <S.Header>
        <S.CompanyName>{insurance.companyName}</S.CompanyName>
        <S.ProductName>{insurance.productName}</S.ProductName>
        <S.CategoryTag>{insurance.productCategory || "카테고리"}</S.CategoryTag>
      </S.Header>

      <S.ContentSection>
        <S.CoverageCard>
          <S.CoverageHeader>
            <DollarSign size={20} />
            <S.CoverageTitle>월 보험료</S.CoverageTitle>
          </S.CoverageHeader>
          <S.CoverageContent>
            {insurance.monthlyPremium?.toLocaleString()}원
          </S.CoverageContent>
        </S.CoverageCard>
        <S.CoverageCard>
          <S.CoverageHeader>
            <FileText size={20} />
            <S.CoverageTitle>보장 내용</S.CoverageTitle>
          </S.CoverageHeader>
          <S.CoverageContent>{insurance.coverageDetails}</S.CoverageContent>
        </S.CoverageCard>
      </S.ContentSection>

      <S.Content>
        {/* 토스 위젯 영역 */}
        <div id="agreement" />
        <div id="payment-method" />
      </S.Content>

      <S.ConfirmButton onClick={handlePaymentClick}>결제하기</S.ConfirmButton>
    </S.Wrapper>
  );
}

export default Payment;
