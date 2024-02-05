import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import Browse from "./Routes/Browse";
import Create from "./Routes/Create";
import Details from "./Routes/Details";

export default createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "",
        element: <Browse />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
