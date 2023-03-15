import React from "react";
import FooterXurshid from "./components/Xurshid/FooterXurshid/FooterXurshid";
import HeaderXurshid from "./components/Xurshid/HeaderXurshid/HeaderXurshid";
import NavbarRouter from "./components/Xurshid/NavbarXurshid/NavbarRouterXurshid";
import Section1Xurshid from "./components/Xurshid/Section1Xurshid/Section1Xurshid";
import Section2Xurshid from "./components/Xurshid/Section2Xurshid/Section2Xurshid";

function App() {
  return (
    <>
      <NavbarRouter />
      <HeaderXurshid />
      <Section1Xurshid />
      <Section2Xurshid />
      <FooterXurshid />
    </>
  );
}

export default App;
