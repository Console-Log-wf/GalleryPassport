/* Layout.jsx: 모든 페이지의 공통 틀 - 맨 위에 헤더, 그 아래에 현재 페이지(Outlet)를 보여줌 */

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
  <>
    <Header />
    {/* Outlet: 주소에 맞는 페이지가 이 자리에 들어옴 */}
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
