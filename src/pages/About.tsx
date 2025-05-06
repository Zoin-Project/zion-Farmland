import { FaLeaf, FaTractor, FaHeart, FaUsers } from 'react-icons/fa';
// import BannerSlideComponent from "../components/BannerSilde";
import BannerImage from "../assets/images/agriculture-iot.jpg";
import Member1 from '../assets/images/asian-farmer1.jpg';
import Member2 from '../assets/images/asian-farmer2.jpg';
import Member3 from '../assets/images/asian-farmer3.jpg';
import Foods from '../assets/images/Organic-food.avif';
import Cow from '../assets/images/view-cow.jpg'

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


const About = () => {
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
  return (
    <>
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
        <div className="relative text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 ">
          <h1 className="text-3xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-3 text-lg text-white sm:text-xl md:text-2xl lg:text-3xl lg:mt-6">We are a company focused on delivering great products.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Farm History */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src={Foods}
                alt="Our farm in the early days"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">From Humble Beginnings</h2>
              <p className="text-gray-600 mb-4">
                Established in 1985, Green Valley Farms started as a small family plot growing vegetables for local markets.
                What began as a passion project quickly grew into a thriving agricultural business.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we farm over 200 acres using sustainable methods that prioritize soil health and biodiversity.
                While we've grown in size, we've never lost sight of our roots as a family farm dedicated to quality.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-800 font-medium italic">
                  "Our mission is simple: grow nutritious food responsibly, support our local community, and leave the land better than we found it."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
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
        <section className="mb-20">
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
        <section className="bg-green-50 rounded-lg p-8 md:p-12">
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
    </>
  );
};
export default About;
