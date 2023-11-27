import  { useState, useEffect } from 'react';
import { MdOutlineArrowDropUp } from "react-icons/md";
import ReactiveButton from 'reactive-button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-8 text-xl btn-sm bg-yellow-500 font-bold right-8 btn-warning   p-2 "
          onClick={scrollToTop}
        >
             

<MdOutlineArrowDropUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
