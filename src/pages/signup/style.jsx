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
  height: -webkit-fill-available;
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
  max-width: 1000px;
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

export const Description = styled.p`
  font-size: 13px;
  color: #999;
  margin-top: 16px;
  line-height: 1.4;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 20px;
`;

export const TwoColumnWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Column = styled.div`
  flex: 1; /* 두 컬럼을 균등 분배 */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.section`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const BMIDisplay = styled.div`
  padding: 8px;
  background: #f2f3f5;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ChronicDiseaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
`;

export const CheckboxSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  align-self: center;
  padding: 12px 24px;
  background: #4169e1;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`;

export const ErrorMsg = styled.div`
  text-align: center;
  color: red;
  margin-bottom: 1rem;
`;
