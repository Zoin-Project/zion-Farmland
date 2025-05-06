import { useEffect, useRef } from 'react';
import { FaLeaf, FaTractor, FaHeart, FaUsers } from 'react-icons/fa';
import { animate, stagger } from "motion"
import { motion } from 'framer-motion';
import { splitText } from "motion-plus"
import OrganicImage from '../assets/images/organic-food.jpg';
import FarmAnimals from '../assets/images/Farm-Animals.jpg';
import Cow from '../assets/images/view-cow.jpg'
import Member1 from '../assets/images/asian-farmer1.jpg';
import Member2 from '../assets/images/asian-farmer2.jpg';
import Member3 from '../assets/images/asian-farmer3.jpg';
import TextSplitAnimate from './Animation/TextSplitAnimate';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface FarmValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OrganicProducts = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null)
  const teamMembers: TeamMember[] = [
    {
      name: "John Farmer",
      role: "Founder & Head Farmer",
      bio: "With over 25 years of farming experience, John leads our operations with sustainable practices.",
      image: Member1
    },
    {
      name: "Sarah Green",
      role: "Farm Manager",
      bio: "Sarah oversees our daily operations and ensures our produce meets the highest quality standards.",
      image: Member3
    },
    {
      name: "Mike Harvest",
      role: "Distribution Manager",
      bio: "Mike manages our relationships with local markets and ensures fresh delivery to our customers.",
      image: Member2
    }
  ];

  const farmValues: FarmValue[] = [
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Sustainability",
      description: "We practice regenerative agriculture to nurture the land for future generations."
    },
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "Quality",
      description: "Our produce is grown with care and harvested at peak ripeness for maximum flavor."
    },
    {
      icon: <FaTractor className="text-3xl text-yellow-600" />,
      title: "Innovation",
      description: "We combine traditional farming wisdom with modern techniques for better yields."
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Community",
      description: "We're proud to support our local community through farmers markets and CSA programs."
    }
  ];
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Split the text into words
              const { words } = splitText(textRef.current!);

              // Animate the words
              animate(
                words,
                { opacity: [0, 1], y: [20, 0] },
                {
                  type: "spring",
                  duration: 1.2,
                  bounce: 0,
                  delay: stagger(0.07),
                }
              );

              // Optionally unobserve after animating once
              observer.unobserve(textRef.current!);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(textRef.current!);

      // Clean up observer on unmount
      return () => observer.disconnect();
    });
  }, []);

  useEffect(() => {
    if (!boxRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate when in view
            animate(boxRef.current!, { y: [100, 0] }, { duration: 1 })
            // Stop observing once animated
            observer.unobserve(boxRef.current!)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(boxRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* First Section - Organic Products */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-center">
            {/* Text Content */}
            <div className="lg:flex-1 text-center lg:text-left">
              <TextSplitAnimate
                text="We provide high-quality organic products"
                threshold={0.5}
                animation={{ opacity: [0, 1], y: [30, 0], scale: [0.9, 1] }}
                transition={{ duration: 1, bounce: 0.3, delay: stagger(0.05) }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 max-w-2xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg">
                  Our core values guide us in how we conduct ourselves—personally and professionally. In this ever-changing world of agriculture, our core values are constant.
                </p>
                <p className="text-base sm:text-lg">
                  We continue to develop our capacities. Even more fruits and vegetables will be grown and gathered in the nearest future. The total number of our livestock is also increasing.
                </p>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 px-8 py-3 bg-linear-to-br from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white rounded-lg text-lg font-medium transition duration-300 shadow-lg">
                MORE ABOUT US
              </motion.button>
            </div>

            {/* Image */}
            <div className="lg:flex-1 w-full">
              <img
                src={OrganicImage}
                alt="Organic Food"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Farm Animals */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 xl:gap-12 items-center">
            {/* Text Content */}
            <div ref={boxRef} className="lg:flex-1 text-center lg:text-left">
              {/* <h1 ref={textRef} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                We provide Animals
              </h1> */}
              <TextSplitAnimate
                text="We provide Animals"
                threshold={0.5}
                animation={{ opacity: [0, 1], y: [30, 0], scale: [0.9, 1] }}
                transition={{ duration: 1, bounce: 0.3, delay: stagger(0.05) }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              />

              <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg">
                  Our core values guide us in how we conduct ourselves—personally and professionally. In this ever-changing world of agriculture, our core values are constant.
                </p>
                <p className="text-base sm:text-lg">
                  We continue to develop our capacities. Even more fruits and vegetables will be grown and gathered in the nearest future. The total number of our livestock is also increasing.
                </p>
              </div>
              <button className="mt-8 px-8 py-3 bg-linear-to-br from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white rounded-lg text-lg font-medium transition duration-300 shadow-lg">
                MORE ABOUT US
              </button>
            </div>

            {/* Image */}
            <div className="lg:flex-1 w-full">
              <img
                src={FarmAnimals}
                alt="Farm Animals"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our Values */}
      <section className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {farmValues.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                <p className="text-green-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farm Today */}
      <section className="max-w-7xl mx-auto bg-green-50 rounded-lg px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Farm Today</h2>
            <p className="text-gray-600 mb-4">
              We're proud to be certified organic and to use regenerative farming practices that rebuild soil organic matter and restore degraded soil biodiversity.
            </p>
            <p className="text-gray-600 mb-6">
              Each season, we grow over 50 varieties of fruits and vegetables, supplying local restaurants, farmers markets, and our popular CSA program.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Certified Organic
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Regenerative Agriculture
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Locally Grown
              </span>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={Cow}
              alt="Aerial view of our farm"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrganicProducts;