// src/layouts/nav/Nav.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import { useNotificationStore } from "../../store/useNotificationStore";
import { User, Bell } from "lucide-react";
import NotificationDropdown from "../../components/notification/NotificationDropdown";

const Nav = () => {
  const { isLoggedIn, user, fetchUserInfo, storeLogout } = useAuthStore();
  const { subscribeNotifications, fetchNotifications, unreadCount } = useNotificationStore();

  // 알림 모달/드롭다운 표시 여부
  const [showNotifications, setShowNotifications] = useState(false);

  // Nav 영역 외부 클릭 시 드롭다운을 닫기 위해 Ref 사용 (옵션)
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserInfo();
      // SSE 구독 + 알림 목록 초기 로드
      subscribeNotifications();
      fetchNotifications();
    }
  }, [isLoggedIn, fetchUserInfo, subscribeNotifications, fetchNotifications]);

  const handleLogout = () => {
    storeLogout();
  };

  // 아이콘 클릭 시: 드롭다운 표시/숨김 토글
  const handleClickBell = () => {
    setShowNotifications((prev) => !prev);
  };

  // Nav 외부 클릭하면 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.NavContainer>
      <S.LeftWrapper>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo src="/img/logo.png" alt="로고" />
          </Link>
        </S.LogoWrapper>

        {/* 항상 보이는 메뉴 */}
        <S.MenuWrapper>
          <S.MenuItem to="/recommend">보험추천</S.MenuItem>
          <S.MenuItem to="/mypage/insurance">가입현황</S.MenuItem>
        </S.MenuWrapper>
      </S.LeftWrapper>

      <S.AuthWrapper>
        {isLoggedIn ? (
          user && (
            <>
              {/* 알림 아이콘 + 뱃지 */}
              <S.NotificationIcon ref={dropdownRef}>
                <Bell size={18} onClick={handleClickBell} />
                {/* unreadCount > 0 인 경우, 작고 빨간 Dot만 표시 */}
                {unreadCount > 0 && <S.NotificationDot />}

                {showNotifications && <NotificationDropdown />}
              </S.NotificationIcon>

              <S.UserInfo>
                <User size={18} />
                <span>{user.name}님</span>
              </S.UserInfo>

              <S.MenuItem to="/mypage">마이페이지</S.MenuItem>
              <S.MenuItem as="button" onClick={handleLogout}>
                로그아웃
              </S.MenuItem>
            </>
          )
        ) : (
          <S.MenuItem to="/login">로그인</S.MenuItem>
        )}
      </S.AuthWrapper>
    </S.NavContainer>
  );
};

export default Nav;
