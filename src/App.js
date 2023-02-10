import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './home';
import Blog from './blog';
import About from './about';
import Product from './product';
import Header from "./component/Layout/Header";
import { ProtectedRoute, AuthCheckRoute } from "./component/Routes/ProtectedRoute";
import Login from "./login";
import SignIn from "./signIn";
import { useDispatch } from 'react-redux';
import { authTokenCheck } from "./state/Action/AuthAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authTokenCheck());
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthCheckRoute><Login /></AuthCheckRoute>} />
          <Route path="/signIn" element={<AuthCheckRoute><SignIn /></AuthCheckRoute>} />
          <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;