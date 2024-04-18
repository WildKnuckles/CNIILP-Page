// testimonial data
const dicSlider = [
  {
    image: '/AO.png',
    name: 'Dicionário Digital da República de Angola',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/cplp-logo.png',
    name: 'Dicionário Digital Plurilíngue da Educação e Formação da CPLP',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
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


const DicSlider = () => {
  return (
  <Swiper   
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Pagination]}
  className='h-[400px] '
  >
    {dicSlider.map((person, index) => {
      return (<SwiperSlide key={index}>
        <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
          {/* avatar, name, position */}
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
            <div className='flex flex-col justify-center items-center'>
              {/* avatar */}
              <div className='mb-2 mx-auto'>
              <Image src={person.image} width={100} height={100}/> 
              </div>
              {/* name */}
              <div className='text-lg'>{person.name}</div> 
            </div>
          </div>
          {/* quote & message  */}
          <div className='flex 1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'> 
            {/* quote & icon */}
            <div className='mb-4'><span className='text-accent'>
            <RxArrowRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300 text-2xl xl:text-4xl cursor-pointer mx-auto md:mx-0'/>
            </span> 
            </div>
            {/* message */}
            <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
          </div>
          </div> 
      </SwiperSlide>);
    })}
  </Swiper>
  );
};

export default DicSlider;

