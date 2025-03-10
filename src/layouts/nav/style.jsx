import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 10rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  @media (max-width: 950px) {
    padding: 2rem;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  /* 토글 없이 항상 보이므로 미디어쿼리로 숨길 필요도 없음 */
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #007aff;
    background-color: rgba(0, 122, 255, 0.1);
  }

  ${({ as }) =>
    as === "button" &&
    `
    background: none;
    border: none;
    cursor: pointer;
  `}
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  /* 마찬가지로 항상 보이도록 처리 */
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;
`;

// 알림 아이콘 주변 컨테이너
export const NotificationIcon = styled.div`
  position: relative;  /* 자식들의 위치 기준이 됨 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  /* 알림 아이콘 색 */
  svg {
    color: #333;
    transition: color 0.2s;
  }
  &:hover svg {
    color: #007aff;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
`;

export const NotificationDot = styled.span`
  position: absolute;
  /* 벨 아이콘의 오른쪽 상단 모서리에 살짝 겹치게 조정 */
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 50%;
  pointer-events: none;
`;
