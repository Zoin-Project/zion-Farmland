import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image01 from '../assets/images/2.jpg';
import Image02 from '../assets/images/hero-image.webp'

// import 'swiper/css'
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
//import 'swiper/css/effect-fade';

interface BannerSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: BannerSlide[] = [
  {
    title: "Handmade Products",
    subtitle: "Agriculture Matter",
    description:
      "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible Margaret suitable he speedily.",
    image: Image01,
  },
  {
    title: "Original & Natural",
    subtitle: "Organic Agriculture",
    description:
      "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible Margaret suitable he speedily.",
    image: Image02,
  },
  // Add more slides as needed
];

const BannerSlideComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      autoplay={{ delay: 3000 }}
      loop={true}
      effect={'fade'}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlideComponent;