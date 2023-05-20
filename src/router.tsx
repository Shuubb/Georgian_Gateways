import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/!layouts/default-layout/default-layout";
import HomePage from "./pages/home-page/home-page";

export default createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <Navigate to="/" />,
  },
]);
