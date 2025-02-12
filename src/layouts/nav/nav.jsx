import { Link } from "react-router-dom";
import * as S from "./style";

const Nav = () => {
  return (
    <S.NavContainer>
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

      {/* 오른쪽: 로그인, 마이페이지 */}
      <S.AuthWrapper>
        <S.MenuItem to="/login">로그인</S.MenuItem>
        <S.MenuItem to="/mypage">마이페이지</S.MenuItem>
      </S.AuthWrapper>
    </S.NavContainer>
  );
};

export default Nav;
