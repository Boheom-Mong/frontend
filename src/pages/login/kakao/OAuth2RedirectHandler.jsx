import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import * as S from "./style";

function OAuth2RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const { storeLogin, fetchUserInfo } = useAuthStore();

  useEffect(() => {
    const handleLogin = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get("token"); // URL에서 'token' 파라미터 추출

      if (token) {
        // 로그인 상태 업데이트
        storeLogin(token, null); // isLoggedIn : true 설정

        // 유저 정보 가져오기
        await fetchUserInfo();

        navigate("/");
      }
    };

    handleLogin();
  }, [location, navigate]);

  return <S.CardSubtitle>카카오 로그인 중...</S.CardSubtitle>;
}

export default OAuth2RedirectHandler;
