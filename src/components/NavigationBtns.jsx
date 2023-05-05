import { useSwiper } from "swiper/react";
import {GrPrevious, GrNext} from "react-icons/gr";
const NavigationBtns = ({start, end}) => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center items-center mt-8 gap-x-[1rem] mb-4'>
            <button className='py-2 px-4 xxs:px-3 bg-grayColor dark:bg-lightColor dark:disabled:bg-lightColor/50 cursor-pointer xxs:text-[15px] text-[17px] md:text-[17px] rounded disabled:cursor-not-allowed disabled:bg-grayColor/50' onClick={() => swiper.slidePrev()} disabled={start}><GrPrevious /></button>
            <button className='py-2 px-4 xxs:px-3 bg-grayColor dark:bg-lightColor dark:disabled:bg-lightColor/50 cursor-pointer xxs:text-[15px] text-[17px] md:text-[17px] rounded disabled:cursor-not-allowed disabled:bg-grayColor/50' onClick={() => swiper.slideNext()} disabled={end}><GrNext /></button>
        </div>
    )
}
export default NavigationBtns;