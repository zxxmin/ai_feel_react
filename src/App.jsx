import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Login'
import EmotionPage from './pages/emotion'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<EmotionPage />} />
    </Routes>
  )
}

export default App
