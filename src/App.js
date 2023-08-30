import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import shopdata from "./Data/Data";

function App() {
  return (
    <div>
      <Home welcomeimage = {shopdata.gallery}/>
      <About/>
      <Gallery />
      <Contact/>
      <NavBar/>
    
    </div>
  );
}

export default App;
