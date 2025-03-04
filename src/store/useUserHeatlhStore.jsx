import { create } from "zustand";
import API from ".";

export const useUserHealthStore = create((set) => ({
  // 스토어에서 관리할 상태: 예) 최근 저장된 healthInfo
  userHealthInfo: null,

  // 1) 폼 데이터를 받아서 API로 전송
  postUserHealthInfo: async (payload) => {
    try {
      const response = await API.post("/user-health", payload);
      // 필요하다면, 응답값을 상태에 저장
      set({ userHealthInfo: response.data });

      // 성공 시 필요하면 true/false, 혹은 response.data 반환
      return response.data;
    } catch (error) {
      console.error("Failed to save health info:", error);
      throw error; // 컴포넌트에서 에러 잡도록 re-throw
    }
  },

  // 2) userHealthInfo 상태 초기화
  resetUserHealthInfo: () => set({ userHealthInfo: null }),
}));
