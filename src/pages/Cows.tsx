import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import BannerImage from "../assets/images/banner-25.jpg";
import Cow1 from "../assets/images/cows.avif";
import Fish2 from "../assets/images/catfish.avif";
import Fish3 from "../assets/images/tilapia-fish.avif";
import Fish4 from "../assets/images/fish-farm.jpg";
import FreshEgg from "../assets/images/fresh eggs.jpg";
import PrimaryButton from './../utils/PrimaryButton';

const CowPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const images = [Cow1, Fish2, Fish3, Fish4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center px-4 py-12">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Zion Farmland</h1>
          <p className="mt-4 text-lg text-white md:text-2xl">Healthy, sustainable fish from our farm to your table.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">


        {/* Product Detail Section */}
        <section className="">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Cow Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Image Gallery */}
            <div>
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="rounded-lg overflow-hidden"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`Fish ${index + 1}`} className="w-full h-60 md:h-96 rounded-lg object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                modules={[Thumbs]}
                className="mt-4"
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 md:24 md:h-24 cursor-pointer border border-gray-300 rounded-lg hover:border-green-500 transition object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Fresh Cow Milk</h2>
              <p className="mb-4 text-gray-700">
                Our fish are raised in clean, chemical-free ponds with natural feed for optimal taste and health.
              </p>

              <h3 className="text-xl font-medium mb-3">Available Varieties:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Tilapia</li>
                <li>Catfish</li>
                <li>Carp</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton>Purchase Fish</PrimaryButton>
              </motion.button>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gray-100 py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">What Our Customers Are Saying</h2>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"The fish from Zion Farmland is the best I’ve ever had! Fresh, healthy, and full of flavor. I’ll be back for more!"</p>
              <h4 className="mt-4 text-lg font-semibold">John Doe</h4>
              <p className="text-gray-500">Customer</p>
            </div>
            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"I love knowing where my food comes from, and Zion Farmland gives me peace of mind with their sustainable practices."</p>
              <h4 className="mt-4 text-lg font-semibold">Jane Smith</h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg">How do I store the fish?</h3>
              <p className="mt-2 text-gray-700">Store the fish in the refrigerator, preferably in a vacuum-sealed bag for maximum freshness.</p>
            </div>
            {/* Add more questions */}
          </div>
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">You Might Also Like Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={FreshEgg} alt="Farm Fresh Eggs" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg font-medium mt-4">Farm Fresh Eggs</h3>
              <p className="text-gray-700 mt-2">Organic, cage-free eggs from our farm to your kitchen.</p>
              <PrimaryButton>Order Now</PrimaryButton>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={FreshEgg} alt="Farm Fresh Eggs" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg font-medium mt-4">Farm Fresh Eggs</h3>
              <p className="text-gray-700 mt-2">Organic, cage-free eggs from our farm to your kitchen.</p>
              <PrimaryButton>Order Now</PrimaryButton>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src={FreshEgg} alt="Farm Fresh Eggs" className="w-full h-auto rounded-lg" />
              <h3 className="text-lg font-medium mt-4">Farm Fresh Eggs</h3>
              <p className="text-gray-700 mt-2">Organic, cage-free eggs from our farm to your kitchen.</p>
              <PrimaryButton>Order Now</PrimaryButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CowPage;
