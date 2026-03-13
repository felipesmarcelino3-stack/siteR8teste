import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Navbar from "./components/Navbar"
import "./components/Navbar.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </>
  )
}

export default App