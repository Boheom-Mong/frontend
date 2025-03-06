// Home.jsx
import { useEffect } from "react";
import * as S from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";
import useInsuranceProductStore from "../../store/useInsuranceProductStore";

const insuranceCategories = [
  { value: "CANCER", label: "암보험" },
  { value: "SURGERY", label: "수술/입원" },
  { value: "LIFE", label: "종신보험" },
  { value: "DRIVER", label: "운전자/상해" },
  { value: "FIRE", label: "주택화재" },
  { value: "DENTAL", label: "치아" },
  { value: "DEMENTIA", label: "치매" },
  { value: "NEWBORN", label: "신생아" },
  { value: "HEALTHCARE", label: "실손의료" },
  { value: "CHILD", label: "어린이보험" },
  { value: "PET", label: "반려동물보험" },
  { value: "NURSING", label: "간병보험" },
  { value: "TRAVEL", label: "여행자보험" },
  { value: "ETC", label: "기타보험" },
];

const insuranceCompanies = [
  "삼성화재",
  "KB손해보험",
  "현대해상",
  "롯데손해보험",
  "DB손해보험",
  "메리츠화재",
  "한화손해보험",
  "흥국화재",
];

const Home = () => {
  const {
    insuranceProducts,
    selectedCompanies,
    selectedCategories,
    toggleCompany,
    toggleCategory,
    searchInsuranceProducts,   // 필터 검색
    fetchInsuranceProducts,    // 전체목록
    loading,
    error,
    currentPage,
    totalPages,
  } = useInsuranceProductStore();

  // 초기 페이지 로드 시 전체 상품 1페이지
  useEffect(() => {
    fetchInsuranceProducts(1);
  }, [fetchInsuranceProducts]);

  // 체크박스: 회사 변경 → 즉시 필터 검색
  const handleCompanyChange = (company) => {
    toggleCompany(company);
    // 즉시 1페이지부터 검색
    searchInsuranceProducts(1);
  };

  // 체크박스: 카테고리 변경 → 즉시 필터 검색
  const handleCategoryChange = (category) => {
    toggleCategory(category);
    searchInsuranceProducts(1);
  };

  // 페이지 이동 (이전/다음/번호 클릭 시)
  // 필터가 하나라도 선택되어 있으면 search, 아니면 fetch
  const handlePageChange = (newPage) => {
    // 범위 체크
    if (newPage < 1 || newPage > totalPages) return;

    if (selectedCompanies.length > 0 || selectedCategories.length > 0) {
      searchInsuranceProducts(newPage);
    } else {
      fetchInsuranceProducts(newPage);
    }
  };

  // 블록 계산 (1~10, 11~20 등)
  const blockIndex = Math.floor((currentPage - 1) / 10);
  const startPage = blockIndex * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <div className="header-content">
          <h1>간단 입력만으로 나에게 맞는 보험을 시뮬레이션!</h1>
          <h2>BOHUEM MONG</h2>
          <p>
            보험 가입, 어렵게 느껴지시나요? 🤔 <br />
            복잡한 절차 없이 쉽고 빠르게 보험 가입을 체험하고, 
            나에게 맞는 보험을 비교해보세요!
            <br />
            🚀 지금 바로 보험몽에서 보험 가입을 미리 경험하고, 합리적인 선택을
            해보세요.
          </p>
        </div>
        <img src="/img/sesac.png" alt="세싹 캐릭터" className="header-image" />
      </S.Header>

      <S.FilterSection>
        <S.FilterContainer>
          {/* 보험사 */}
          <S.FilterGroup>
            <h3>보험사</h3>
            <S.CheckboxGroup>
              {insuranceCompanies.map((company) => (
                <S.CheckboxLabel
                  key={company}
                  isChecked={selectedCompanies.includes(company)}
                >
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => handleCompanyChange(company)}
                  />
                  <span>{company}</span>
                </S.CheckboxLabel>
              ))}
            </S.CheckboxGroup>
          </S.FilterGroup>

          {/* 보험 카테고리 */}
          <S.FilterGroup>
            <h3>보험 카테고리</h3>
            <S.CheckboxGroup>
              {insuranceCategories.map(({ value, label }) => (
                <S.CheckboxLabel
                  key={value}
                  isChecked={selectedCategories.includes(value)}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(value)}
                    onChange={() => handleCategoryChange(value)}
                  />
                  <span>{label}</span>
                </S.CheckboxLabel>
              ))}
            </S.CheckboxGroup>
          </S.FilterGroup>
        </S.FilterContainer>

        {/* 검색 버튼 제거 → 즉시 필터 방식이므로 버튼 불필요
        <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
        */}
      </S.FilterSection>

      {loading && <div>불러오는 중...</div>}
      {error && <div>에러 발생: {error}</div>}

      <S.InsuranceList>
        {insuranceProducts.map((insurance) => (
          <ProductCard key={insurance.productId} insurance={insurance} />
        ))}
      </S.InsuranceList>

      {/* 페이지네이션 영역 */}
      <S.PaginationContainer>
        <S.PageButton
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </S.PageButton>

        {pageNumbers.map((pageNum) => (
          <S.PageButton
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            isActive={currentPage === pageNum}
          >
            {pageNum}
          </S.PageButton>
        ))}

        <S.PageButton
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </S.PageButton>
      </S.PaginationContainer>
    </S.Wrapper>
  );
};

export default Home;