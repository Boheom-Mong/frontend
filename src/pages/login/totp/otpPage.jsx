import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import API from "../../../store";
import { useAuthStore } from "../../../store/useAuthStore";
import { useNewCheckStore } from "../../../store/useNewCheckStore";

const OtpPage = () => {
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  // 신규 유저 체크 함수
  const { checkNewUser } = useNewCheckStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // (1) /api/totp/verify 로 OTP 코드 검증
      const res = await API.post("/otp/verify", { otpCode });
      // 응답 예: { accessToken, ... }
      const { accessToken } = res.data;

      // (2) 토큰 저장
      localStorage.setItem("access_token", accessToken);
      storeLogin(accessToken, null);

      // (3) 신규 유저인지 확인
      const isNew = await checkNewUser(); // GET /users/check -> true/false

      // (4) 분기 이동
      if (isNew) {
        // 신규 유저 => signup 페이지
        navigate("/signup");
      } else {
        // 기존 => 홈("/")
        navigate("/");
      }
    } catch (err) {
      alert("OTP 인증 실패: " + err.message);
    }
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
          Google Authenticator 앱에서 표시되는 <br /> 6자리 코드를 입력해주세요.
        </S.CardSubtitle>

        <form onSubmit={handleSubmit}>
          <S.OtpInput
            placeholder="6자리 OTP"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
          />
          <S.OtpButton type="submit">인증하기</S.OtpButton>
        </form>
      </S.Card>
    </S.Container>
  );
};

export default OtpPage;
