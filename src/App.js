import React from 'react';
import Header from "./main/header";
import Main from "./main/main";
import Footer from "./main/footer";
import "../src/css/index.scss";

const App = () => {
  return (
    <div className="pro">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
