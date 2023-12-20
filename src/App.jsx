//npm i
//npm run dev
//install react extension pack
//rsc 


// import React from 'react';

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default App;

import React from 'react';
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>










      </div>
    </>
  );
}

export default App;
