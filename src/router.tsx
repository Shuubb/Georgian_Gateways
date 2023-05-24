import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/!layouts/default-layout/default-layout";
import HomePage from "./pages/home/home";
import Admin from "./pages/admin/admin";

export default createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
    errorElement: <Navigate to="/" />,
  },
]);
