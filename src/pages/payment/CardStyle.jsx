import styled, { keyframes, css } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  0% { transform: scale(0); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const checkmarkDraw = keyframes`
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(65, 105, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(65, 105, 225, 0); }
`;

// 컨테이너
export const CardRegistrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

// 카드 컨테이너
export const CardRegistrationCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem 2.5rem;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

// 뒤로 가기 버튼
export const BackButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

// 성공 아이콘 래퍼
export const SuccessIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  height: 100px;
  align-items: center;
`;

// 성공 원형 배경
export const SuccessCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #4169e1;

  ${(props) =>
    props.showAnimation
      ? css`
          animation: ${scaleIn} 0.5s ease-out forwards, ${pulse} 2s infinite;

          svg {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: ${checkmarkDraw} 0.8s 0.3s ease-out forwards;
          }
        `
      : css`
          svg {
            stroke-dashoffset: 0;
          }
        `}
`;

// 제목
export const RegistrationTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 메시지
export const RegistrationMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

// 카드 정보 컨테이너
export const CardInfoContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

// 카드 정보 헤더
export const CardInfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background-color: #e7f5ff;
  color: #4169e1;
  font-weight: 600;
  font-size: 1rem;
`;

// 카드 정보 내용
export const CardInfoContent = styled.div`
  padding: 1.5rem;
`;

// 카드 정보 항목
export const CardInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

// 카드 정보 라벨
export const CardInfoLabel = styled.span`
  font-weight: 600;
  color: #555;
`;

// 카드 정보 값
export const CardInfoValue = styled.span`
  color: #333;
  font-weight: 500;
`;

// 알림 컨테이너
export const NoticeContainer = styled.div`
  margin-bottom: 2rem;
`;

// 알림 제목
export const NoticeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

// 알림 목록
export const NoticeList = styled.ul`
  padding-left: 1.5rem;
`;

// 알림 항목
export const NoticeItem = styled.li`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// 버튼 기본 스타일
const ButtonBase = styled.button`
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

// 건너뛰기 버튼
export const SkipButton = styled(ButtonBase)`
  flex: 1;
  background-color: #f0f4ff;
  color: #4169e1;
  border: 1px solid #e0e7ff;

  &:hover {
    background-color: #e0e7ff;
  }
`;

// 자동 결제 설정 버튼
export const AutoPaymentButton = styled(ButtonBase)`
  flex: 2;
  background-color: #4169e1;
  color: white;
  border: none;

  &:hover {
    background-color: #3157d1;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(65, 105, 225, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
