import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

export default router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <h1>404 not found</h1>,
  },
]);
