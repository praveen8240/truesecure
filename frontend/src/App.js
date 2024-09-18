import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthPage from "./components/Auth";
import Landing from "./components/Landing";
import ChatBox from "./components/ChatBox";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthStatus } from "./redux/authSlice";
import SideNav from "./sidenav/SideNav";
import TestLink from "./components/user/TestLink";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing setIsLogin={setIsLogin} />} />
        <Route
          path="/auth"
          element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route path="/chat" element={<ChatBox />} />
        {isAuthenticated &&             <>        <Route
              path="/dashboard"
              element={
                <>
                  {<SideNav />}

                  <Dashboard />
                </>
              }
            />
            <Route
              path="/user/testyourlink"
              element={
                <>
                  {<SideNav />}

                  <TestLink />
                </>
              }
            />
            </>
            }
        <Route path="*" element={<NotFound />} />


      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
