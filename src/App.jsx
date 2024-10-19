import React, { useEffect } from "react";
import Navbar from "./components/Resources/resNav";
import Footer from "./components/footer/footer";
import Mouse from "./components/home/mouse/mouse";
import SmoothScroll from "./components/animation/smoothScroll";
import Begginer from "./components/Resources/Bigginer"
import Intermediate from "./components/Resources/intermidiate"
import Advance from "./components/Resources/Advance"
const App = () => {
  return (
    <div>
      <SmoothScroll />
      <Mouse />
      <Navbar />
      {/* <Begginer /> */}
      {/* <Intermediate /> */}
      <Advance />
      <Footer />
    </div>
  );
};

export default App;
