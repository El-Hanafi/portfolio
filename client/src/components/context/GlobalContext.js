import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [about, setAbout] = useState([]);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] =useState([]);
    const [projects, setProjects] =useState([]);

    // fetching data
    const fetchData = async() => {
        //fetching about
        const res1 = await axios.get('/about');
        console.log(res1.data);
        setAbout(res1.data);

        //fetching education
        const res2 = await axios.get(`/education`)
        setEducation(res2.data);

        //fetching experience
        const res3 = await axios.get(`/experience`)
        setExperience(res3.data);

        //fetching projects
        const res4 = await axios.get(`/project`)
        setProjects(res4.data);
    }

    useEffect(() => {
      

    try {
        fetchData();
    } catch (error) {
        console.log(error);
    }
    }, [])
    
    const state = {
        about: [about,setAbout],
        education: [education, setEducation],
        experience: [experience, setExperience],
        projects: [projects, setProjects]
    }
    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
}