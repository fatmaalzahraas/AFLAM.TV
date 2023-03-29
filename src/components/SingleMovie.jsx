import {useState} from 'react';
import {TfiEye} from 'react-icons/tfi';
import {MdFavoriteBorder} from 'react-icons/md';
import {motion} from 'framer-motion';
import {images} from '../api';
const SingleMovie = ({movie}) => {
    const [like, setLike] = useState(false);
    return (
       <div className='xs:flex xs:justify-center'>
         <div className='h-80 w-[200px] md:w-[240px] relative'>
            <div className='h-full w-full'>
                <img className='h-full w-full rounded-md' src={`${images}original/${movie?.poster_path}`} alt={movie?.title}/>
            </div>
            <div className="group/item bg-blackColor/0 hover:bg-blackColor/60 transition-all duration-[0.5s] w-full h-full absolute top-0 left-0 flex items-center justify-center gap-x-4">
                <motion.i whileHover={{ scale: 1.2 }} className='hidden group-hover/item:block'><TfiEye className="cursor-pointer text-lightColor text-[28px]"/></motion.i>
                <motion.i whileHover={{ scale: 1.2 }} className='hidden group-hover/item:block cursor-pointer text-[28px]'><MdFavoriteBorder className={like ? 'text-main' : 'text-lightColor'}/></motion.i>
            </div>
            </div>
       </div>
    )
}
export default SingleMovie;