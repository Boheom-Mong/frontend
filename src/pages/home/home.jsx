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
  { value: "HEALTHCARE", label: "실손의료비" },
  { value: "CHILD", label: "어린이보험" },
  { value: "PET", label: "반려동물보험" },
  { value: "NURSING", label: "간병보험" },
  { value: "TRAVEL", label: "여행자보험" },
  { value: "ETC", label: "기타보험" },
];

const insuranceCompanies = [
  "삼성화재",
  "한화생명",
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
    fetchInsuranceProducts,
    searchInsuranceProducts,
    loading,
    error,
    currentPage,
    totalPages,
  } = useInsuranceProductStore();

  useEffect(() => {
    fetchInsuranceProducts(1);
  }, [fetchInsuranceProducts]);

  const handleSearch = () => {
    searchInsuranceProducts(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // 범위 밖 체크

    // 필터가 하나라도 선택되어 있으면 필터검색, 없으면 전체목록
    if (selectedCompanies.length > 0 || selectedCategories.length > 0) {
      searchInsuranceProducts(newPage);
    } else {
      fetchInsuranceProducts(newPage);
    }
  };

  // --- 블록(그룹) 계산 ---
  // 예) currentPage=11이면 -> blockIndex=1 -> start=11, end=20 (단, totalPages=13 이면 end=13)
  const blockIndex = Math.floor((currentPage - 1) / 10); 
  const startPage = blockIndex * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  // [startPage..endPage] 배열 생성
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
            복잡한 절차 없이 쉽고 빠르게 보험 가입을 체험하고, 나에게 맞는
            보험을 비교해보세요!
            <br />
            🚀 지금 바로 보험몽에서 보험 가입을 미리 경험하고, 합리적인 선택을
            해보세요.
          </p>
        </div>

        {/* sesac.png 이미지를 우측에 배치 */}
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
                    onChange={() => toggleCompany(company)}
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
                    onChange={() => toggleCategory(value)}
                  />
                  <span>{label}</span>
                </S.CheckboxLabel>
              ))}
            </S.CheckboxGroup>
          </S.FilterGroup>
        </S.FilterContainer>

        <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
      </S.FilterSection>

      {loading && <div>불러오는 중...</div>}
      {error && <div>에러 발생: {error}</div>}

      <S.InsuranceList>
        {insuranceProducts.map((insurance) => (
          <ProductCard key={insurance.productId} insurance={insurance} />
        ))}
      </S.InsuranceList>
      {/* --------------------------
          페이지네이션 영역
      -------------------------- */}
      <S.PaginationContainer>
        {/* Prev 버튼 */}
        <S.PageButton
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </S.PageButton>

        {/* 페이지 번호들 (startPage..endPage) */}
        {pageNumbers.map((pageNum) => (
          <S.PageButton
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            isActive={currentPage === pageNum}
          >
            {pageNum}
          </S.PageButton>
        ))}

        {/* Next 버튼 */}
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
