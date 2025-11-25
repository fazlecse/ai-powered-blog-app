import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router";
import Blog from "../pages/Blog";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/AddBlog";
import ListBlog from "../pages/admin/ListBlog";
import Comments from "../pages/admin/Comments";
import Login from "../components/admin/Login";
import 'quill/dist/quill.snow.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    path: "/admin",
    element: true ? <AdminLayout /> : <Login />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "listBlog",
        element: <ListBlog />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);

export default router;
