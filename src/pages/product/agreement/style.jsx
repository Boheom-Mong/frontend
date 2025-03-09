import styled from "styled-components";

export const AgreementContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AgreementHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const AgreementTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const AgreementSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const AgreementContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const AllCheckWrapper = styled.div`
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

export const AllCheckText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

export const Section = styled.section`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  background-color: #f8f9fa;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const SectionContent = styled.div`
  padding: 1.5rem;
  background-color: #fff;
`;

export const SectionSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0 0.5rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const SectionText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1rem;
`;

export const AgreementItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

export const AgreementItemTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 0.75rem;

  span {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.checked ? "#4169e1" : "#fff")};
  border: 1px solid ${(props) => (props.checked ? "#4169e1" : "#ccc")};
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
`;

export const CancelButton = styled(Button)`
  background-color: #f8f9fa;
  color: #555;
  border: 1px solid #ddd;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #4169e1;
  color: white;
  border: none;

  &:hover {
    background-color: #3157d1;
  }
`;
