import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <Container>
        <Row>
          <Routes>
            <Route path="/" element={<></>}></Route>
            <Route path="/me" element={<ProfilePage />}></Route>
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
