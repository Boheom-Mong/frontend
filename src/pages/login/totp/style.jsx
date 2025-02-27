import styled from "styled-components";

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
  height: 30vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BrandLogo = styled.img`
  width: 120px;
`;

export const Card = styled.div`
  position: relative;
  z-index: 3;
  margin-top: -6vh;
  background: #fff;
  width: 90%;
  max-width: 380px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 32px 24px;
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
  font-size: 20px;
  color: #333;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const QrImage = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #999;
  margin-top: 16px;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OtpInput = styled.input`
  width: 80%;
  max-width: 200px;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const OtpButton = styled.button`
  background-color: #6a86ec;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;
