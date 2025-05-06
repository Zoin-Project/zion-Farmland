import React from 'react';
import Vegatable from "../assets/images/farm-vegatables.jpg"
import Tour from "../assets/images/farm-tour.avif"
import Workshop from "../assets/images/workshop.jpg"
import Catering from "../assets/images/catering.jpg"

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    title: 'Farm Produce Sales',
    description:
      'Fresh, organic vegetables and fruits harvested daily. Available in farm stands, local markets, and for home delivery.',
    image: Vegatable,
  },
  {
    title: 'Farm Tours & Visits',
    description:
      'Guided tours of our beautiful farm. Experience planting, harvesting, and learn about sustainable farming.',
    image: Tour,
  },
  {
    title: 'Agricultural Workshops',
    description:
      'Join our workshops to learn organic farming, livestock care, and soil management from our experienced farmers.',
    image: Workshop,
  },
  {
    title: 'Farm-to-Table Catering',
    description:
      'We cater fresh produce and farm-made dishes for special events, collaborating with local restaurants and chefs.',
    image: Catering,
  },
];

const Service: React.FC = () => {
  return (
    <div className="pt-20 pb-10 bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Services</h1>
        <p className="text-lg text-green-700">
          Discover the range of farm services we proudly offer to our community.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105"
          >
            <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-900 mb-3">{service.title}</h2>
              <p className="text-green-700 mb-4">{service.description}</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
