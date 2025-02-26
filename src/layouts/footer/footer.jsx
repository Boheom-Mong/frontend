import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.ContentContainer>
        <S.LeftContent>
          <S.Text>BOHUEM MONG</S.Text>
          <S.TeamText>Team 남종혁, 이유진, 이지민, 장다은</S.TeamText>
          <S.CopyrightText>
            Copyright BohuemMong. All rights reserved
          </S.CopyrightText>
        </S.LeftContent>

        <S.LinksContainer>
          <S.LinkItem>이용약관</S.LinkItem>
          <S.LinkItem>개인정보처리방침</S.LinkItem>
          <S.LinkItem>서비스소개</S.LinkItem>
        </S.LinksContainer>
      </S.ContentContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
