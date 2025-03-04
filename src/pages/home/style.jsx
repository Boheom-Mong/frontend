// style.jsx
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  /* 기존 blue 배경 유지 */
  background-color: #4169e1;
  color: #fff;
  padding: 2rem;

  /* 좌우로 나란히 배치하기 */
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* 모바일 환경 대비 반응형 예시 */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  .header-content {
    /* 왼쪽 텍스트 구역 */
    max-width: 600px; /* 글 영역 넓이 조절 */

    h1 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      font-weight: 500;
      line-height: 1.4;
    }
    h2 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.8;
    }
  }

  .header-image {
    /* 오른쪽 캐릭터 이미지 */
    width: 100px; /* 원하는 크기로 조절 */
    height: auto;
    margin-left: 2rem;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 1rem;
      width: 180px;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FilterGroup = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: #333;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CheckboxLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== "isChecked",
})`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s, color 0.2s;

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #4169e1;
          color: #fff;
        `
      : css`
          background-color: #f1f2f6;
          color: #333;
        `}

  &:hover {
    filter: brightness(0.95);
  }

  input[type="checkbox"] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
`;

export const SearchButton = styled.button`
  align-self: flex-end;
  padding: 0.75rem 1.5rem;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3157d1;
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
    max-width: 300px;
  }
`;

export const InsuranceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* 기본 색상: 비활성 (회색 배경) */
  background-color: #f1f2f6;
  color: #333;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  /* isActive(현재 페이지)면 기존 주 색(#4169e1)으로 */
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #4169e1;
      color: #fff;
    `}

  /* 마우스 호버 효과 */
  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }
`;

;
