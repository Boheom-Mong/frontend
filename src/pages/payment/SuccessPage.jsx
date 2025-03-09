// SuccessPage.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./style";
import useUserProductStore from "../../store/useUserProductStore";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // (1) purchaseProduct 함수를 스토어에서 가져온다
  const { purchaseProduct } = useUserProductStore();

  useEffect(() => {
    // URL 파라미터에서 productId, amount 가져온다고 가정
    const productId = searchParams.get("productId");
    const amountStr = searchParams.get("amount");
    const paidAmount = amountStr ? parseInt(amountStr, 10) : 0;

    // 페이지에 들어오면 곧바로 POST
    async function postPurchase() {
      try {
        if (!productId) {
          console.warn("[SuccessPage] productId가 없습니다.");
          return;
        }

        // purchaseProduct -> 서버로 POST (UserProduct 테이블에 저장)
        await purchaseProduct(productId, paidAmount);

        console.log("결제 성공 & UserProduct에 productId 저장 완료!");
      } catch (err) {
        console.error("구매 이력 저장 실패:", err);
        // 필요한 경우 실패 시 처리
        // navigate("/fail");
      }
    }

    postPurchase();
  }, [searchParams, purchaseProduct, navigate]);

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
        <p>{`결제 금액: ${Number(searchParams.get("amount") || 0).toLocaleString()}원`}</p>
      </S.SuccessBox>
    </S.SuccessWrapper>
  );
}

export default SuccessPage;
