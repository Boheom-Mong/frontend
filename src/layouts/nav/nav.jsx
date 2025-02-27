// Nav.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import { User, Bell } from "lucide-react";

const Nav = () => {
  const { isLoggedIn, user, fetchUserInfo, storeLogout } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, [isLoggedIn, fetchUserInfo]);

  const handleLogout = () => {
    storeLogout();
  };

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
          <S.MenuItem to="/">보험추천</S.MenuItem>
          <S.MenuItem to="/mypage/insurance">가입현황</S.MenuItem>
        </S.MenuWrapper>
      </S.LeftWrapper>

      {/* 로그인 상태에 따라 메뉴 표시 */}
      <S.AuthWrapper>
        {isLoggedIn ? (
          user && (
            <>
              {/* 알림 아이콘 */}
              <S.NotificationIcon>
                <Bell size={18} />
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
