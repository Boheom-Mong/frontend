import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Signup from "./pages/signup/index";
import Mypage from "./pages/mypage/index";
import ProductDetail from "./pages/product/detail/index";
import ProductEnrollment from "./pages/product/enrollment/index";
import NotFound from "./NotFound";
import OAuth2RedirectHandler from "./pages/login/OAuth2RedirectHandler";

// 이유진
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

      // 카카오 OAuth 리다이렉트 핸들러 (보호 필요 없음)
      { path: "/login/oauth2/code/kakao", element: <OAuth2RedirectHandler /> },

      // 마이 페이지
      { path: "/mypage/*", element: <Mypage /> },

      // 보험 상세 페이지
      { path: "/product/:id", element: <ProductDetail /> },

      // 보험 가입 페이지
      { path: "/product/enrollment", element: <ProductEnrollment /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
