// MyInsurance.jsx
import React, { useEffect, useState } from "react";
import useUserProductStore from "../../store/useUserProductStore";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";
import { BillingAuth } from "../payment/BillingAuth"; // BillingAuth 컴포넌트 import
import * as S from "./style";

const MyInsurance = () => {
  const { userProducts, fetchUserProducts, loading: userProdLoading, error: userProdError } =
    useUserProductStore();
  const { fetchInsuranceById } = useInsuranceProductStore();

  const [myInsurances, setMyInsurances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // (A) 마운트 시점: 구매 상품 불러오기
  useEffect(() => {
    fetchUserProducts();
  }, [fetchUserProducts]);

  // (B) userProducts -> 상품 상세
  useEffect(() => {
    if (userProducts.length === 0) return;

    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const promises = userProducts.map(async (item) => {
          const insuranceDetail = await fetchInsuranceById(item.productId);
          return {
            ...insuranceDetail,
            paidAmount: item.paidAmount,
          };
        });

        const results = await Promise.all(promises);
        setMyInsurances(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [userProducts, fetchInsuranceById]);

  if (userProdLoading || loading) return <div>로딩중...</div>;
  if (userProdError || error) return <div>에러 발생: {userProdError || error}</div>;

  return (
    <S.Section>
      <S.SectionTitle>나의 보험</S.SectionTitle>

      {myInsurances.length === 0 ? (
        <p>아직 구매한 보험이 없습니다.</p>
      ) : (
        myInsurances.map((insurance) => (
          <S.InsuranceCard key={insurance.productId}>
            <S.CardHeader>
              <S.CompanyName>{insurance.companyName}</S.CompanyName>
            </S.CardHeader>
            <S.CardBody>
              <h3>{insurance.productName}</h3>
              <p>월 보험료: {insurance.monthlyPremium}원</p>
              <p>결제 금액(예): {insurance.paidAmount}원</p>
            </S.CardBody>

            {/* 여기서 productId를 BillingAuth에 prop으로 넘긴다 */}
            <BillingAuth productId={insurance.productId} />
          </S.InsuranceCard>
        ))
      )}
    </S.Section>
  );
};

export default MyInsurance;
