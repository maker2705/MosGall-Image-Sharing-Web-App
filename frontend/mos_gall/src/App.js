import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

import Home from "./container/Home";
import Login from "./components/Login";

function App() {
  const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN; // Replace with your actual client ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
