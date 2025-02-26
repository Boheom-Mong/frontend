import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: rgb(239, 239, 239);
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LeftContent = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Text = styled.h1`
  font-size: 1.25rem;
  color: #3e61d7;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const TeamText = styled.p`
  font-size: 0.75rem;
  color: #777777;
  margin-bottom: 0.5rem;
`;

export const CopyrightText = styled.p`
  font-size: 0.75rem;
  color: #777777;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }
`;

export const LinkItem = styled.span`
  color: #2f2f2f;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.75rem;

  &:hover {
    text-decoration: underline;
  }
`;
