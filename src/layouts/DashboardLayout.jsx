import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navber";

const DashboardLayout = () => {
  return (
    <div>

      <Navbar/>
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-500 p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:text-blue-600">My Courses</Link>
          <Link to="/dashboard/progress" className="hover:text-blue-600">Progress</Link>
          <Link to="/dashboard/profile" className="hover:text-blue-600">Profile</Link>
          <Link to="/logout" className="hover:text-red-600">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="grow p-8 bg-gray-300">
        <Outlet />
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default DashboardLayout;
