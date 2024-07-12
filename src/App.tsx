import React from "react";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Social from "./pages/Social.tsx";
import Professionalism from "./pages/Professionalism.tsx";
import Service from "./pages/Service.tsx";
import Apply from "./pages/Apply.tsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import UnderConstruction from "./pages/UnderConstruction.tsx";

import Layout from "./components/Layout.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import HamburgerMenu from "./components/HamburgerMenu.tsx";

{
  /*
<Home/>
<About/>
<Social/>
<Professionalism/>
<Service/>
<Apply/>
*/
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <Home></Home> }></Route>
            <Route path = "/login" element = { <Login></Login> } ></Route>
            <Route path = "/signup" element = { <Signup></Signup> } ></Route>
            <Route path = "/profile" element = { <Profile></Profile> }></Route>
            <Route path = "/about" element = { <About></About> }></Route>
            <Route path = "/social" element = { <Social></Social> }></Route>
            <Route path = "/professionalism" element = { <Professionalism></Professionalism> }></Route>
            <Route path = "/service" element = { <Service></Service> }></Route>
            <Route path = "/apply" element = { <Apply></Apply> }></Route>
            <Route path = "/under-construction" element = { <UnderConstruction></UnderConstruction> }></Route>
            <Route path = "/apply" element = { <Apply></Apply> }></Route>
          
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App