import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

const PageLayout = () => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div>
      <Header />
      <main className="w-full h-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
