import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AuthPage from "./components/Auth";
import Landing from "./components/Landing";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing setIsLogin={setIsLogin} />} />
        <Route
          path="/auth"
          element={<AuthPage isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
