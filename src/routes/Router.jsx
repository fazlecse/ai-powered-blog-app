import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:id",
    element: <Blog />, 
  },
]);

export default router;
