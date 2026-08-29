import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CollectionPage from './pages/CollectionPage'
import CraftPage from './pages/CraftPage'
import JournalPage from './pages/JournalPage'
import EnquirePage from './pages/EnquirePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/craft" element={<CraftPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/enquire" element={<EnquirePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
