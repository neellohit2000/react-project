import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PrivateRouter from "./components/PrivateRouter"

export default function App() {
  return<BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route  element={<PrivateRouter />} >
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
}
