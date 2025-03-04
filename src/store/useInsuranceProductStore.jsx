import { create } from "zustand";
import API from ".";

/**
 * 보험 상품을 관리하는 Zustand Store
 */
const useInsuranceProductStore = create((set, get) => ({
  insuranceProducts: [],
  selectedCompanies: [],
  selectedCategories: [],
  loading: false,
  error: null,

  // (1) 회사 체크박스 선택/해제
  toggleCompany: (company) => {
    const { selectedCompanies } = get();
    const isSelected = selectedCompanies.includes(company);
    const updatedCompanies = isSelected
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];

    set({ selectedCompanies: updatedCompanies });
  },

  // (2) 카테고리 체크박스 선택/해제
  toggleCategory: (category) => {
    const { selectedCategories } = get();
    const isSelected = selectedCategories.includes(category);
    const updatedCategories = isSelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    set({ selectedCategories: updatedCategories });
  },

  // (3) 보험상품 목록(전체) 호출: 페이지=1, size=10
  fetchInsuranceProducts: async () => {
    try {
      set({ loading: true, error: null });
      const response = await API.get("/insurance-products/search", {
        params: {
          page: 1,
          size: 10,
        },
      });

      console.log("백엔드 전체상품 응답:", response.data);

      // "result" 안의 "content"가 상품 배열
      const products = response.data.result?.content ?? [];

      set({
        insuranceProducts: products,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // (4) 체크박스(회사/카테고리) 필터 적용하여 검색
  searchInsuranceProducts: async () => {
    try {
      set({ loading: true, error: null });
      const { selectedCompanies, selectedCategories } = get();

      // 백엔드에서 companyNames, categories(=Enum) 필터링
      const response = await API.get("insurance-products/search", {
        params: {
          page: 1,
          size: 30,
          companyNames: selectedCompanies, // 예) [ "삼성생명", "한화생명" ]
          categories: selectedCategories, // 예) [ "CANCER", "LIFE" ] 등 Enum
          // productName: "검색 키워드" (옵션)
        },
      });

      console.log("백엔드 필터검색 응답:", response.data);

      const products = response.data.result?.content ?? [];
      set({
        insuranceProducts: products,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useInsuranceProductStore;
