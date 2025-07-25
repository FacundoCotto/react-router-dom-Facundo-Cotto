// React Imports
import {Routes, Route} from "react-router-dom"

// Components Imports
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import NavBar from "./components/navBar"
import DashboardLayout from "./components/DashboardLayout"
import DashboardStats from "./components/DashboardStats"
import DashboardSettings from "./components/DashboardSettings"

function App() {
  return (
  <div className="bg-slate-900 text-white min-h-screen p-10">
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route index element={<DashboardStats />}></Route>
        <Route path="settings" element={<DashboardSettings />}></Route>
      </Route>
    </Routes>
  </div>
  )
}

export default App
