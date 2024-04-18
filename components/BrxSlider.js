// testimonial data
const brxSlider = [
  {
    image: '/brx1.png',
    position: 'Customer',
  },
  {
    image: '/brx2.png',
    position: 'Customer',
  }, 
];  
//swiper
import {Swiper, SwiperSlide} from 'swiper/react';

//swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
 
//required modules
import {Navigation, Pagination} from "swiper";

//icons
import {RxArrowRight} from 'react-icons/rx';
//next image 
import Image from "next/image";


const BrxSlider = () => {
  return (
  <Swiper   
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation]}
  className='h-[400px] '
  >
    {brxSlider.map((person, index) => {
      return (<SwiperSlide key={index}>
        <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
          {/* avatar, name, position */}
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
            
          </div>
          {/* quote & message  */}
          <div className='flex 1 flex flex-col justify-center before:w-[1px] xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'> 
            {/* message */}
               
            <div className='xl:text-lg text-center md:text-left'><Image className='flex sm:flex-col gap-6   group relative shadow-lg-[#12f7ff] text-white rounded-xl px-6 py-8 hover:bg-[rgba(96,65,199,0.15)] bg-[#065ac7] sm:gap-x-0 overflow-hidden cursor-pointer' src={person.image} width={250} height={100}/></div>
          </div>
          </div> 
      </SwiperSlide>);
    })}
  </Swiper>
  );
};

export default BrxSlider;

