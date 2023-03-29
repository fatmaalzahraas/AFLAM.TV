import { useContext } from 'react';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';
const RootLayout = () => {
    const [theme] = useContext(DarkModeContext);
    return (
        <div className={theme ? 'dark' : ''}>
             <Navbar />
             <Outlet />
        </div>
    )
}
export default RootLayout;