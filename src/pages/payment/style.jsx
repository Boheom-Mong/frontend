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
