import './App.css';
import Header from './components/HomepageComponents/Header';
import Navbar from './components/HomepageComponents/Navbar';
import About from './components/HomepageComponents/About';
import Education from './components/HomepageComponents/Education';
import Projects from './components/HomepageComponents/Projects';
import Contact from './components/HomepageComponents/Contact';
import Footer from './components/HomepageComponents/Footer';
import Login from './components/HomepageComponents/Login';
//admin components
import Admin from './components/AdminComponents/Admin';
//edit components
import EditAbout from './components/EditComponents/EditAbout';
import EditEducation from './components/EditComponents/EditEducation';
import EditProjects from './components/EditComponents/EditProjects';
import EditExperience from './components/EditComponents/EditExperience';

import {Route,Routes} from 'react-router-dom';
import Experience from './components/HomepageComponents/Experience';
import {Element} from 'react-scroll';

function App() {
  return (
    <div className="App">
      {/* navbar component*/}

      <Navbar />
      
      <Routes>
      
        <Route index path="/" element={<><Header /><About /><Education /><Projects /><Experience /><Contact /></>} />
        <Route index path="/login" element={<Login/>} />
        <Route index  path="/admin" element={<Admin/>} />
        <Route index  path="/edit/:id" element={<EditAbout/>} />

        <Route index  path="/editEducation/:id" element={<EditEducation />} />
        <Route index  path="/editProject/:id" element={<EditProjects />} />
        <Route index  path="/editExperience/:id" element={<EditExperience />} />




        {/* <Route component={Footer} /> */}
        <Route element={<Footer/>} />
      </Routes>
        <Footer />
    
      





    </div>
  );
}

export default App;
