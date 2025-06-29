// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
