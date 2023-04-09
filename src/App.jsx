import { Blog, Possibility, Features, WhatGPT3, Header } from "./sections";
import { CTA, Brand, Navbar, Footer } from "./components";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
