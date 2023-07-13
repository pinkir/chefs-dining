import parrot from '../../assets/rec1.jpg'
import lion from '../../assets/rec2.jpg'
import ziraf from '../../assets/rec3.jpg'
import zebra from '../../assets/rec4.jpg'
import crocodile from '../../assets/rec5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const New = () => {
    return (
        
            <>
            <div className='text-center mt-5 '>
                <i><h3 className='mb-3'>What's New</h3>
                <p className='mb-3'>Here are some latest recipes.</p></i>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-5 text-center "
            >
                
                <SwiperSlide><img className='w-75' src={ziraf} alt="" /><h3 className='text-xl p-5'>Mediterranean Style Shrimp Recipe  <br /> </h3></SwiperSlide>
                <SwiperSlide><img className='w-75'src={zebra} alt="" /><h3 className='text-xl p-5'>Easy Mediterranean Diet Recipes  <br /> </h3></SwiperSlide>
                <SwiperSlide><img className='w-75' src={lion} alt="" /><h3 className='text-xl p-5 '>Branzino Mediterranean <br /> </h3></SwiperSlide>
                
                
            </Swiper>
        </>
        
    );
};

export default New;