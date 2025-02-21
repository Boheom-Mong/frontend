import styled from "styled-components";
import { Link } from "react-router-dom";

// 네비게이션 전체 컨테이너
export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;

// 로고 스타일
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 35px;
`;

// 중앙 메뉴 스타일 (로고 옆에 붙음)
export const MenuWrapper = styled.div`
  display: flex;
  gap: 60px;
`;

// 메뉴 아이템
export const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;

  &:hover {
    color: #007aff;
  }
`;

// 오른쪽 로그인, 마이페이지 스타일
export const AuthWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
