
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import { Signuppage } from "./components/Signup";
import KnowAboutYou from "./components/KnowAboutYou";
import UserDetailsForm from "./components/GetDetails/Mannualy";
import MapComponent from "./components/Map/Map";
import Shopping from "./components/Shopping/Shopping";
import DoctorsList from "./components/Doctors/DoctorList";
import DoctorSchedulePage from "./components/Doctors/DoctorSchedulePage";

function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shopping" element={<Shopping />} />
          <Route path="/knowaboutyou" element={<KnowAboutYou />} />
          <Route path="/chatbot" element={<Chatbot />} />

          <Route path='/doctors_list' element={<DoctorsList />} />
          <Route path='/schedule/:id' element={<DoctorSchedulePage />} />

          <Route path='/map' element={<MapComponent />} />
          <Route path="/resumeform" element={<UserDetailsForm />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;