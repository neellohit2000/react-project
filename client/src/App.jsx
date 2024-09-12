import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import About from "./pages/About"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PrivateRouter from "./components/PrivateRouter"
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
export default function App() {
  return<BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path='/listing/:listingId' element={<Listing />} />
      <Route  element={<PrivateRouter />} >
      <Route path="/profile" element={<Profile />} />
      <Route path='/create-listing' element={<CreateListing />} />
      <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Route>
    </Routes>
  </BrowserRouter>
}
