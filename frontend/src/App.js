
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
import Room from "./components/Doctors/Room";
import AboutUsPage from './components/About/About';
import ApplicationOptionsPage from './components/Application/Application';
import DoctorSignupPage from "./components/Application/DoctorSignupPage";
import FriendSignupPage from "./components/Application/FriendSignupPage";
import Yoga from "./components/Yog/Yoga";
import Music from "./components/music/music";


function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* shopping */}
          <Route path="/shopping" element={<Shopping />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/yoga' element={<Yoga />} />

          {/* Application */}
          <Route path='/application_option' element={<ApplicationOptionsPage />} />
          <Route path="/doctor-signup" element={<DoctorSignupPage />} />
          <Route path="/friend-signup" element={<FriendSignupPage />} />

          <Route path="/knowaboutyou" element={<KnowAboutYou />} />
          <Route path="/chatbot" element={<Chatbot />} />

           
          {/* doctors */}
          <Route path='/doctors_list' element={<DoctorsList />} />
          <Route path='/schedule/:id' element={<DoctorSchedulePage />} />
          <Route path='/schedule/:id/room' element={<Room />} />

            {/* Music */}
            <Route path='/music' element={<Music />} />

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