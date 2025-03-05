import { create } from "zustand";
import API from ".";

export const useUserHealthStore = create((set) => ({
  // 스토어에서 관리할 상태: 예) 최근 저장된 healthInfo
  userHealthInfo: null,

  // 건강정보 등록
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

  // 건강정보 조회
  getUserHealthInfo: async () => {
    try {
      const response = await API.get("/user-health");
      if (response.data?.result) {
        set({ userHealthInfo: response.data.result });
      }
      return response.data;
    } catch (error) {
      console.error("Failed to fetch health info:", error);
      throw error;
    }
  },

  // 건강정보 수정
  updateUserHealthInfo: async (payload) => {
    try {
      const response = await API.put("/user-health", payload);
      set({ userHealthInfo: response.data });
      return response.data;
    } catch (error) {
      console.error("Failed to update health info:", error);
      throw error;
    }
  },

  resetUserHealthInfo: () => set({ userHealthInfo: null }),
}));
