import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Components/Home.jsx";
import Catagory from "./pages/Home/Catagory/Catagory";
import NewsLayout from "./Layout/NewsLayout";
import News from "./pages/News";
import AuthProvider from "./providers/AuthProvider";
import LoginLayout from "./Layout/LoginLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import PrivateRoute from "./Routes/PrivateRoute";
import Terms from "./Components/Terms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/catagory/0'></Navigate>


      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      }
    ]

  },
  {
    path: "catagory",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(`https://the-news-site-server-mnahsanofficial.vercel.app/catagories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://the-news-site-server-mnahsanofficial.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
