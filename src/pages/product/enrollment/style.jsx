import styled from "styled-components";

export const ApplyWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const ApplyHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ApplyTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ApplySubtitle = styled.h2`
  font-size: 1.2rem;
  color: #666;
`;

export const WarningSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff3cd;
  border-left: 5px solid #ffc107;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const WarningTextContainer = styled.div`
  margin-left: 1rem;
`;

export const WarningText = styled.p`
  color: #856404;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const InsuranceInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const InfoCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
`;

export const InfoIcon = styled.div`
  margin-right: 1rem;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

export const InfoValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const CoverageSection = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const CoverageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

export const CoverageTitle = styled.span`
  font-size: 1rem;
  color: #333;
`;

export const CoverageAmount = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

export const ConfirmSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ConfirmCheckbox = styled.input`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`;

export const ConfirmLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #dc3545;
  font-size: 1.2rem;
  margin-top: 2rem;
`;
