import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const PageLayout = () => {
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
