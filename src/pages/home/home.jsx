import { useEffect } from "react";
import * as S from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";

// zustand store 불러오기

// 기존에 작성된 상수 목록 (회사, 카테고리)
const insuranceCategories = [
  "실손의료보험",
  "암보험",
  "치아보험",
  "운전자보험",
  "종신보험",
  "연금보험",
  "저축보험",
  "화재보험",
  "여행자보험",
  "펫보험",
  "어린이보험",
  "실버보험",
  "단체보험",
  "건강보험",
];
const insuranceCompanies = [
  "삼성생명",
  "한화생명",
  "교보생명",
  "메리츠화재",
  "DB손해보험",
];

const Home = () => {
  // zustand에서 상태와 함수를 가져옵니다.
  const {
    insuranceProducts,
    selectedCompanies,
    selectedCategories,
    toggleCompany,
    toggleCategory,
    fetchInsuranceProducts,
    searchInsuranceProducts,
    loading,
    error,
  } = useInsuranceProductStore();

  // 컴포넌트가 처음 렌더링될 때 전체 보험상품 불러오기 (원하는 시점에 호출)
  useEffect(() => {
    fetchInsuranceProducts();
  }, [fetchInsuranceProducts]);

  // '검색' 버튼 클릭 -> store의 searchInsuranceProducts 호출
  const handleSearch = () => {
    searchInsuranceProducts();
  };

  const handleCompanyChange = (company) => {
    toggleCompany(company);
  };

  const handleCategoryChange = (category) => {
    toggleCategory(category);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <h1>간단 입력만으로 나에게 맞는 보험을 시뮬레이션!</h1>
        <h2>BOHUEM MONG</h2>
      </S.Header>

      <S.FilterSection>
        <S.FilterContainer>
          <S.FilterGroup>
            <h3>보험사</h3>
            <S.CheckboxGroup>
              {insuranceCompanies.map((company) => (
                <label key={company}>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => handleCompanyChange(company)}
                  />
                  {company}
                </label>
              ))}
            </S.CheckboxGroup>
          </S.FilterGroup>

          <S.FilterGroup>
            <h3>보험 카테고리</h3>
            <S.CheckboxGroup>
              {insuranceCategories.map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </S.CheckboxGroup>
          </S.FilterGroup>
        </S.FilterContainer>
        <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
      </S.FilterSection>

      {/* 로딩/에러 상태 표시 */}
      {loading && <div>불러오는 중...</div>}
      {error && <div>에러 발생: {error}</div>}

      <S.InsuranceList>
        {insuranceProducts.map((insurance) => (
          <ProductCard key={insurance.productId} insurance={insurance} />
        ))}
      </S.InsuranceList>
    </S.Wrapper>
  );
};

export default Home;
