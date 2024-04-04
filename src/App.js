import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
