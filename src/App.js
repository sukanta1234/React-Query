import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Component, Suspense, lazy } from "react";
import Footer from "./Pages/Layout/Footer/Footer";
import { toast } from "react-toastify";
import BlogDetails from "./Pages/CMS/BlogDetails/BlogDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkToken } from "./Toolkit/authSlice";

const Login = lazy(() => import("./Pages/Auth/Login/Login"));
const Registration = lazy(() =>
  import("./Pages/Auth/Registration/Registration")
);
const Header = lazy(() => import("./Pages/Layout/Header/Header"));
const Update = lazy(() => import("./Pages/Auth/Update/Update"));
const Home = lazy(() => import("./Pages/CMS/Home/Home"));
const About = lazy(() => import("./Pages/CMS/About/About"));
const Course = lazy(() => import("./Pages/CMS/Course/Course"));
const Contact = lazy(() => import("./Pages/CMS/Contact/Contact"));

const Blog = lazy(() => import("./Pages/CMS/Blog/Blog"));

function Private({ children }) {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return token != null || token != undefined ? (
    children
  ) : (
    <>
      <Navigate to={"/"} />
      {toast.error("login First")}
    </>
  );
}

const publicRoutesName = [
  { path: "/login", Component: <Login /> },
  {
    path: "/registration",
    Component: <Registration />,
  },
 
  {
    path: "/",
    Component: <Home />,
  },
];
const privateRoutesName = [
  {
    path: "/about",
    Component: <About />,
  },
  {
    path: "/Contact",
    Component: <Contact />,
  },
  {
    path: "/Course",
    Component: <Course />,
  },
  {
    path: "/Blog",
    Component: <Blog />,
  },
  {
    path:"/Blog/:id",
    Component:<BlogDetails/>
  }
  ,
  {
    path: "/updata",
    Component: <Update />,
  }
];

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(checkToken())
  },[dispatch])
  return (
    <Suspense fallback={<h1>Loading......</h1>}>
      <Router>
        <Header />
        <Routes>
          {publicRoutesName.map((item) => (
            <Route path={item.path} element={item.Component} />
          ))}
          {privateRoutesName.map((item) => (
            <Route
              path={item.path}
              element={<Private>{item.Component}</Private>}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
