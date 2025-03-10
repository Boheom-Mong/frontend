// src/components/notification/NotificationDropdown.jsx
import React from "react";
import { useNotificationStore } from "../../store/useNotificationStore";
import {
  DropdownContainer,
  DropdownHeader,
  EmptyMessage,
  NotificationItem,
  DeleteButton,
} from "./style"; // <- 방금 만든 파일 import

function NotificationDropdown() {
  const { notifications, deleteNotification } = useNotificationStore();

  // 최신순 정렬
  const sortedNotis = [...notifications].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <DropdownContainer>
      <DropdownHeader>알림</DropdownHeader>

      {sortedNotis.length === 0 ? (
        <EmptyMessage>알림이 없습니다.</EmptyMessage>
      ) : (
        sortedNotis.map((n) => (
          <NotificationItem key={n.notificationId}>
            <span>{n.content}</span>
            <DeleteButton onClick={() => deleteNotification(n.notificationId)}>
              X
            </DeleteButton>
          </NotificationItem>
        ))
      )}
    </DropdownContainer>
  );
}

export default NotificationDropdown;
