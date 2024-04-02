import "./App.css";
import Footer from "./components/Footer";
import SidebarRight from "./components/SidebarRight";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SidebarRight />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
