import {createContext, useEffect, useState} from 'react';
export const DarkModeContext = createContext(false);
export const DarkModeContextProvider = ({children}) => {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : false;
    }
    const [theme, setTheme] = useState(getTheme());
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    return <DarkModeContext.Provider value={ [theme, setTheme]}>{children}</DarkModeContext.Provider>
}
