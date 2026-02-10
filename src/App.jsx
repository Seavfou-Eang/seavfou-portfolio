import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import ChatBot from './components/ChatBot'
import './index.css'
import './styles/animations.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  )
}

export default App
