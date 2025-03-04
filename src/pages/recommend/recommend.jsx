import { useState, useEffect } from "react";
import * as S from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAuthStore } from "../../store/useAuthStore";

const Recommend = () => {
  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

  useEffect(() => {
    console.log("user정보", user);
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  const dummyInsurances = [
    {
      id: 1,
      company: "삼성생명",
      name: "스마트보장스페셜종신보험",
      category: "종신보험",
      description:
        "든든한 보장과 함께 스마트한 혜택을 제공하는 종신보험입니다.",
      monthlyFee: "89,000원",
      coverage: "사망보험금 1억원, 재해사망보험금 2억원",
    },
    {
      id: 2,
      company: "한화생명",
      name: "건강백세종신보험",
      category: "종신보험",
      description: "평생 든든한 보장으로 건강한 삶을 지켜드립니다.",
      monthlyFee: "76,000원",
      coverage: "사망보험금 1억원, 암진단금 3천만원",
    },
    {
      id: 3,
      company: "교보생명",
      name: "화재안심플러스보험",
      category: "화재보험",
      description: "주택 화재 및 재산 손실에 대한 종합적인 보장을 제공합니다.",
      monthlyFee: "35,000원",
      coverage: "화재손해 5억원, 도난손해 3천만원",
    },
    {
      id: 4,
      company: "메리츠화재",
      name: "안전운전파트너보험",
      category: "운전자보험",
      description:
        "교통사고 및 운전 중 발생할 수 있는 위험에 대비하는 보험입니다.",
      monthlyFee: "28,000원",
      coverage: "교통사고처리지원금 3천만원, 벌금 2천만원",
    },
    {
      id: 5,
      company: "DB손해보험",
      name: "건강플러스종합보험",
      category: "건강보험",
      description: "다양한 질병과 상해에 대한 종합적인 보장을 제공합니다.",
      monthlyFee: "52,000원",
      coverage: "질병입원비 일당 5만원, 수술비 300만원",
    },
    {
      id: 6,
      company: "삼성화재",
      name: "스마트홈화재보험",
      category: "화재보험",
      description:
        "스마트홈 시스템과 연계된 화재 감지 및 보상 서비스를 제공합니다.",
      monthlyFee: "42,000원",
      coverage: "화재손해 7억원, 전기손해 1천만원",
    },
    {
      id: 7,
      company: "현대해상",
      name: "프리미엄운전자보험",
      category: "운전자보험",
      description:
        "운전 중 발생할 수 있는 다양한 위험에 대한 프리미엄 보장을 제공합니다.",
      monthlyFee: "35,000원",
      coverage: "교통사고처리지원금 5천만원, 변호사선임비용 3천만원",
    },
    {
      id: 8,
      company: "KB손해보험",
      name: "헬스케어건강보험",
      category: "건강보험",
      description: "건강검진 및 예방 서비스를 포함한 종합 건강보험입니다.",
      monthlyFee: "48,000원",
      coverage: "질병입원비 일당 7만원, 암진단비 5천만원",
    },
  ];

  // (로컬 상태) 위험 요소
  const [userRiskFactors] = useState([
    "자가주택 보유",
    "음주습관",
    "고혈압",
    "사무직",
  ]);

  // (로컬 상태) 추천받은 카테고리
  const [recommendedCategories] = useState([
    "화재보험",
    "운전자보험",
    "건강보험",
  ]);

  // 카테고리별 추천 상품 목록
  const [recommendedProducts, setRecommendedProducts] = useState({});

  // 로그인 시도 (더미)
  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  // 추천 상품 필터링 로직 (더미)
  useEffect(() => {
    const recommendations = {};

    recommendedCategories.forEach((category) => {
      // 여기서는 카테고리가 맞거나, 30% 정도 임의로 추가되게 함
      const filtered = dummyInsurances
        .filter((insurance) => {
          // 실제 로직은 서버나 로컬에서 복잡한 계산이 가능
          return insurance.category === category || Math.random() > 0.7;
        })
        .slice(0, 3); // 최대 3개만 선택

      recommendations[category] = filtered;
    });

    setRecommendedProducts(recommendations);
  }, [recommendedCategories]);

  // 로그인 안 되어있으면 “로그인하세요” 메시지
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

  // 사용자 정보가 아직 없으면 로딩
  if (isLoggedIn && !user) {
    return (
      <S.Wrapper>
        <S.Header>
          <S.Title>맞춤형 보험 추천</S.Title>
          <S.Subtitle>사용자 정보를 불러오는 중입니다...</S.Subtitle>
        </S.Header>
        <S.LoadingMessage>
          <p>잠시만 기다려주세요...</p>
        </S.LoadingMessage>
      </S.Wrapper>
    );
  }

  // 실제 UI
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>맞춤형 보험 추천</S.Title>
        <S.Subtitle>
          고객님의 상황에 맞는 최적의 보험을 추천해드립니다.
        </S.Subtitle>
      </S.Header>

      <S.AnalysisSection>
        <S.AnalysisContent>
          {/* user.name이 있다고 가정 */}
          <S.UserName>{user.name}님,</S.UserName>
          <S.AnalysisText>
            고객님의 현재 상황을 종합적으로 검토한 결과,
            <br />
            아래와 같은 주요 위험 요소가 확인되었습니다:
          </S.AnalysisText>

          <S.RiskFactorTags>
            {userRiskFactors.map((factor, index) => (
              <S.RiskFactorTag key={index}>{factor}</S.RiskFactorTag>
            ))}
          </S.RiskFactorTags>

          <S.AnalysisText>
            위 요인들로 인해 향후 예기치 못한 부담이 발생할 수 있으므로,
            <br />
            보험 가입을 통해 대비하시는 것을 권장드립니다.
          </S.AnalysisText>
        </S.AnalysisContent>
      </S.AnalysisSection>

      {Object.keys(recommendedProducts).map((category, idx) => (
        <S.RecommendationSection key={idx}>
          <S.RecommendationHeader>
            <S.CategoryTitle>{category} 가입을 권장드립니다.</S.CategoryTitle>
          </S.RecommendationHeader>
          <S.ProductList>
            {recommendedProducts[category].map((insurance) => (
              <ProductCard key={insurance.id} insurance={insurance} />
            ))}
          </S.ProductList>
        </S.RecommendationSection>
      ))}
    </S.Wrapper>
  );
};

export default Recommend;
