import styled, { keyframes } from "styled-components";

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

// 로딩 컴포넌트 스타일
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(65, 105, 225, 0.2);
  border-radius: 50%;
  border-top: 4px solid #4169e1;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

export const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #555;
  font-weight: 500;
`;

// 에러 컴포넌트 스타일
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 0 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ErrorIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #fff3f3;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: #ff4d4f;
`;

export const ErrorTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

export const ErrorDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 500px;
`;

export const ErrorButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(65, 105, 225, 0.2);

  &:hover {
    background-color: #3157d1;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(65, 105, 225, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(65, 105, 225, 0.2);
  }
`;

// 메인 페이지 스타일
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0rem;
`;

export const ConfirmContainer = styled.div`
  margin: 0 auto;
  background-color: white;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 10;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  span {
    margin-top: 2px;
  }
`;

// 헤더 섹션
export const HeaderSection = styled.div`
  background: linear-gradient(135deg, #4169e1 0%, #3157d1 100%);
  padding: 3rem 2rem 2rem;
  color: white;
  border-radius: 16px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const CompanyBadge = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

export const CategoryBadge = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

// 콘텐츠 섹션
export const ContentSection = styled.div`
  padding: 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const SectionTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #e7f5ff;
  border-radius: 8px;
  margin-right: 0.75rem;
  color: #4169e1;
`;

export const InfoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const InfoCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #e7f5ff;
  border-radius: 12px;
  margin-right: 1rem;
  color: #4169e1;
`;

export const InfoCardContent = styled.div`
  flex: 1;
`;

export const InfoCardLabel = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

export const InfoCardValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => (props.highlight ? "#4169e1" : "#333")};
`;

export const CoverageCard = styled.div`
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CoverageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #4169e1;
`;

export const CoverageTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 0.75rem;
  color: #333;
`;

export const CoverageContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

// 경고 섹션
export const WarningSection = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  background-color: #fff8e6;
  border-left: 4px solid #ffcc00;

  @media (max-width: 576px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const WarningIcon = styled.div`
  color: #ffcc00;
  margin-right: 1rem;
  flex-shrink: 0;
`;

export const WarningContent = styled.div`
  flex: 1;
`;

export const WarningTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const WarningText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
`;

// 동의 섹션
export const AgreementSection = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  @media (max-width: 576px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.checked ? "#4169e1" : "white")};
  border: 2px solid ${(props) => (props.checked ? "#4169e1" : "#ccc")};
  border-radius: 6px;
  transition: all 0.2s;
  margin-right: 0.75rem;
  flex-shrink: 0;

  svg {
    color: white;
  }

  ${CheckboxLabel}:hover & {
    border-color: #4169e1;
  }
`;

export const CheckboxText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

// 액션 섹션
export const ActionSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const Button = styled.button`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
`;

export const CancelButton = styled(Button)`
  background-color: #f1f3f5;
  color: #495057;
  border: none;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: #4169e1;
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(65, 105, 225, 0.2);

  &:hover:not(:disabled) {
    background-color: #3157d1;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(65, 105, 225, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(65, 105, 225, 0.2);
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
    box-shadow: none;
  }

  animation: ${(props) => (props.disabled ? "none" : pulse)} 2s infinite;
`;
