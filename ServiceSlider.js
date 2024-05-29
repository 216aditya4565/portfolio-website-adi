import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// service data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Associate Software Engineer',
    description: 'At Ugam, A Merkle USA Company.',
    link: 'https://www.linkedin.com/in/adityaanilpawar281902/', // Add your LinkedIn profile URL
  },
  {
    icon: <RxPencil2 />,
    title: 'Graduate Research Assistant',
    description: 'To Dr. Sergio Alvarez at University of Central Florida.',
    link: 'https://www.linkedin.com/in/adityaanilpawar281902/', // Add your LinkedIn profile URL
  },
  {
    icon: <RxPencil2 />,
    title: 'Graduate Teaching Assistant',
    description: 'To Dr. Travis Meade at University of Central Florida.',
    link: 'https://www.linkedin.com/in/adityaanilpawar281902/', // Add your LinkedIn profile URL
  },
  {
    icon: <RxDesktop />,
    title: 'Web Developer Intern',
    description: 'At Suven Consultants and Technology Pvt.Ltd.',
    link: 'https://www.linkedin.com/in/adityaanilpawar281902/', // Add your LinkedIn profile URL
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
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
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
