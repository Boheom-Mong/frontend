import { Routes, Route, NavLink } from "react-router-dom";
import { useEffect } from "react";
import * as S from "./style"; // 스타일 컴포넌트 import
import { useAuthStore } from "../../store/useAuthStore";
import UserInfo from "./userInfo";
import MyInsurance from "./myInsurance";
import HealthInfo from "./healthInfo";

const Mypage = () => {
  const { isLoggedIn, user, fetchUserInfo } = useAuthStore();

  // 로그인되어 있고 아직 user 정보가 없으면 fetchUserInfo 호출
  useEffect(() => {
    console.log("user정보", user);
    if (isLoggedIn && !user) {
      fetchUserInfo();
    }
  }, [isLoggedIn, user, fetchUserInfo]);

  // 아직 로그인되지 않았거나 user 정보를 못 가져온 상황
  if (!isLoggedIn) {
    return <div>로그인 후 이용 가능합니다.</div>;
  }
  if (!user) {
    return <div>로딩중...</div>;
  }

  // user가 확실히 있는 상태에서 렌더링
  return (
    <S.Wrapper>
      {/* 사이드바 */}
      <S.Sidebar>
        <S.UserProfile>
          <S.ProfileImage src="/img/sesac.png" alt="Profile" />
          <S.UserName>{user.name}</S.UserName>
          <S.UserEmail>{user.loginEmail}</S.UserEmail>
        </S.UserProfile>

        {/* 사이드바 내비게이션 */}
        <S.Nav>
          <S.NavItem>
            {/* URL 경로가 정확히 /mypage 일 때 활성화 */}
            <NavLink
              to="/mypage"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              사용자 정보
            </NavLink>
          </S.NavItem>
          <S.NavItem>
            <NavLink
              to="/mypage/health"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              건강 정보
            </NavLink>
          </S.NavItem>
          <S.NavItem>
            <NavLink
              to="/mypage/insurance"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              나의 보험
            </NavLink>
          </S.NavItem>
        </S.Nav>
      </S.Sidebar>

      {/* 오른쪽 메인 콘텐츠 영역 */}
      <S.Content>
        <Routes>
          <Route path="/" element={<UserInfo user={user} />} />
          <Route path="/health" element={<HealthInfo />} />
          <Route path="/insurance" element={<MyInsurance />} />
        </Routes>
      </S.Content>
    </S.Wrapper>
  );
};

export default Mypage;
