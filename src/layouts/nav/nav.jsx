import { Link } from "react-router-dom";
import * as S from "./style";
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect } from "react";

const Nav = () => {
  const { isLoggedIn, user, fetchUserInfo, storeLogout } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, [isLoggedIn, fetchUserInfo]);

  // 로그아웃 핸들러
  const handleLogout = () => {
    storeLogout();
  };

  return (
    <S.NavContainer>
      {/* 왼쪽 로고 및 메뉴 */}
      <S.LeftWrapper>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo src="/img/logo.png" alt="로고" />
          </Link>
        </S.LogoWrapper>
        <S.MenuWrapper>
          <S.MenuItem to="/">보험추천</S.MenuItem>
          <S.MenuItem to="/">가입현황</S.MenuItem>
        </S.MenuWrapper>
      </S.LeftWrapper>

      {/* 오른쪽: 로그인/로그아웃, 마이페이지 */}
      <S.AuthWrapper>
        {isLoggedIn ? (
          <>
            {/* 로그아웃 버튼 (as="button"으로 Link 스타일을 적용하되, 실제로는 버튼으로 동작) */}
            <S.MenuItem as="button" onClick={handleLogout}>
              로그아웃
            </S.MenuItem>

            {/* 로그인된 사용자의 이름 표시 (필요하다면) */}
            {user ? (
              <>
                <S.MenuItem to="/mypage">{user.name}님, 환영합니다.</S.MenuItem>
                <S.MenuItem to="/mypage">마이페이지</S.MenuItem>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            {/* 로그인 상태가 아니면 로그인 버튼 */}
            <S.MenuItem to="/login">로그인</S.MenuItem>
          </>
        )}
      </S.AuthWrapper>
    </S.NavContainer>
  );
};

export default Nav;
