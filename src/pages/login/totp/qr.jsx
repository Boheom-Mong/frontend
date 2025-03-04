import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style"; // 스타일 경로
import API from "../../../store";

const QrPage = () => {
  const [qrUrl, setQrUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 실제 로직: /api/totp/qr 에 GET 요청 -> qrUrl 받음
    API.get("/otp/qr")
      .then((res) => {
        setQrUrl(res.data.qrUrl);
      })
      .catch((err) => {
        console.error("QR 요청 실패:", err);
      });
  }, []);

  const handleNext = () => {
    // 사용자 스캔 끝났다고 가정, OTP페이지로 이동
    navigate("/otp");
  };

  return (
    <S.Container>
      <S.WaveBackground />
      <S.BrandArea>
        <S.BrandLogo src="/img/logo.png" alt="Bohuem Mong logo" />
      </S.BrandArea>

      <S.Card>
        <S.CardTitle>구글 OTP 등록</S.CardTitle>
        <S.CardSubtitle>
          아래 QR 코드를 스캔해 <br /> Google Authenticator 앱에 등록하세요.
        </S.CardSubtitle>

        {qrUrl ? (
          <S.QrImage src={qrUrl} alt="QR Code" />
        ) : (
          <p>QR 코드를 불러오는 중...</p>
        )}

        <S.Description>
          스캔 완료 후 TOTP 코드를 이용해 <br /> 매번 로그인 시 2차 인증을
          진행합니다.
        </S.Description>

        <S.OtpButton onClick={handleNext} style={{ marginTop: "20px" }}>
          다음 단계 (OTP 입력)
        </S.OtpButton>
      </S.Card>
    </S.Container>
  );
};

export default QrPage;
