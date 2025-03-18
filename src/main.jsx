import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/nasi-udukBude",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
