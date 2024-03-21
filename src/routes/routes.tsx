import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Error from "@/error/Error";
import AboutUs from "@/pages/AboutUs";
import Community from "@/pages/Community";
import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Supplies from "@/pages/Supplies";
import SupplyDetails from "@/pages/SupplyDetails";
import Volunteer from "@/pages/Volunteer";
import AllSupplies from "@/pages/dashboard/AllSupplies";
import CreateSupply from "@/pages/dashboard/CreateSupply";
import CreateTestimonial from "@/pages/dashboard/CreateTestimonial";
import Dashboard from "@/pages/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <Supplies />,
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetails />,
        loader: ({ params }) =>
          fetch(
            `https://l2-b2-frontend-path-assignment-6-server-starter-pack-snowy.vercel.app/api/v1/supply/${params.id}`
          ),
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/create-supply",
        element: <CreateSupply />,
      },
      {
        path: "/dashboard/supplies",
        element: <AllSupplies />,
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
