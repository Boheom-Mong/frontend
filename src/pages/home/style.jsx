import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.div`
  text-align: center;
  color: #4169e1;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterGroup = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3157d1;
  }
`;

export const InsuranceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InsuranceCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CardHeader = styled.div`
  padding: 1rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompanyName = styled.span`
  font-weight: bold;
  color: #4169e1;
`;

export const CategoryTag = styled.span`
  background: #e7f5ff;
  color: #4169e1;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

export const CardBody = styled.div`
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const MonthlyFee = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #4169e1;
  margin-top: 1rem;
`;

export const CardFooter = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

export const DetailButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #4169e1;
  border-radius: 4px;
  background: white;
  color: #4169e1;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4169e1;
    color: white;
  }
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #4169e1;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #3157d1;
  }
`;
