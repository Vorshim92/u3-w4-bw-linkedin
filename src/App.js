import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import { Container, Row } from "react-bootstrap";
import NavBarComponent from "./components/NavBarComponent";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Container>
        <Row>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/me" element={<ProfilePage />}></Route>
          </Routes>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
