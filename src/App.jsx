import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import Dashboard from './Pages/Dashboard'
import Cart from './Pages/Cart'


function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/About" element={<AboutUs/>}/>
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/dashboard" element= {<Dashboard/>} />
      <Route path = "/cart"  element = {<Cart/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
