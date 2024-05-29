// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex fixed inset-y-1/2 right-20 transform -translate-y-1/2 items-center">
      <Image
        src="/adityaclarity.png"
        width={500}
        height={275}
        alt="Aditya Clarity"
        className="translate-z-0"
      />
    </div>
  );
};

export default Avatar;
