// store/useInsuranceProductStore.js (또는 .jsx)
import { create } from "zustand";
import qs from "qs";
import API from ".";

const useInsuranceProductStore = create((set, get) => ({
  // =====================
  // 상태 정의
  // =====================
  insuranceProducts: [],
  selectedInsurance: null,      // (추가) 상세조회 결과를 담을 상태
  selectedCompanies: [],
  selectedCategories: [],
  loading: false,
  error: null,

  // 현재 페이지, 전체 페이지 정보 추가
  currentPage: 1,
  totalPages: 1,

  // (1) 회사 체크박스 선택/해제
  // =====================
  toggleCompany: (company) => {
    const { selectedCompanies } = get();
    const isSelected = selectedCompanies.includes(company);
    const updatedCompanies = isSelected
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];

    set({ selectedCompanies: updatedCompanies });
  },

  // =====================
  // (2) 카테고리 체크박스 선택/해제
  // =====================
  toggleCategory: (category) => {
    const { selectedCategories } = get();
    const isSelected = selectedCategories.includes(category);
    const updatedCategories = isSelected
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    set({ selectedCategories: updatedCategories });
  },

  // =====================
  // (3) 보험상품 목록(전체) 호출: page=1, size=10
  // =====================
  fetchInsuranceProducts: async () => {
  // (3) 보험상품 목록(전체) 호출
  // 페이지 파라미터를 인자로 받는다 (기본값 1)
  fetchInsuranceProducts: async (page = 1) => {
    try {
      set({ loading: true, error: null });

      const response = await API.get("/insurance-products/search", {
        params: {
          page, // 1-based 페이지
          size: 9,
        },
        paramsSerializer: {
          serialize: (params) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
        },
      });

      console.log("백엔드 전체상품 응답:", response.data);
      const products = response.data.result?.content ?? [];
      const result = response.data.result; // Page<InsuranceProductResponseDto>
      const products = result?.content ?? [];

      // totalPages, number 등도 있음
      set({
        insuranceProducts: products,
        loading: false,
        currentPage: page,
        totalPages: result?.totalPages ?? 1,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // =====================
  // (4) 체크박스(회사/카테고리) 필터로 검색
  // =====================
  searchInsuranceProducts: async () => {
  // (4) 체크박스(회사/카테고리) 필터 적용 검색
  // 마찬가지로 page를 인자로 받아서 페이징 가능
  searchInsuranceProducts: async (page = 1) => {
    try {
      set({ loading: true, error: null });
      const { selectedCompanies, selectedCategories } = get();

      const response = await API.get("/insurance-products/search", {
        params: {
          page: 1,
          size: 30,
          companyNames: selectedCompanies, // 예: ["삼성화재", "DB손해보험"]
          categories: selectedCategories,  // 예: ["CANCER", "LIFE"] 등 Enum
          // productName: "검색 키워드" (옵션)
        },
      });

      console.log("백엔드 필터검색 응답:", response.data);
      const products = response.data.result?.content ?? [];

          page,
          size: 9,
          companyNames: selectedCompanies,
          categories: selectedCategories,
        },
        paramsSerializer: {
          serialize: (params) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
        },
      });

      const result = response.data.result;
      const products = result?.content ?? [];

      set({
        insuranceProducts: products,
        loading: false,
        currentPage: page,
        totalPages: result?.totalPages ?? 1,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // =====================
  // (5) 보험상품 상세조회 (/insurance-products/{productId})
  // =====================
  getInsuranceProductDetail: async (productId) => {
    try {
      set({ loading: true, error: null });
      const response = await API.get(`/insurance-products/${productId}`);

      console.log("백엔드 상세조회 응답:", response.data);
      // 상세정보를 selectedInsurance에 저장
      const productDetail = response.data.result;

      set({
        selectedInsurance: productDetail,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
  // (5) ★ 추가: ID로 상품 찾기
  findInsuranceById: (productId) => {
    const { insuranceProducts } = get();
    // 로컬에 저장된 상품 배열(insuranceProducts)에서 해당 productId를 찾아 반환
    return insuranceProducts.find((item) => item.productId === productId);
  },

  // 서버에서 특정 상품을 가져와 스토어에 저장하는 함수
  fetchInsuranceById: async (id) => {
    try {
      const response = await API.get(`/insurance-products/${id}`);
      const fetchedProduct = response.data.result;

      set((state) => ({
        insurances: [...state.insuranceProducts, fetchedProduct],
      }));

      return fetchedProduct;
    } catch (error) {
      console.error("fetchInsuranceById error:", error);
      throw error;
    }
  },
}));

export default useInsuranceProductStore;
