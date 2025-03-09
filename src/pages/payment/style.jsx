import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const BoxSection = styled.div`
  margin-bottom: 20px;
`;

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

export const PaymentButton = styled.button`
  background-color: #0064ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 20px;
  cursor: pointer;
  margin-left: 30px;

  &:hover:enabled {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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

export const ContentSection = styled.div`
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

export const CoverageCard = styled.div`
  border-radius: 12px;
  padding: 0rem 1.5rem;
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
  color: #555;
  padding: 0rem 2rem;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background: #4169e1;
  margin-left: 1.5rem;
  font-weight: bold;
  font-size: 1.1rem;

  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #3157d1;
  }
`;

export const RegisterButton = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 5px;
  background: #4169e1;
  font-weight: bold;
  font-size: 0.8rem;

  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #3157d1;
  }
`;
