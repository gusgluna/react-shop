import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassord from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery-password" element={<RecoveryPassord />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
