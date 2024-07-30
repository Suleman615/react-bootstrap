import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import FAQ from "./pages/FAQ"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App