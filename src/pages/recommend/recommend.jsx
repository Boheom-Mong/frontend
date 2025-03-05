// pages/Recommend/Recommend.jsx
import { useEffect } from "react";
import * as S from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAuthStore } from "../../store/useAuthStore";
import useRecommendStore from "../../store/useRecommedStore";

const Recommend = () => {
  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();
  const { recommendedData, loading, error, fetchRecommendations } = useRecommendStore();

  // 1) 유저 정보 없으면 가져오기
  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  // 2) 추천 API 불러오기
  useEffect(() => {
    if (isLoggedIn) {
      fetchRecommendations();
    }
  }, [isLoggedIn, fetchRecommendations]);

  // (조건부 렌더링 - 로그인, 로딩, 에러, etc)
  if (!isLoggedIn) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>로그인 후 이용 가능합니다.</S.Subtitle>
        </S.Header>
        <S.LoginMessage>
          <p>맞춤형 보험 추천을 받으시려면 로그인해주세요.</p>
        </S.LoginMessage>
      </S.Wrapper>
    );
  }

  if (!user) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>사용자 정보를 불러오는 중...</S.Subtitle>
        </S.Header>
        <S.LoadingMessage>
          <p>잠시만 기다려주세요...</p>
        </S.LoadingMessage>
      </S.Wrapper>
    );
  }

  if (loading) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>추천 정보를 불러오는 중...</S.Subtitle>
        </S.Header>
        <S.LoadingMessage>
          <p>잠시만 기다려주세요...</p>
        </S.LoadingMessage>
      </S.Wrapper>
    );
  }

  if (error) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>오류가 발생했습니다</S.Subtitle>
        </S.Header>
        <S.LoginMessage>
          <p>{error}</p>
        </S.LoginMessage>
      </S.Wrapper>
    );
  }

  if (!recommendedData) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>추천 결과가 없습니다.</S.Subtitle>
        </S.Header>
      </S.Wrapper>
    );
  }

  // ----- 최종 화면 (아까 스크린샷처럼) -----
  // 데이터: recommendedData.globalIntro, recommendedData.categories
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>맞춤형 보험 추천</S.Title>
        <S.Subtitle>고객님의 상황에 맞는 최적의 보험을 추천해드립니다.</S.Subtitle>
      </S.Header>

      {/* AnalysisSection = 둥근 흰색 박스, 그림자 등 */}
      <S.AnalysisSection>
        <S.AnalysisContent>
          <S.UserName>{user.name}님,</S.UserName>
          <S.AnalysisText>
            {/* 백엔드가 내려준 안내 문구 */}
            {recommendedData.globalIntro}
          </S.AnalysisText>

          {/* 위험 요소 태그들 (예: 음주습관, 자가주택 보유 등) */}
          <S.RiskFactorTags>
            {(recommendedData.riskFactors || []).map((factor) => (
              <S.RiskFactorTag key={factor}>{factor}</S.RiskFactorTag>
            ))}
          </S.RiskFactorTags>
        </S.AnalysisContent>
      </S.AnalysisSection>

      {/* 카테고리별 추천 */}
      {recommendedData.categories.map((cat, idx) => (
        <S.RecommendationSection key={idx}>
          <S.RecommendationHeader>
            <S.CategoryTitle>
              {/* 만약 'categoryName'이 없다면 'reason'만 써도 됨 */}
              {cat.reason} 
            </S.CategoryTitle>
          </S.RecommendationHeader>

          {/* 추천 상품 리스트 */}
          <S.ProductList>
            {cat.products.map((prod) => {
              const insuranceForCard = {
                productId: prod.productId,
                companyName: prod.companyName,    // 여기가 핵심 (prod.companyName)
                productName: prod.productName,
                productCategory: prod.productCategory, // (있다면)
                coverageDetails: prod.coverageDetails,
                monthlyPremium: prod.monthlyPremium,
              };
              return (
                <ProductCard
                  key={prod.productId}
                  insurance={insuranceForCard}
                />
              );
            })}
          </S.ProductList>
        </S.RecommendationSection>
      ))}
    </S.Wrapper>
  );
};

export default Recommend;
