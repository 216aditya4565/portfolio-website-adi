// testimonial slider data
export const testimonialSlider = [
  {
    image: '/stripathi.png',
    name: 'Sanjay Tripathi',
    position: 'Senior Manager',
    message:
      'Aditya has passion for any kind of computer science related work. His performance while working with my team is quite commendable and I would say it has been extra ordinary. The passion that he has for his chosen field, in fact, extends to other related endeavors. For instance, in conducting research, he can pinpoint a particular problem and then creatively look for proposed solutions for those problems. He has always come to me with solution of the issues whenever it has been reported directly or indirectly to him. Judging by his outstanding performance, I am convinced that Aditya has all technical knowledge, the proper work ethic, and the right attitude for any organization, and he will do the great job for his assigned work.'
  },
  {
    image: '/sn.png',
    name: 'Shailesh Nerurkar',
    position: 'Manager',
    message:
      'Aditya was part of our Level2/ Tier 2 Data Operations team working mainly on Retail projects for US team. He is a fast learner and within a short duration, he started working independently on projects. Considering he was fresher out of college, understanding and grasping Tier 2 complex work was commendable. He also received positive feedback from our US clients for his outstanding work.'
  },
  {
    image: '/jim_geist.png',
    name: 'Jim Geist',
    position: 'PhD in Computer Science at UCF',
    message:
      'I worked with Aditya as a TA in UCF\'s Computer Science 1 class, for which I was the head TA. Aditya is a very conscientious worker. The class had 9 TA\'s, and he was almost always the first to jump on and complete assigned tasks. He also cares greatly about the quality of his work and is a great communicator. I would definitely enjoy working with him again.'
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
        el: '.custom-swiper-pagination', // Using the custom class here
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className='custom-swiper-pagination'></div> {/* Applying the custom class here */}
    </Swiper>
  );
};

export default TestimonialSlider;
