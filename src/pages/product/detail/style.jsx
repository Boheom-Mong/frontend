import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

// 메인 컨테이너
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0rem;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// 헤더 섹션
export const Header = styled.header`
  position: relative;
  background: linear-gradient(135deg, #4169e1 0%, #3157d1 100%);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(65, 105, 225, 0.2);

`;

export const CompanyName = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const ProductName = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CategoryTag = styled.span`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
`;

// 콘텐츠 섹션
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const MainInfo = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

// 상품 설명 및 보험료 섹션
export const ProductOverview = styled.div`
  padding: 2.5rem;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const MonthlyFee = styled.div`
  span {
    display: block;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  strong {
    font-size: 2.5rem;
    font-weight: 700;
    color: #4169e1;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

// 상세 정보 섹션
export const DetailSection = styled.div`
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

// 정보 블록 컨테이너
export const InfoBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// 정보 블록
export const InfoBlock = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
  }
`;

// 정보 블록 제목
export const InfoBlockTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e7f5ff;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: #4169e1;
  }
`;

// 정보 블록 텍스트
export const InfoBlockText = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  padding: 0.6rem 0;
  border-bottom: 1px dashed #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  strong {
    font-weight: 600;
    color: #333;
    margin-right: 1rem;
    flex-shrink: 0;
    min-width: 100px;
  }
  
  span {
    text-align: right;
  }
`;

// 액션 섹션
export const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 버튼 기본 스타일
const ButtonBase = styled.button`
  flex: 1;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// 가입 신청 버튼
export const ApplyButton = styled(ButtonBase)`
  background: #4169e1;
  color: white;
  border: none;
  box-shadow: 0 5px 15px rgba(65, 105, 225, 0.3);
  
  &:hover:not(:disabled) {
    background: #3157d1;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(65, 105, 225, 0.4);
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px);
  }
  
  animation: ${pulse} 2s infinite;
`;

// 상담 신청 버튼
export const ConsultButton = styled(ButtonBase)`
  background: white;
  color: #4169e1;
  border: 2px solid #4169e1;
  
  &:hover {
    background: #f0f4ff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(65, 105, 225, 0.1);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

// 추가 정보 박스
export const ExtraBox = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #4169e1;
`;

// 섹션 제목
export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 4px;
    background-color: #4169e1;
    border-radius: 2px;
  }
`;

// 특징 목록
export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  
  li {
    position: relative;
    padding-left: 1.75rem;
    color: #555;
    margin-bottom: 0.75rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #4169e1;
      font-weight: bold;
    }
  }
`;

// 요구사항 목록
export const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  
  li {
    position: relative;
    padding-left: 1.75rem;
    color: #555;
    margin-bottom: 0.75rem;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0.5rem;
      color: #4169e1;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;
