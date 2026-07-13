
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import { useEffect, useState } from 'react'
import GoalsPage from './pages/GoalsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkillsPage from './pages/SkillsPage'
import ProgessPage from './pages/ProgessPage'
import TasksPage from './pages/TasksPage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './features/auth/components/Login'
import RegisterPage from './features/auth/components/Register';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [goals, setGoals] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={
            <ProtectedRoute>
              <DashboardPage 
               targets={goals}
              />
          </ProtectedRoute>
          
          } />
          <Route
            path='goals'
            element={
            <ProtectedRoute>
              <GoalsPage goals={goals} setGoals={setGoals} />
            </ProtectedRoute>
            }
          />
          <Route
            path='skills'
            element={
            <ProtectedRoute>
              <SkillsPage />
            </ProtectedRoute> 
          }
          />
          <Route
            path='progress'
            element={
            <ProtectedRoute>
              <ProgessPage />
            </ProtectedRoute>
            }
          />
          <Route
            path='tasks'
            element={
            <ProtectedRoute>
              <TasksPage />
            </ProtectedRoute>
            }
          />
          <Route
            path='settings' 
            element={<SettingsPage />}
          />
          <Route path='*' element={<DashboardPage />} />
        </Route>
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='register'
            element={<RegisterPage />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App
