// src/store/useNotificationStore.jsx
import { create } from "zustand";
import API from "."; // axios 인스턴스
import { useAuthStore } from "./useAuthStore";
// ↑ 만약 토큰을 직접 꺼내고 싶다면, 또는 useAuthStore에서 가져와도 됨

const SSE_URL = "https://boheommong.site/api/notifications/subscribe"; 
// const SSE_URL = "http://localhost:8080/api/notifications/subscribe";
// 백엔드 SSE 구독 endpoint (혹은 full URL)

export const useNotificationStore = create((set, get) => ({
  notifications: [],   // 알림 목록
  unreadCount: 0,      // 안 읽은 알림 수
  eventSource: null,   // SSE EventSource 인스턴스

  loading: false,
  error: null,

  // (1) 알림 구독(SSE)
  subscribeNotifications: async () => {
    // 이미 연결되어 있으면 중복 연결 방지
    if (get().eventSource) return;

    try {
      // (a) SSE 연결
      // 액세스 토큰이 필요한 경우, URL에 파라미터로 붙이거나, 다른 방법으로 Authorization 헤더를 세팅해야 함
      const token = useAuthStore.getState().getToken();
      const es = new EventSource(`${SSE_URL}?token=${token}`, { withCredentials: true });
      // 만약 헤더로 넣어야 하면, 브라우저 EventSource 표준상 커스텀 헤더를 직접 못 넣는 단점이 있음.
      // (프록시 서버 등을 통해 해결하기도 함)

      es.onopen = () => {
        console.log("SSE 연결 성공");
      };

      es.onmessage = (event) => {
        // 모든 이벤트가 들어옴
        // console.log("onmessage:", event.data);
        // 보통 첫 메시지는 "EventStream Created..." 더미
        // 실제 알림은 JSON 형태(백엔드 sendToClient에서 Response<NotificationResponseDto> 형태)일 수 있음

        try {
          const parsed = JSON.parse(event.data); 
          // 백엔드가 `Response.success(dto)` 형태로 보냈다면, {resultCode, result:{notificationId, ...}} 구조
          if (parsed.resultCode === "SUCCESS" && parsed.result) {
            const notification = parsed.result;
            // (b) 새 알림을 notifications 배열에 추가
            if (notification.content) {
              set((state) => ({
                notifications: [notification, ...state.notifications],
                unreadCount: state.unreadCount + 1,
              }));
            }
          } else {
            // 더미 or 기타 메시지일 수도
            console.log("수신:", parsed);
          }
        } catch (error) { 
          console.warn("메시지 파싱 에러:", error, event.data);
        }
      };

      es.onerror = (err) => {
        console.error("SSE onerror:", err);
        // 에러가 반복되면 SSE 연결이 끊길 수 있음
      };

      // (c) store에 eventSource 저장
      set({ eventSource: es });
    } catch (err) {
      console.error("subscribeNotifications error:", err);
      set({ error: err.message });
    }
  },

  // (2) 알림 목록 불러오기 (백엔드 /api/notifications)
  fetchNotifications: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API.get("/notifications");
      // { resultCode: 'SUCCESS', result: [{notificationId, content, checked,...}, ...] }
      if (response.data.resultCode === "SUCCESS") {
        const list = response.data.result;
        const unreadCount = list.filter((n) => !n.checked).length;
        set({
          notifications: list,
          unreadCount,
          loading: false,
        });
      } else {
        set({ loading: false, error: "알림 조회 실패" });
      }
    } catch (err) {
      set({ loading: false, error: err.message });
    }
  },

  // (3) 알림 읽음 처리
  readNotification: async (notificationId) => {
    try {
      await API.post(`/notifications/${notificationId}/read`);
      // 성공 시 store에서도 해당 알림의 checked=true로 변경
      set((state) => {
        const updated = state.notifications.map((n) =>
          n.notificationId === notificationId ? { ...n, checked: true } : n
        );
        const unreadCount = updated.filter((x) => !x.checked).length;
        return {
          notifications: updated,
          unreadCount,
        };
      });
    } catch (err) {
      console.error("readNotification error:", err);
    }
  },

  // (4) 알림 삭제
  deleteNotification: async (notificationId) => {
    try {
      await API.post(`/notifications/${notificationId}/delete`);
      // 소프트 삭제 성공 시, store에서도 제거(혹은 표시)
      set((state) => {
        const filtered = state.notifications.filter(
          (n) => n.notificationId !== notificationId
        );
        const unreadCount = filtered.filter((x) => !x.checked).length;
        return {
          notifications: filtered,
          unreadCount,
        };
      });
    } catch (err) {
      console.error("deleteNotification error:", err);
    }
  },

  // (5) SSE 연결 해제 (로그아웃 시 등)
  disconnect: () => {
    const es = get().eventSource;
    if (es) {
      es.close();
      set({ eventSource: null });
    }
  },
}));
