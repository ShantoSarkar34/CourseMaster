import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import MainHome from "../page/MainHome"
import CourseDetails from "../page/CourseDetails"
import Login from "../page/Login"
import Register from "../page/Register"
import StudentDashboard from "../page/StudentDashboard"
import EnrolledCourseView from "../page/EnrolledCourseView"
import AdminDashboard from "../page/AdminDashboard"
import ErrorPage from "../components/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainHome/> },
      { path: "/course/:id", element: <CourseDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <StudentDashboard /> },
      { path: "view/:courseId", element: <EnrolledCourseView /> },
    ],
  },

  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <AdminDashboard /> },
    ],
  },
]);

export default router;
