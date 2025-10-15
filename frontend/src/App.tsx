import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Auth/Login"


const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path="/login" element={<Login />} />

     </Routes>
    </div>
  )
}

export default App
