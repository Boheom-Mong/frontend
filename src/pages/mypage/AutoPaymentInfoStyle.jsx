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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// 컨테이너
export const AutoPaymentInfoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// 헤더
export const AutoPaymentInfoHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

// 제목
export const AutoPaymentInfoTitle = styled.h1`
  font-size: 2rem;
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
export const AutoPaymentInfoSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
`;

// 로딩 컨테이너
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease-out;
`;

// 로딩 스피너
export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(65, 105, 225, 0.1);
  border-radius: 50%;
  border-top-color: #4169e1;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.5rem;
`;

// 로딩 텍스트
export const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

// 결제 목록 컨테이너
export const PaymentListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// 결제 카드
export const PaymentCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  ${(props) =>
    props.isEditing
      ? css`
          border: 2px solid #4169e1;
          transform: scale(1.02);
        `
      : css`
          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          }
        `}
`;

// 결제 카드 헤더
export const PaymentCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #f0f0f0;
`;

// 상품명
export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #4169e1;
  }
`;

// 결제 카드 액션 버튼 그룹
export const PaymentCardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// 버튼 기본 스타일
const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }
`;

// 수정 버튼
export const EditButton = styled(ButtonBase)`
  width: 32px;
  height: 32px;
  background-color: #e0e7ff;
  color: #4169e1;

  &:hover {
    background-color: #c7d2fe;
  }
`;

// 삭제 버튼
export const DeleteButton = styled(ButtonBase)`
  width: 32px;
  height: 32px;
  background-color: #fee2e2;
  color: #ef4444;

  &:hover {
    background-color: #fecaca;
  }
`;

// 결제 카드 내용
export const PaymentCardContent = styled.div`
  padding: 1.25rem;
`;

// 결제 정보 항목
export const PaymentInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// 결제 정보 라벨
export const PaymentInfoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100px;
  font-size: 0.9rem;
  color: #666;

  svg {
    color: #4169e1;
  }
`;

// 결제 정보 값
export const PaymentInfoValue = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

// 강조 텍스트
export const HighlightText = styled.span`
  color: #4169e1;
  font-weight: 700;
  font-size: 1.1rem;
`;

// 수정 모드 컨테이너
export const EditModeContainer = styled.div`
  padding: 1.25rem;
`;

// 수정 모드 헤더
export const EditModeHeader = styled.div`
  margin-bottom: 1.25rem;
  text-align: center;
`;

// 수정 모드 제목
export const EditModeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4169e1;
`;

// 수정 모드 내용
export const EditModeContent = styled.div`
  margin-bottom: 1.5rem;
`;

// 수정 폼 그룹
export const EditFormGroup = styled.div`
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// 수정 폼 라벨
export const EditFormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;

  svg {
    color: #4169e1;
  }
`;

// 수정 입력 그룹
export const EditInputGroup = styled.div`
  display: flex;
  align-items: center;
`;

// 수정 입력 필드
export const EditInput = styled.input`
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

  &[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

// 수정 입력 접미사
export const EditInputSuffix = styled.span`
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #666;
`;

// 수정 모드 액션 버튼 그룹
export const EditModeActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

// 취소 버튼
export const CancelButton = styled(ButtonBase)`
  flex: 1;
  padding: 0.75rem;
  background-color: #f0f4ff;
  color: #4169e1;
  border: 1px solid #e0e7ff;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 0.5rem;

  &:hover {
    background-color: #e0e7ff;
  }
`;

// 저장 버튼
export const SaveButton = styled(ButtonBase)`
  flex: 1;
  padding: 0.75rem;
  background-color: #4169e1;
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 0.5rem;

  &:hover {
    background-color: #3157d1;
  }
`;

// 빈 상태 컨테이너
export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

// 빈 상태 아이콘
export const EmptyStateIcon = styled.div`
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite;
`;

// 빈 상태 제목
export const EmptyStateTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
`;

// 빈 상태 설명
export const EmptyStateDescription = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 400px;
  line-height: 1.5;
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

export const CardHeader = styled.div`
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

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem; /* 아래쪽 공간이 필요하면 사용 */
`;
