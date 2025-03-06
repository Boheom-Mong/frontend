import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4169e1;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const AnalysisSection = styled.section`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const AnalysisContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const UserName = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const AnalysisText = styled.p`
  white-space: pre-wrap;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
`;

export const RiskFactorTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

export const RiskFactorTag = styled.span`
  background-color: #e7f5ff;
  color: #4169e1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(65, 105, 225, 0.2);
  transition: all 0.2s ease;
  border: 1px solid rgba(65, 105, 225, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(65, 105, 225, 0.3);
    background-color: #d6ebff;
  }
`

export const RecommendationSection = styled.section`
  margin-bottom: 3rem;
`;

export const RecommendationHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4169e1;
  display: inline-block;
`;

export const ProductList = styled.div`
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

export const LoginMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 2rem;

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 2rem;

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;
