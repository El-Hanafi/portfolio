import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [about, setAbout] = useState([]);

    // fetching data
    const fetchData = async() => {
        const res1 = await axios.get('/about');
        console.log(res1.data);
        setAbout(res1.data);
    }

    useEffect(() => {
      

    try {
        fetchData();
    } catch (error) {
        console.log(error);
    }
    }, [])
    
    const state = {
        about:[about,setAbout]
    }

    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>);
}