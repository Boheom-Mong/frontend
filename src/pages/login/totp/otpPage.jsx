import { useState } from "react";
import * as S from "./style";

const OtpPage = () => {
  const [otpCode, setOtpCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제론 /api/totp/verify 등으로 otpCode 보내 검증
    // axios.post("/api/totp/verify", { otpCode })
    //   .then(res => { // 토큰발급
    //     // res.data.accessToken, etc
    //   })
    //   .catch(err => {
    //     alert("OTP 코드가 잘못되었습니다!");
    //   });
  };

  return (
    <S.Container>
      <S.WaveBackground />
      <S.BrandArea>
        <S.BrandLogo src="/img/logo.png" alt="Bohuem Mong logo" />
      </S.BrandArea>

      <S.Card>
        <S.CardTitle>2차 인증</S.CardTitle>
        <S.CardSubtitle>
          Google Authenticator에서 표시되는
          <br /> 6자리 코드를 입력해주세요.
        </S.CardSubtitle>

        <S.Form onSubmit={handleSubmit}>
          <S.OtpInput
            placeholder="6자리 코드"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            maxLength={6}
          />
          <S.OtpButton type="submit">인증하기</S.OtpButton>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default OtpPage;
