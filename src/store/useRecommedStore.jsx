// store/useRecommendStore.js
import { create } from "zustand";
import API from "."; // axios 인스턴스 (baseURL, JWT 헤더 설정 등)

const useRecommendStore = create((set) => ({
  recommendedData: null, // 백엔드에서 받아올 추천 결과
  loading: false,
  error: null,

  // 추천 API 호출
  fetchRecommendations: async () => {
    try {
      set({ loading: true, error: null });

      // 예: GET /api/recommendations
      const response = await API.get("/recommendations");
      console.log("백엔드 응답:", response.data); // 전체 응답
      console.log("백엔드 응답 result:", response.data.result); // result만

      // 백엔드 응답: Response<RecommendationResponseDto>
      // 보통 data.result 에 실제 값이 들어있다고 가정
      set({
        recommendedData: response.data.result,
        loading: false,
        error: null,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useRecommendStore;
