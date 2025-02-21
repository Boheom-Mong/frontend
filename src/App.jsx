import GlobalStyle from "./style/globalStyle";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./layouts/nav/nav";
import Footer from "./layouts/footer/footer";

// 전체 페이지 스타일
const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
`;

const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.$hidepage ? "0 0" : "0 var(--dpadding)")};
`;

const Layout = () => {
  const location = useLocation();

  // 특정 경로에서는 Nav와 Footer를 숨기고 싶을 때
  const hidepage = ["/login", "/signup"].includes(location.pathname);

  return (
    <BackGroundColor>
      <Wrapper $hidepage={hidepage}>
        {!hidepage && <Nav />}
        <Outlet />
      </Wrapper>
      {!hidepage && <Footer />}
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
