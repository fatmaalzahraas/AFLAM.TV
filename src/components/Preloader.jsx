import {useContext} from 'react'
import { DarkModeContext } from '../context/darkModeContext';
const Preloader = ({heightView, styles}) => {
  const [theme] = useContext(DarkModeContext);
  return (
   <div className={theme ? 'dark' : ''}>
     <div className={`relative w-full ${heightView} bg-lightColor dark:bg-darkBlue/95`}>
        <div className={` flex h-[40px] ${styles}`}>
            <div className='relative  w-[19px] before:absolute before:block before:top-0 before:w-[19px] before:h-[19px] before:rounded-[50%] before:bg-switchMode before:origin-[50%] animate-[bounce_0.5s_alternate_infinite_ease] '></div>
            <div className='text-switchMode ml-[8px] xxs:text-[1rem] text-[1.2rem]'>LOADING...</div>
        </div>
    </div>
   </div>
  )
}

export default Preloader