import Header from "../Header/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
