// React Imports
import {Routes, Route} from "react-router-dom"

// Components Imports
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ProfilePage from "./components/ProfilePage"
import NavBar from "./components/navBar"

function App() {
  return (
  <div className="bg-slate-900 text-white min-h-screen p-10">
    <NavBar/>
    {/* Aqui esta la navegacion */}
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/profile/:id' element={<ProfilePage/>} />
    </Routes>
  </div>
  )
}

export default App
