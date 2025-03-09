// style.js

import styled from "styled-components";

export const InsuranceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardHeader = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 회사 로고 + 회사 이름을 나란히 배치할 컴포넌트
export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
`;

// 로고 이미지 스타일
export const CompanyLogo = styled.img`
  width: 30px; // 가로 크기를 30px 고정
  height: 30px; // 세로 크기를 30px 고정
  object-fit: contain; // 이미지 비율을 유지하며 영역에 맞춤
  margin-right: 8px;
`;

export const CompanyName = styled.span`
  font-weight: bold;
  color: #4169e1;
`;

/* 새 래퍼: 카테고리 태그 + 북마크 아이콘을 수평 배치 */
export const CategoryTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 태그와 아이콘 사이 간격 */
  cursor: pointer;
  color: #4169e1;
`;

export const CategoryTag = styled.span`
  background: #e7f5ff;
  color: #4169e1;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

export const CardBody = styled.div`
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const MonthlyFee = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #4169e1;
  margin-top: 1rem;
`;

export const CardFooter = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

export const DetailButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #4169e1;
  border-radius: 4px;
  background: white;
  color: #4169e1;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4169e1;
    color: white;
  }
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #4169e1;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #3157d1;
  }
`;
