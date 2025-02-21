import * as S from "./style";

const Login = () => {
  const handleKakaoClick = () => {
    window.location.href = import.meta.env.VITE_APP_KAKAO_URL;
  };

  return (
    <S.Container>
      {/* 웨이브 배경 영역 */}
      <S.WaveBackground />

      {/* 로고+브랜드 이름 (웨이브 위에 표시) */}
      <S.BrandArea>
        <S.BrandLogo src="/img/logo.png" alt="Bohuem Mong logo" />
      </S.BrandArea>

      {/* 로그인 카드(중앙) */}
      <S.LoginCard>
        <S.CardTitle>보험몽 시작하기</S.CardTitle>
        <S.CardSubtitle>
          다양한 보험 상품을 비교하고 <br />
          가입을 미리 경험해보세요.
        </S.CardSubtitle>

        <S.KakaoButton onClick={handleKakaoClick}>
          카카오 계정으로 시작하기
        </S.KakaoButton>

        <S.TermsText>
          서비스 이용 시 보험몽의 <br />
          이용약관과 개인정보처리방침에 동의하게 됩니다.
        </S.TermsText>
      </S.LoginCard>
    </S.Container>
  );
};

export default Login;
