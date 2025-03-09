import styled, { keyframes, css } from "styled-components";

// 기존 스타일 유지
export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// 새로운 스타일 컴포넌트 - 보험 페이지 전용
export const InsuranceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const InsuranceHeader = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const InsuranceTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #4169e1;
  }
`;

export const InsuranceSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-left: 2.25rem;
`;

export const InsuranceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InsuranceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  padding: 1.25rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CompanyLogo = styled.img`
  width: 30px; // 가로 크기를 30px 고정
  height: 30px; // 세로 크기를 30px 고정
  object-fit: contain; // 이미지 비율을 유지하며 영역에 맞춤
  margin-right: 8px;
`;

export const CompanyName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const ProductCategory = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}20`}; // 20% opacity
  color: ${(props) => props.color};
  margin-top: 0.25rem;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;

  ${(props) =>
    props.status === "active"
      ? css`
          background-color: #e6f7ee;
          color: #10b981;
        `
      : css`
          background-color: #fff7e6;
          color: #f59e0b;
        `}
`;

export const CardBody = styled.div`
  padding: 1.25rem;
`;

export const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

export const ProductInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProductInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  svg {
    color: #4169e1;
    flex-shrink: 0;
  }
`;

export const CardFooter = styled.div`
  padding: 1.25rem;
  border-top: 1px solid #f0f0f0;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const ButtonBase = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
`;

export const ViewDetailsButton = styled(ButtonBase)`
  background: #f0f4ff;
  color: #4169e1;
  border: 1px solid #e0e7ff;

  &:hover {
    background: #e0e7ff;
  }
`;

export const ManageButton = styled(ButtonBase)`
  background: white;
  color: #555;
  border: 1px solid #e0e0e0;

  &:hover {
    background: #f5f5f5;
  }
`;

// 로딩 상태 스타일
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export const LoadingSpinner = styled.div`
  margin-bottom: 1rem;

  svg {
    animation: ${spin} 1.5s linear infinite;
  }
`;

export const LoadingText = styled.p`
  font-size: 1rem;
  color: #666;
`;

// 에러 상태 스타일
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
  padding: 2rem;
`;

export const ErrorTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 1rem 0 0.5rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 400px;
`;

// 빈 상태 스타일
export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
`;

export const EmptyStateDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 400px;
`;

export const BrowseButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #4169e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #3157d1;
    transform: translateY(-2px);
  }
`;

// 기존 스타일 유지 (다른 컴포넌트에서 사용할 수 있으므로)
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const CardBody2 = styled.div`
  padding: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #333;
  }
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const CompanyName2 = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #4169e1;
`;
