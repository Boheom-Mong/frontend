import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const confettiFall = keyframes`
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`;

// 컨페티 애니메이션
export const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
`;

export const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${() => {
    const colors = [
      "#4169e1",
      "#ff6b6b",
      "#feca57",
      "#1dd1a1",
      "#5f27cd",
      "#ff9ff3",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }};
  top: -10px;
  left: ${() => `${Math.random() * 100}%`};
  opacity: ${() => Math.random() * 0.8 + 0.2};
  border-radius: ${() => (Math.random() > 0.5 ? "50%" : "0")};
  animation: ${confettiFall} ${() => 5 + Math.random() * 5}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  transform-origin: center center;
`;

// 페이지 컨테이너
export const SuccessPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

// 성공 카드
export const SuccessCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

// 성공 아이콘 래퍼
export const SuccessIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${pulse} 2s infinite;
`;

// 성공 제목
export const SuccessTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 성공 메시지
export const SuccessMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

// 결제 정보 컨테이너
export const PaymentInfoContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

// 결제 정보 항목
export const PaymentInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

// 결제 정보 라벨
export const PaymentInfoLabel = styled.span`
  font-weight: 600;
  color: #555;
`;

export const PaymentInfoValueNumber = styled.span`
  color: #333;
  font-weight: 500;
  font-size: 0.8rem;
`;

// 결제 정보 값
export const PaymentInfoValue = styled.span`
  color: #333;
  font-weight: 500;
  font-size: 1rem;
`;

// 영수증 정보
export const ReceiptInfo = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
  margin-bottom: 2rem;
`;

// 다음 단계 컨테이너
export const NextStepsContainer = styled.div`
  margin-bottom: 2rem;
`;

// 다음 단계 제목
export const NextStepsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

// 다음 단계 목록
export const NextStepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

// 다음 단계 항목
export const NextStepsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #555;
  font-size: 0.95rem;

  svg {
    color: #4169e1;
    flex-shrink: 0;
  }
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// 버튼 기본 스타일
const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

// 홈 버튼
export const HomeButton = styled(ButtonBase)`
  background-color: #f0f4ff;
  color: #4169e1;
  border: 1px solid #e0e7ff;

  &:hover {
    background-color: #e0e7ff;
  }
`;

// 가입 내역 보기 버튼
export const ViewInsuranceButton = styled(ButtonBase)`
  background-color: #4169e1;
  color: white;
  border: none;

  &:hover {
    background-color: #3157d1;
  }
`;

// 기존 스타일 유지 (다른 페이지에서 사용할 수 있으므로)
export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  padding: 40px 24px;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
    font-size: 1rem;
    line-height: 1.4;
    color: #666;
  }
`;

export const CheckIcon = styled.svg`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(65, 105, 225, 0.2);
  border-radius: 50%;
  border-top: 4px solid #4169e1;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;
