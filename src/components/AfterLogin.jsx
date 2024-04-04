import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import { Container, Row } from "react-bootstrap";
import NavBarComponent from "./components/NavBarComponent";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/Home";
import Chat from "./components/Chat";
function PostLogin() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Chat></Chat>
      <Container>
        <Row>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/me" element={<ProfilePage />}></Route>
          </Routes>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default PostLogin;
