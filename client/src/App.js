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


function App() {
  return (
    <div className="App">
      {/* navbar component*/}

      <Navbar />
      <Routes>
        <Route exact  path="/" element={<Header/>} />

        <Route exact  path="/" element={<About/>} />

        <Route exact  path="/" element={<Education/>} />

        <Route exact  path="/" element={<Projects/>} />

        <Route exact  path="/" element={<Experience/>}/>

        <Route exact  path="/" element={<Contact/>}/>



        <Route exact  path="/login" element={<Login/>} />
        <Route exact  path="/admin" element={<Admin/>} />
        <Route exact  path="/edit/:id" element={<Education/>} />

        <Route exact  path="/editEducation/:id" element={<EditEducation/>} />
        <Route exact  path="/editProject/:id" element={<EditProjects/>} />
        <Route exact  path="/editExperience/:id" element={<EditExperience/>} />
      </Routes>
        
        
        {/* <Route component={Footer} /> */}

  
      





    </div>
  );
}

export default App;
