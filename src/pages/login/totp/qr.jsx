import { useEffect, useState } from "react";
import * as S from "./style";

const QrPage = () => {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    // 실제론 /api/totp/qr 호출 등 서버에서 QR URL을 가져오는 로직
    // axios.get("/api/totp/qr").then(res => setQrUrl(res.data.qrUrl));
    // 여기서는 임시 예시
    setQrUrl("https://via.placeholder.com/200x200?text=QR");
  }, []);

  return (
    <S.Container>
      {/* 웨이브 배경 */}
      <S.WaveBackground />

      {/* 브랜드 영역 */}
      <S.BrandArea>
        <S.BrandLogo src="/img/logo.png" alt="Bohuem Mong logo" />
      </S.BrandArea>

      {/* 카드 영역 */}
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
      </S.Card>
    </S.Container>
  );
};

export default QrPage;
