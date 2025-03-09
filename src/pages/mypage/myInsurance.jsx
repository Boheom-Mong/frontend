"use client";

import { useEffect, useState } from "react";
import useUserProductStore from "../../store/useUserProductStore";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";
import { BillingAuth } from "../payment/BillingAuth";
import * as S from "./InsuranceStyle";

import {
  Shield,
  Calendar,
  DollarSign,
  AlertCircle,
  Loader,
} from "lucide-react";

const baseUrl = import.meta.env.VITE_APP_S3_URL;

const companyLogos = {
  DB손해보험: `${baseUrl}/db.png`,
  한화손해보험: `${baseUrl}/hanwha.png`,
  흥국화재: `${baseUrl}/heongkuk.png`,
  현대해상: `${baseUrl}/hyundai.jpeg`,
  KB손해보험: `${baseUrl}/kb.png`,
  롯데손해보험: `${baseUrl}/lotte.png`,
  메리츠화재: `${baseUrl}/merits.png`,
  삼성화재: `${baseUrl}/samsung.png`,
};

const MyInsurance = () => {
  const {
    userProducts,
    fetchUserProducts,
    loading: userProdLoading,
    error: userProdError,
  } = useUserProductStore();

  const { fetchInsuranceById } = useInsuranceProductStore();

  const [myInsurances, setMyInsurances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // (A) 구매한 보험 목록 불러오기
  useEffect(() => {
    fetchUserProducts();
  }, [fetchUserProducts]);

  // (B) userProducts => 상세정보(fetchInsuranceById)
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
            purchaseDate: new Date().toLocaleDateString(), // 예시 데이터
            status: Math.random() > 0.3 ? "active" : "pending", // 예시 데이터
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

  // 카테고리별 색상 매핑
  const getCategoryColor = (category) => {
    const colorMap = {
      암보험: "#FF6B6B",
      실손의료보험: "#4D96FF",
      종신보험: "#6BCB77",
      운전자보험: "#FFD93D",
      치아보험: "#4CACBC",
      화재보험: "#FF9F45",
      연금보험: "#9C6644",
      여행자보험: "#C689C6",
      건강보험: "#71DFE7",
    };
    return colorMap[category] || "#4169e1";
  };

  if (userProdLoading || loading) {
    return (
      <S.LoadingContainer>
        <S.LoadingSpinner>
          <Loader size={30} color="#4169e1" />
        </S.LoadingSpinner>
        <S.LoadingText>보험 정보를 불러오는 중입니다...</S.LoadingText>
      </S.LoadingContainer>
    );
  }

  if (userProdError || error) {
    return (
      <S.ErrorContainer>
        <AlertCircle size={40} color="#FF6B6B" />
        <S.ErrorTitle>데이터를 불러올 수 없습니다</S.ErrorTitle>
        <S.ErrorMessage>에러 발생: {userProdError || error}</S.ErrorMessage>
      </S.ErrorContainer>
    );
  }

  return (
    <S.InsuranceContainer>
      <S.InsuranceHeader>
        <S.InsuranceTitle>
          <Shield size={24} />
          나의 보험
        </S.InsuranceTitle>
        <S.InsuranceSubtitle>
          가입한 보험 상품 정보를 확인하고 관리하세요
        </S.InsuranceSubtitle>
      </S.InsuranceHeader>

      {myInsurances.length === 0 ? (
        <S.EmptyStateContainer>
          <S.EmptyStateIcon>
            <Shield size={60} color="#e0e0e0" />
          </S.EmptyStateIcon>
          <S.EmptyStateTitle>아직 가입한 보험이 없습니다</S.EmptyStateTitle>
          <S.EmptyStateDescription>
            보험 상품을 둘러보고 나에게 맞는 보험에 가입해보세요.
          </S.EmptyStateDescription>
          <S.BrowseButton onClick={() => (window.location.href = "/")}>
            보험 상품 둘러보기
          </S.BrowseButton>
        </S.EmptyStateContainer>
      ) : (
        <S.InsuranceGrid>
          {myInsurances.map((insurance) => (
            <S.InsuranceCard key={insurance.productId}>
              <S.CardHeader>
                <S.CardHeaderContent>
                  {companyLogos[insurance.companyName] && (
                    <S.CompanyLogo
                      src={companyLogos[insurance.companyName]}
                      alt={insurance.companyName}
                    />
                  )}
                  <div>
                    <S.CompanyName>{insurance.companyName}</S.CompanyName>
                    <S.ProductCategory
                      color={getCategoryColor(insurance.productCategory)}
                    >
                      {insurance.productCategory}
                    </S.ProductCategory>
                  </div>
                </S.CardHeaderContent>
              </S.CardHeader>

              <S.CardBody>
                <S.ProductName>{insurance.productName}</S.ProductName>

                <S.ProductInfoList>
                  <S.ProductInfoItem>
                    <Calendar size={16} />
                    <span>가입일: {insurance.purchaseDate}</span>
                  </S.ProductInfoItem>

                  <S.ProductInfoItem>
                    <DollarSign size={16} />
                    <span>
                      월 보험료: {insurance.monthlyPremium?.toLocaleString()}원
                    </span>
                  </S.ProductInfoItem>

                  {/* 
                    === 결제 금액 + 카드 등록하기 버튼을 한 줄에 배치 ===
                  */}
                  <S.ProductInfoItem
                    style={{ justifyContent: "space-between" }}
                  >
                    {/* 왼쪽: 결제 금액 */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Shield size={16} />
                      <span>
                        결제 금액: {insurance.paidAmount?.toLocaleString()}원
                      </span>
                    </div>

                    {/* 오른쪽: 카드등록하기 버튼 (BillingAuth) */}
                    <BillingAuth productId={insurance.productId} />
                  </S.ProductInfoItem>
                </S.ProductInfoList>
              </S.CardBody>

              {/* 
                CardFooter 제거 (안 쓰면 삭제 가능)
                <S.CardFooter>
                  <BillingAuth productId={insurance.productId} />
                </S.CardFooter>
              */}
            </S.InsuranceCard>
          ))}
        </S.InsuranceGrid>
      )}
    </S.InsuranceContainer>
  );
};

export default MyInsurance;
