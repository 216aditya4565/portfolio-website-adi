// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/health.jpg',
          url: 'https://github.com/216aditya4565/Snowflake-Health-Care_Analytics-AWS',
        },
        {
          title: 'title',
          path: '/loan.png',
          url: 'https://github.com/216aditya4565/Loan-Default-Prediction',
        },
        {
          title: 'title',
          path: '/churn.png',
          url: 'https://github.com/216aditya4565/Bank-Customer-Churn',
        },
        {
          title: 'title',
          path: '/crowd.png',
          url: 'https://github.com/216aditya4565/CrowdDynamics',
        },
      ],
    },
  ],
};
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, imageIndex) => {
                return (
                  <a
                    href={image.url} // Use the URL here
                    target='_blank'
                    rel='noopener noreferrer'
                    key={imageIndex}
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
