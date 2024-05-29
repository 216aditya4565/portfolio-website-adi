// components/ResumeBtn.js
import Link from 'next/link';
import { motion } from 'framer-motion';

const ResumeBtn = () => {
  return (
    <Link href='https://drive.google.com/file/d/15qTfMF9aFKCXHHv9uzMLkh2XXIHGTcgh/view?usp=sharing' passHref>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='bg-accent text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300'
        target='_blank'
        rel='noopener noreferrer'
      >
        My Resume
      </motion.a>
    </Link>
  );
};

export default ResumeBtn;
