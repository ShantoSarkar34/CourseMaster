import Footer from "../components/Footer";
import Navbar from "../components/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
