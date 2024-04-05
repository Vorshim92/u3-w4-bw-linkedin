import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./components/Login";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import { useSelector } from "react-redux";
import NavBarComponent from "./components/NavBarComponent";
function App() {
  const loggedIn = useSelector((state) => state.login.loginData);

  return (
    <BrowserRouter>
      {loggedIn && <NavBarComponent />}
      <Container>
        <Row>
          <Routes>
            <Route path="/login" element={loggedIn ? <Navigate to="/home" /> : <Login />} />
            <Route path="/" element={loggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/me" element={loggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
          </Routes>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
