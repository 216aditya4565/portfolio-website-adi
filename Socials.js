// links
import Link from 'next/link';

// icons
import { RiLinkedinLine, RiGithubLine, RiMailLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://www.linkedin.com/in/adityaanilpawar281902/' className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiLinkedinLine />
      </Link>
      <Link href='https://github.com/216aditya4565' className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiGithubLine />
      </Link>
      <Link href='mailto:adityaanilpawar281198@gmail.com' className='hover:text-accent transition-all duration-300'>
        <RiMailLine />
      </Link>
      <Link href='https://drive.google.com/file/d/15qTfMF9aFKCXHHv9uzMLkh2XXIHGTcgh/view?usp=sharing' className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <span className='text-lg font-bold'>Resume</span>
      </Link>
    </div>
  );
};

export default Socials;
