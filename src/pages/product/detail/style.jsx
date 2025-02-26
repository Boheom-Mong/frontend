import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

export const CompanyName = styled.div`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const CategoryTag = styled.span`
  background: #e7f5ff;
  color: #4169e1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const MainInfo = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const MonthlyFee = styled.div`
  span {
    display: block;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  strong {
    font-size: 2rem;
    color: #4169e1;
  }
`;

export const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const CoverageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const CoverageCard = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 0.875rem;
  }
`;

export const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4169e1;
  margin-bottom: 1rem;
`;

export const FeatureList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;

  li {
    color: #666;
    margin-bottom: 0.5rem;
  }
`;

export const RequirementList = styled.ul`
  list-style: none;

  li {
    color: #666;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4169e1;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
  background: #4169e1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3157d1;
  }
`;

export const ConsultButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: #4169e1;
  background: white;
  border: 1px solid #4169e1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #4169e1;
    color: white;
  }
`;
