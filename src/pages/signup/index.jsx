import * as S from "./style";
import HealthInfo from "./healthInfo";

const Signup = () => {
  return (
    <S.Container>
      <S.WaveBackground />
      <S.BrandArea>
        <S.BrandLogo src="/img/logo.png" alt="Bohuem Mong logo" />
      </S.BrandArea>

      <S.Card>
        <S.CardTitle>추가 정보 입력</S.CardTitle>
        <S.CardSubtitle>
          아래 추가 정보를 입력해 <br /> 나에게 꼭 맞는 보험을 추천 받으세요.
        </S.CardSubtitle>

        <HealthInfo />

        <S.Description>
          해당 정보는 마이페이지에서 수정 가능합니다.
        </S.Description>
      </S.Card>
      <S.BrandArea></S.BrandArea>
    </S.Container>
  );
};

export default Signup;
