import styled, { keyframes, css } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 컨테이너
export const AutoPaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

// 카드 컨테이너
export const AutoPaymentCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
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

// 헤더
export const AutoPaymentHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

// 제목
export const AutoPaymentTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: #4169e1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// 부제목
export const AutoPaymentSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

// 폼 컨테이너
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

// 폼 섹션
export const FormSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
`;

// 폼 라벨
export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;

  svg {
    color: #4169e1;
  }
`;

// 폼 설명
export const FormDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.25rem;
`;

// 날짜 선택 컨테이너
export const DayPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

// 날짜 슬라이더
export const DaySlider = styled.input`
  flex: 1;
  -webkit-appearance: none;
  height: 6px;
  background: #e0e7ff;
  border-radius: 3px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4169e1;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(65, 105, 225, 0.5);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4169e1;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(65, 105, 225, 0.5);
    }
  }
`;

// 날짜 표시
export const DayDisplay = styled.div`
  min-width: 60px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4169e1;
  text-align: center;

  span {
    display: inline-block;
    min-width: 30px;
    text-align: right;
  }
`;

// 날짜 숫자 컨테이너
export const DayNumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// 날짜 숫자
export const DayNumber = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.isSelected
      ? css`
          background-color: #4169e1;
          color: white;
          font-weight: 600;
        `
      : css`
          background-color: #e0e7ff;
          color: #4169e1;

          &:hover {
            background-color: #c7d2fe;
          }
        `}
`;

// 시간 선택 컨테이너
export const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

// 시간 입력
export const TimeInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e0e7ff;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4169e1;
    box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.2);
  }
`;

// 시간 표시
export const TimeDisplay = styled.div`
  min-width: 100px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4169e1;
`;

// 시간 프리셋
export const TimePresets = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

// 시간 프리셋 버튼
export const TimePresetButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.isSelected
      ? css`
          background-color: #4169e1;
          color: white;
          border: none;
        `
      : css`
          background-color: white;
          color: #4169e1;
          border: 1px solid #e0e7ff;

          &:hover {
            background-color: #f0f4ff;
          }
        `}
`;

// 알림 컨테이너
export const NoticeContainer = styled.div`
  background-color: #fff7e6;
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
  padding: 1.25rem;
`;

// 알림 헤더
export const NoticeHeader = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #d97706;
  margin-bottom: 0.75rem;
`;

// 알림 목록
export const NoticeList = styled.ul`
  padding-left: 1.5rem;
`;

// 알림 항목
export const NoticeItem = styled.li`
  font-size: 0.9rem;
  color: #92400e;
  margin-bottom: 0.5rem;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// 취소 버튼
export const CancelButton = styled(ButtonBase)`
  flex: 1;
  background-color: #f0f4ff;
  color: #4169e1;
  border: 1px solid #e0e7ff;

  &:hover:not(:disabled) {
    background-color: #e0e7ff;
  }
`;

// 저장 버튼
export const SaveButton = styled(ButtonBase)`
  flex: 2;
  background-color: #4169e1;
  color: white;
  border: none;

  &:hover:not(:disabled) {
    background-color: #3157d1;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(65, 105, 225, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

// 로딩 스피너
export const LoadingSpinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s linear infinite;
`;

// 토스트 컨테이너
export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

// 토스트 메시지
export const Toast = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-out forwards,
    ${slideOut} 0.3s ease-in forwards 3s;

  ${(props) =>
    props.type === "success"
      ? css`
          background-color: #ecfdf5;
          border-left: 4px solid #10b981;

          svg {
            color: #10b981;
          }
        `
      : css`
          background-color: #fef2f2;
          border-left: 4px solid #ef4444;

          svg {
            color: #ef4444;
          }
        `}
`;

// 토스트 메시지 텍스트
export const ToastMessage = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
`;

// 토스트 표시 함수
export const showToast = ({ type, message }) => {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "0.75rem";
  toast.style.padding = "1rem 1.5rem";
  toast.style.borderRadius = "8px";
  toast.style.marginBottom = "0.75rem";
  toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  toast.style.animation = `${slideIn.name} 0.3s ease-out forwards, ${slideOut.name} 0.3s ease-in forwards 3s`;

  if (type === "success") {
    toast.style.backgroundColor = "#ecfdf5";
    toast.style.borderLeft = "4px solid #10b981";
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span style="font-size: 0.95rem; font-weight: 500; color: #333;">${message}</span>
    `;
  } else {
    toast.style.backgroundColor = "#fef2f2";
    toast.style.borderLeft = "4px solid #ef4444";
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span style="font-size: 0.95rem; font-weight: 500; color: #333;">${message}</span>
    `;
  }

  container.appendChild(toast);

  // 애니메이션 종료 후 제거
  setTimeout(() => {
    container.removeChild(toast);
  }, 3300);
};
