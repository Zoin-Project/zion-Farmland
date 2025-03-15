import Cow from '../assets/icons/cow-100.png';
import Pig from '../assets/icons/pig.png';
import Goat from '../assets/icons/goat-100.png';
import Tree from '../assets/icons/tree.png';
import Fish from '../assets/icons/fish.png';

const featureData = [
  { src: Tree, alt: "image tree", label: "ORGANIC FOOD" },
  { src: Fish, alt: "image fish", label: "FISH" },
  { src: Pig, alt: "image pig", label: "PIG" },
  { src: Goat, alt: "image goat", label: "GOAT" },
  { src: Cow, alt: "image cow", label: "COW" },
];

interface FeatureItemProps {
  src: string;
  alt: string;
  label: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ src, alt, label }) => (
  <li className='group cursor-pointer transform transition duration-500'>
    <div className='w-24 h-24 p-4 bg-gray-200 rounded-full mx-auto shadow group-hover:scale-105 group-hover:shadow-lime-500'>
      <img src={src} alt={alt} className='text-white' />
    </div>
    <p className='text-lg font-bold pt-2'>{label}</p>
  </li>
);

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Welcome to our farm</h2>
        <ul className="flex justify-evenly py-8">
          {featureData.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;