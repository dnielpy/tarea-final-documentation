import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Installation from './pages/Installation'
import Architecture from './pages/Architecture'
import Usage from './pages/Usage'
import API from './pages/API'
import Troubleshooting from './pages/Troubleshooting'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/api" element={<API />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App