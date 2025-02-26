import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import { Menu, X, User, Bell } from "lucide-react";

const Nav = () => {
  const { isLoggedIn, user, fetchUserInfo, storeLogout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, [isLoggedIn, fetchUserInfo]);

  const handleLogout = () => {
    storeLogout();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.NavContainer>
      <S.LeftWrapper>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo src="/img/logo.png" alt="로고" />
          </Link>
        </S.LogoWrapper>
        <S.MenuWrapper isOpen={isMenuOpen}>
          <S.MenuItem to="/" onClick={() => setIsMenuOpen(false)}>
            보험추천
          </S.MenuItem>
          <S.MenuItem
            to="/mypage/insurance"
            onClick={() => setIsMenuOpen(false)}
          >
            가입현황
          </S.MenuItem>
        </S.MenuWrapper>
      </S.LeftWrapper>

      <S.AuthWrapper isOpen={isMenuOpen}>
        {isLoggedIn ? (
          <>
            {user && (
              <>
                {/* 알림 아이콘 */}
                <S.NotificationIcon>
                  <Bell size={18} />
                </S.NotificationIcon>

                <S.UserInfo>
                  <User size={18} />
                  <span>{user.name}님</span>
                </S.UserInfo>
                <S.MenuItem to="/mypage" onClick={() => setIsMenuOpen(false)}>
                  마이페이지
                </S.MenuItem>
                <S.MenuItem as="button" onClick={handleLogout}>
                  로그아웃
                </S.MenuItem>
              </>
            )}
          </>
        ) : (
          <S.MenuItem to="/login" onClick={() => setIsMenuOpen(false)}>
            로그인
          </S.MenuItem>
        )}
      </S.AuthWrapper>

      <S.MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </S.MenuToggle>
    </S.NavContainer>
  );
};

export default Nav;
