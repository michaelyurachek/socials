// Base import
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Socials from "./pages/Socials";
import NotFound from "./pages/NotFound";

// CSS
import "./styles/base.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Socials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App