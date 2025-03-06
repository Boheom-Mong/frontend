import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/index";
import Login from "./pages/login/kakao/index";
import Qr from "./pages/login/totp/qr";
import Totp from "./pages/login/totp/otpPage";
import Signup from "./pages/signup/index";
import Mypage from "./pages/mypage/index";
import Recommend from "./pages/recommend/index";
import ProductDetail from "./pages/product/detail/index";
import ProductEnrollment from "./pages/product/enrollment/index";
import NotFound from "./NotFound";
import OAuth2RedirectHandler from "./pages/login/kakao/OAuth2RedirectHandler";
import Payment from "./pages/payment/payment";
import SuccessPage from "./pages/payment/SuccessPage";
import FailPage from "./pages/payment/FailPage";
import CardRegistration from "./pages/payment/CardRegistration";
import AutoPaymentSetting from "./pages/payment/AutoPaymentSetting";
import AutoPaymentInfo from "./pages/mypage/AutoPaymentInfo"; 

//이유진
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 홈 페이지
      { path: "/", element: <Home /> },

      // 로그인 페이지
      { path: "/login", element: <Login /> },

      // 회원가입 페이지
      { path: "/signup", element: <Signup /> },

      // 2차인증 qr 페이지
      { path: "/otp/qr", element: <Qr /> },

      // 2차인증 otp 번호 입력 페이지
      { path: "/otp", element: <Totp /> },

      // 카카오 OAuth 리다이렉트 핸들러 (보호 필요 없음)
      { path: "/login/oauth2/code/kakao", element: <OAuth2RedirectHandler /> },

      // 마이페이지
      { path: "/mypage/*", element: <Mypage /> },
      
      // 보험 상세 페이지
      { path: "/product/:id", element: <ProductDetail /> },
      
      // 보험 가입 페이지
      { path: "/product/enrollment", element: <ProductEnrollment /> },
      
      // 결제 성공 페이지 
      { path: "/successPage", element: <SuccessPage /> },
      
      // 결제 실패 페이지 
      { path: "/failPage", element: <FailPage /> },

      // 결제 페이지
      { path: "/payment", element: <Payment /> },
      
      // 보험 추천 페이지
      { path: "/recommend", element: <Recommend /> },
      
      // 여기서 productId를 받아서 결제 진행
      { path: "/payment/:productId", element: <Payment /> },
      
      // 카드 등록 성공 후 이동할 페이지
      { path: "/cardRegistration", element: <CardRegistration /> },
      
      //자동 결제 페이지
      { path: "/autoPaymentSetting", element: <AutoPaymentSetting /> },

    ], 
    errorElement: <NotFound />,
  },
]);

export default router;
