import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px 250px;
  background-color: rgb(239, 239, 239);
  text-align: left;
`;

export const Text = styled.h1`
  font-size: 20px;
  color: #3e61d7;
  margin: 20px 0px;
  font-weight: bold;
`;

export const TeamText = styled.p`
  font-size: 12px;
  color: #777777;
  margin-bottom: 5px;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #777777;
`;

// 오른쪽 링크 컨테이너
export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  width: 100%;
  font-size: 12px;
`;

// 개별 링크 항목 스타일
export const LinkItem = styled.span`
  color: #2f2f2f;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
