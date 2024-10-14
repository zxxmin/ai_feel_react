import {Route, Routes} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/Login'
import EmotionPage from './pages/emotion.jsx';
import StudentPage from './pages/Student'
import InterestStudentPage from './pages/InterestStudent'
import HomeTeaPage from './pages/HomeTea'
import TeacherPage from './pages/Teacher'
import ClassPage from './pages/Class'
import GradePage from './pages/Grade'
import DashboardLayout from "./components/DashboardLayout.jsx";
import Error from './pages/Error.jsx';

function App() {

  return (
      <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/emo" element={<EmotionPage />} />
            <Route path="/stu" element={<StudentPage />} />
            <Route path="/int" element={<InterestStudentPage />} />
            <Route path="/hmt" element={<HomeTeaPage />} />
            <Route path="/tea" element={<TeacherPage />} />
            <Route path="/setting/grd" element={<GradePage />} />
            <Route path="/setting/cls" element={<ClassPage />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
      </Routes>
  )
}

export default App
