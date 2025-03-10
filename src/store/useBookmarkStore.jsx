import { create } from "zustand";
import API from "."; // axios instance (token header 등 설정된)
import useInsuranceProductStore from "./useInsuranceProductStore";

export const useBookmarkStore = create((set, get) => ({
  bookmarkList: [],         // 최소 정보만 담긴 북마크
  bookmarkDetailList: [],   // '상품 상세정보'까지 합쳐진 리스트
  loading: false,
  error: null,

  // (1) 최소 북마크 정보 로딩
  fetchMyBookmarks: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API.get("/bookmarks"); 
      if (response.data.resultCode === "SUCCESS") {
        set({
          bookmarkList: response.data.result, // [{bookmarkId, productId, createdAt}, ...]
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

  // (2) 북마크 + 상품 상세를 합쳐 'bookmarkDetailList' 채우기
  fetchMyBookmarksWithDetail: async () => {
    // 먼저 최소 데이터 로딩
    await get().fetchMyBookmarks();

    // bookmarkList를 가져온 뒤, 각 productId로 'fetchInsuranceById' 호출
    const { bookmarkList } = get();
    const insuranceStore = useInsuranceProductStore.getState(); 
    // 다른 store의 fetchInsuranceById 사용

    // 병렬로 처리
    const detailPromises = bookmarkList.map(async (bm) => {
      const product = await insuranceStore.fetchInsuranceById(bm.productId);
      // 통합: { bookmarkId, productId, createdAt, companyName, productName, ... }
      return { ...bm, ...product };
    });

    try {
      set({ loading: true });
      const mergedList = await Promise.all(detailPromises);
      // mergedList 안에는 각 bookmark + product 상세정보가 합쳐진 객체
      set({
        bookmarkDetailList: mergedList,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("fetchMyBookmarksWithDetail error:", err);
    }
  },

  // (B) 북마크 토글 (이미 존재하면 삭제, 없으면 생성)
  toggleBookmark: async (productId) => {
    try {
      set({ loading: true, error: null });
      // "POST /api/bookmarks/products/{productId}/toggle"
      await API.post(`/bookmarks/products/${productId}/toggle`);
      // 토글 후 북마크 목록 다시 불러오기
      window.location.reload();
      //await get().fetchMyBookmarksWithDetail();
      //set({ loading: false });
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
