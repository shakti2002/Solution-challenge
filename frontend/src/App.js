import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import { Signuppage } from "./components/Signup";


function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;