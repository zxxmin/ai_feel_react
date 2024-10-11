import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Login'
import EmotionPage from './pages/emotion'
import StudentPage from './pages/Student'
import InterestStudentPage from './pages/InterestStudent'
import HomeTeaPage from './pages/HomeTea'
import TeacherPage from './pages/Teacher'
import ClassPage from './pages/Class'
import GradePage from './pages/Grade'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/emo" element={<EmotionPage />} />
      <Route path="/stu" element={<StudentPage />} />
      <Route path="/int" element={<InterestStudentPage />} />
      <Route path="/hmt" element={<HomeTeaPage />} />
      <Route path="/tea" element={<TeacherPage />} />
      <Route path="/grd" element={<GradePage />} />
      <Route path="/cls" element={<ClassPage />} />
    </Routes>
  )
}

export default App
