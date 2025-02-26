import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;
