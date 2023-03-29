import { useSwiper } from "swiper/react";
import {GrPrevious, GrNext} from "react-icons/gr";
const NavigationBtns = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center items-center mt-8 gap-x-[1rem]'>
            <button className='py-2 px-4 bg-grayColor dark:bg-lightColor cursor-pointer text-[20px] rounded disabled:cursor-not-allowed' onClick={() => swiper.slidePrev()} ><GrPrevious /></button>
            <button className='py-2 px-4 bg-grayColor dark:bg-lightColor cursor-pointer text-[20px] rounded disabled:cursor-not-allowed' onClick={() => swiper.slideNext()}><GrNext /></button>
        </div>
    )
}
export default NavigationBtns;