// store/useAutoPaymentStore.jsx
import { create } from "zustand";
import useInsuranceProductStore from "./useInsuranceProductStore";
import API from ".";

const useAutoPaymentStore = create((set, get) => ({
  autoPayments: [],

  // 자동결제 목록 가져오기 (productId → productName 병합)
  fetchAutoPayments: async () => {
    try {
      const res = await API.get("/autoPayments");
      const fetchedAutoPayments = res.data; // ex) [{ id, productId, ... }, ...]

      // 다른 store에 있는 fetchInsuranceById 함수
      const { fetchInsuranceById } = useInsuranceProductStore.getState();

      // productId로 상품명 조회 후 병합
      const updatedList = await Promise.all(
        fetchedAutoPayments.map(async (item) => {
          try {
            // 보험상품 단건 조회
            const productData = await fetchInsuranceById(item.productId);
            return {
              ...item,
              productName: productData?.productName || "이름 없음",
            };
          } catch (error) {
            console.error("상품 조회 실패:", error);
            return {
              ...item,
              productName: "상품 조회 실패",
            };
          }
        })
      );

      // 최종 목록을 Zustand에 저장
      set({ autoPayments: updatedList });
    } catch (error) {
      console.error("자동결제 목록 조회 오류:", error);
    }
  },

  // 자동결제 삭제
  deleteAutoPayment: async (id) => {
    try {
      await API.delete(`/autoPayments/${id}`);
      // 성공하면 store의 autoPayments에서 제거
      set((state) => ({
        autoPayments: state.autoPayments.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("자동결제 삭제 실패:", error);
      throw error;
    }
  },

  // 자동결제 수정
  updateAutoPayment: async (id, { dayOfMonth, time }) => {
    try {
      const updatedData = { dayOfMonth, time };
      await API.put(`/autoPayments/${id}`, updatedData);

      // store 갱신
      set((state) => ({
        autoPayments: state.autoPayments.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        ),
      }));
    } catch (error) {
      console.error("자동결제 수정 실패:", error);
      throw error;
    }
  },
}));

export default useAutoPaymentStore;
