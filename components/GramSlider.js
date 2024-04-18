//Grammar

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Gram 1',
    description: 'Com esta gramática poderá aumentar o seu domínio sobre a Língua!',
    //obs 64 caracters on the description
  },
  {
    icon: <RxPencil2 />,
    title: 'Gram 2',
    description: 'Com esta gramática poderá aumentar o seu domínio sobre a Língua!',
  },
  {
    icon: <RxDesktop />,
    title: 'Gram 3',
    description: 'Com esta gramática poderá aumentar o seu domínio sobre a Língua!',
  },
  {
    icon: <RxReader />,
    title: 'Gram 4',
    description: 'Com esta gramática poderá aumentar o seu domínio sobre a Língua!',
  },
  {
    icon: <RxRocket />,
    title: 'Gram 5',
    description: 'Com esta gramática poderá aumentar o seu domínio sobre a Língua!',
  },
];

//swiper
import {Swiper, SwiperSlide} from 'swiper/react';

//swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
 
//required modules
import { FreeMode, Pagination } from "swiper";
 

const ServiceSlider = () => {
  return (<Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {serviceData.map((item, index) => {
      return (
      <SwiperSlide key={index}>
        <div className="bg-[#043575] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
          {/* icon */}
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          {/* title & desc */}
          <div className='mb-8'>
          <div className='mb-2 text-lg'>{item.title}</div>
          <p className='max-w-[350px] leading-normal'>{item.description}</p>
          </div>
          {/* arrow*/}
          <div className='text-3xl'>
          <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
          </div>
          </div>

      </SwiperSlide>);
    })}
  </Swiper>
  );
};

export default ServiceSlider;
