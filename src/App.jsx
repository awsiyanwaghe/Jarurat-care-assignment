import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Patients from './pages/Patients'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'patients':
        return <Patients />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-6">
        {renderPage()}
      </main>
    </div>
  )
}

export default App