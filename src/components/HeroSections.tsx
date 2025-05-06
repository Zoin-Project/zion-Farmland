import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from "../assets/images/material-area-2.jpg";
import image2 from "../assets/images/hero-image.webp";
import image3 from "../assets/images/background farm.jpg";

const slides = [
  {
    id: 1,
    bgImage: image1,
    title: 'Farm Company',
    content: 'Premium organic produce grown with sustainable methods.',
    ctaText: 'Discover More',
    ctaLink: '/about',
    shapes: ['/images/shape1.png', '/images/shape2.png']
  },
  {
    id: 2,
    bgImage: image2,
    title: 'Best Harvest',
    content: 'Fresh from our fields to your table.',
    ctaText: 'View Products',
    ctaLink: '/products'
  },
  {
    id: 3,
    bgImage: image3,
    title: 'Best Harvest',
    content: 'Fresh from our fields to your table.',
    ctaText: 'View Products',
    ctaLink: '/products'
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const slideDuration = 10000;
  const transitionDuration = 1000;
  const height = '100vh';

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: transitionDuration / 1000,
        ease: 'easeInOut',
      },
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: transitionDuration / 1000,
        ease: 'easeOut',
      },
    }),
  };
  // const variants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 1.05,
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1.2,
  //     transition: {
  //       duration: slideDuration / 1000,
  //       ease: "easeInOut",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: {
  //       duration: transitionDuration,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <div className="relative mx-auto w-full overflow-hidden" style={{ height }}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 mx-auto w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: "kenburns 15s ease-in-out infinite alternate",
          }} 
        >
        <style>
          {`
            @keyframes kenburns {
              0% {
                transform: scale(1) translate(0, 0);
              }
              100% {
                transform: scale(1.2) translate(-5px, -5px);
              }
            }
          `}
        </style>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container h-full flex items-center relative z-1 mx-auto px-4">
            <div className="text-center w-full">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
              >
                {slides[currentIndex].title}
              </motion.h2>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                {slides[currentIndex].content}
              </motion.p>

              {slides[currentIndex].ctaText && (
                <motion.a
                  href={slides[currentIndex].ctaLink || '#'}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="inline-block px-8 py-3 bg-linear-to-br from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white rounded-md transition-all shadow-lg"
                >
                  {slides[currentIndex].ctaText}
                </motion.a>
              )}
            </div>
          </div>

          {slides[currentIndex].shapes && (
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
              {slides[currentIndex].shapes.map((shape, i) => (
                <motion.img
                  key={i}
                  src={shape}
                  alt="Decoration"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
                  className="h-16 sm:h-20"
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentIndex ? 'right' : 'left')}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>

      <div className='hidden absolute top-1/2 left-5 right-5 md:flex justify-between z-1'>
        <button
          onClick={() => goToSlide((currentIndex - 1 + slides.length) % slides.length, 'left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-1 text-white text-3xl hover:text-green-400 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % slides.length, 'right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-1 text-white text-3xl hover:text-green-400 transition-all"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
