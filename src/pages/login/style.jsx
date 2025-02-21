import styled from "styled-components";

// 전체 화면 래퍼
export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: #f5f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const WaveBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgb(254, 254, 254) 0%,
    rgb(216, 226, 250) 100%
  );

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  z-index: 1;
`;

export const BrandArea = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BrandLogo = styled.img`
  width: 120px;
`;

export const BrandTitle = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const LoginCard = styled.div`
  position: relative;
  z-index: 3; /* 웨이브와 브랜드 영역보다 앞에 오도록 */
  margin-top: -10vh;

  background: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 40px 30px;
  text-align: center;

  animation: floatIn 0.7s ease forwards;

  @keyframes floatIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const CardSubtitle = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 32px;
`;

/* ===============================
   카카오 버튼
=============================== */
export const KakaoButton = styled.button`
  background-color: #fee500;
  color: #381e1f;
  border: none;
  border-radius: 999px; /* 완전 둥근 버튼 */
  padding: 14px 20px;
  width: 100%;
  max-width: 280px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const TermsText = styled.p`
  margin-top: 20px;
  font-size: 13px;
  color: #999;
  line-height: 1.4;
`;
