import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: string | number;
  bgImage: string;
  title: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
  shapes?: string[];
}

interface HeroSliderProps {
  slides: Slide[];
  slideDuration?: number;
  transitionDuration?: number;
  width?: number;
  height?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  slideDuration = 20000,
  transitionDuration = 2000,
  height = '100vh',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [slides.length, slideDuration]);

  const goToSlide = (index: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: transitionDuration / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 1,
      transition: {
        duration: transitionDuration / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

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
          }}
        >
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

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentIndex ? 'right' : 'left')}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='hidden absolute top-1/2 left-5 right-5 md:flex justify-between z-1'>
        <button
          onClick={() => goToSlide((currentIndex - 1 + slides.length) % slides.length, 'left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-1 text-white text-3xl hover:text-green-400 transition-all"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % slides.length, 'right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-1 text-white text-3xl hover:text-green-400 transition-all"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default HeroSlider;