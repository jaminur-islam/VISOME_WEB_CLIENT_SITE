import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./component/Context/AuthProvider";
import Home from "./component/Home/Home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
