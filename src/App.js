import React, { useState, useEffect } from "react";
import "./App.css";

import { Main } from "./containers/Main/Main";
import { FallbackWidthPage } from "./containers/FallbackWidthPage/FallbackWidthPage";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1000);
  console.log(window.innerWidth);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">{isDesktop ? <Main /> : <FallbackWidthPage />}</div>
  );
}

export default App;
