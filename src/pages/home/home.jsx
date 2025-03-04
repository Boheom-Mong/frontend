import { useState } from "react";
import * as S from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";

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

const dummyInsurances = [
  {
    id: 1,
    company: "삼성생명",
    name: "스마트보장스페셜종신보험",
    category: "종신보험",
    description: "든든한 보장과 함께 스마트한 혜택을 제공하는 종신보험입니다.",
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
    company: "한화생명",
    name: "건강백세종신보험",
    category: "종신보험",
    description: "평생 든든한 보장으로 건강한 삶을 지켜드립니다.",
    monthlyFee: "76,000원",
    coverage: "사망보험금 1억원, 암진단금 3천만원",
  },
  {
    id: 4,
    company: "한화생명",
    name: "건강백세종신보험",
    category: "종신보험",
    description: "평생 든든한 보장으로 건강한 삶을 지켜드립니다.",
    monthlyFee: "76,000원",
    coverage: "사망보험금 1억원, 암진단금 3천만원",
  },
  // ... (추가 데이터)
];

const Home = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredInsurances, setFilteredInsurances] = useState(dummyInsurances);

  const handleCompanyChange = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSearch = () => {
    const filtered = dummyInsurances.filter((insurance) => {
      const companyMatch =
        selectedCompanies.length === 0 ||
        selectedCompanies.includes(insurance.company);
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(insurance.category);
      return companyMatch && categoryMatch;
    });
    setFilteredInsurances(filtered);
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

      <S.InsuranceList>
        {filteredInsurances.map((insurance) => (
          <ProductCard key={insurance.id} insurance={insurance} />
        ))}
      </S.InsuranceList>
    </S.Wrapper>
  );
};

export default Home;