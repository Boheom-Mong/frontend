// store/useUserProductStore.jsx
import { create } from "zustand";
import API from "."; // axios 인스턴스(또는 fetch 대체)

const useUserProductStore = create((set) => ({
  userProducts: [],
  loading: false,
  error: null,

  // (1) 사용자 구매 상품 목록 가져오기
  fetchUserProducts: async () => {
    try {
      set({ loading: true, error: null });

      // 백엔드: GET /api/users/products
      const response = await API.get("/users/products");
      const result = response.data.result || [];

      set({ userProducts: result, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // (2) 사용자 상품 구매 등록(POST)
  purchaseProduct: async (productId, paidAmount) => {
    try {
      set({ loading: true, error: null });

      // 백엔드: POST /api/users/products/purchase
      // 파라미터(productId, paidAmount)는 예시에 따라 쿼리스트링/ReqParam 사용
      // ex) POST /api/users/products/purchase?productId=xxx&paidAmount=yyy
      // 혹은 RequestBody로 할 수도 있음(백엔드 구현에 맞춰 조정)
      const response = await API.post("/users/products/purchase", null, {
        params: { productId, paidAmount },
      });

      // response.data.result: 새로 생성된 UserProduct
      const newUserProduct = response.data.result;
      // 기존 userProducts 상태에 추가
      set((state) => ({
        userProducts: [...state.userProducts, newUserProduct],
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useUserProductStore;
