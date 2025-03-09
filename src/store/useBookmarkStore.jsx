import { create } from "zustand";
import API from "."; // axios instance (token header 등 설정된)

export const useBookmarkStore = create((set, get) => ({
  bookmarkList: [],
  loading: false,
  error: null,

  // (A) 내 북마크 목록 조회
  fetchMyBookmarks: async () => {
    set({ loading: true, error: null });
    try {
      // 백엔드에서 "GET /api/bookmarks" -> 내 북마크 전체 목록
      const response = await API.get("/bookmarks");
      console.log("Response from /bookmarks:", response);
      if (response.data.resultCode === "SUCCESS") {
        // 결과가 bookmarkResponseDto[] 형태라고 가정
        set({
          bookmarkList: response.data.result,
          loading: false,
        });
      } else {
        set({ error: "북마크 조회 실패", loading: false });
      }
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("fetchMyBookmarks error:", err);
    }
  },

  // (B) 북마크 토글 (이미 존재하면 삭제, 없으면 생성)
  toggleBookmark: async (productId) => {
    try {
      set({ loading: true, error: null });
      // "POST /api/bookmarks/products/{productId}/toggle"
      await API.post(`/bookmarks/products/${productId}/toggle`);
      // 토글 후 북마크 목록 다시 불러오기
      await get().fetchMyBookmarks();
      set({ loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("toggleBookmark error:", err);
    }
  },

  // (옵션) 특정 상품 북마크 여부 (Boolean)
  fetchBookmarkState: async (productId) => {
    try {
      const response = await API.get("/bookmarks/state", {
        params: { productId },
      });
      if (response.data.resultCode === "SUCCESS") {
        return response.data.result; // true/false
      } else {
        console.error("북마크 여부 조회 실패");
        return false;
      }
    } catch (err) {
      console.error("fetchBookmarkState error:", err);
      return false;
    }
  },
}));
