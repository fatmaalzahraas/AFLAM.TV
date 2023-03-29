import React , {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {RiUserLine, RiMoonClearLine, RiSearchLine} from 'react-icons/ri';
import {MdFavorite, MdOutlineLightMode} from 'react-icons/md';
import { DarkModeContext } from '../context/darkModeContext';
const Navbar = () => {
  const [theme, setTheme] = useContext(DarkModeContext);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-full bg-lightColor dark:bg-darkBlue dark:shadow-lightBlue dark:border-darkColor shadow-lg shadow-neutral-500 border-gray-200 border-b transition-colors duration-[0.4s]">
     <div className="container flex justify-between items-center px-2 py-3.5 mx-auto">
     <h1 className='text-2xl md:text-3xl text-main font-bold italic'>AFLAM.TV</h1>
      <div className='flex items-center gap-x-3 md:gap-x-4'>
        <div className='cursor-pointer'>
          <RiSearchLine className='text-darkblue dark:text-lightColor text-[14px] md:text-[16px]'/>
        </div>
        <div className="flex items-center gap-x-3 md:gap-x-4">
          <p className='cursor-pointer text-darkBlue dark:text-lightColor font-medium text-[14px] md:text-[15px]'><Link to='movies'>Movies</Link></p>
          <div className="relative">
          <span className="absolute rounded-full w-3.5 h-3.5 bg-main flex items-center text-lightColor justify-center text-[9px] md:text-[10px] top-[-12px] right-[-4px]">0</span>
          <Link to="my-favorite"><MdFavorite className="cursor-pointer text-darkBlue dark:text-lightColor text-[17px] md:text-[19px]"/></Link>
          </div>
          <div className={showMenu ? 'triangle' : 'after:hidden'}>
            <RiUserLine className='cursor-pointer text-darkBlue dark:text-lightColor text-[17px]' onClick={handleMenu}/>
            {showMenu && (<div className='absolute bg-lightBlue/90 dark:bg-lightColor/90 z-10 w-[110px] md:w-[130px] min-h-[60px] top-[40px] left-[-35px] md:left-[-70px] flex items-center flex-col p-[8px] md:p-[10px] gap-y-[0.4rem]' onClick={handleMenu}>
              <Link to='login' className="text-darkBlue text-[15px] md:text-[16px] hover:text-main transition">Login</Link>
              <Link to='register' className='text-darkBlue text-[15px] md:text-[16px] hover:text-main transition'>Register</Link>
            </div>)}
          </div>
        </div>
        <div className="px-2 border-[#D3D3D3] border-l" onClick={() => setTheme(!theme)}>
         {theme ? <RiMoonClearLine className='text-lightBlue ml-2 cursor-pointer text-[1.4rem]' />:  <MdOutlineLightMode className="text-switchMode ml-2 cursor-pointer text-[1.4rem]"/>}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar