import Cow from '../assets/icons/cow-100.png';
import Pig from '../assets/icons/pig.png';
import Goat from '../assets/icons/goat-100.png';
import Tree from '../assets/icons/tree.png';
import Fish from '../assets/icons/fish.png';
import FeatureItem from './FeatureItem';

const featureData = [
  { src: Tree, alt: "organic food", label: "ORGANIC FOOD", route: "/organic-food" },
  { src: Fish, alt: "fish", label: "FISH", route: "/fish" },
  { src: Pig, alt: "pig", label: "PIG", route: "/pig" },
  { src: Goat, alt: "goat", label: "GOAT", route: "/goat" },
  { src: Cow, alt: "cow", label: "COW", route: "/cow" },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 md:py-20 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Our Farm Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="w-[calc(40%-0.5rem)] xs:w-[calc(33%-0.666rem)] sm:w-[calc(20%-0.75rem)] md:w-[calc(16%-0.8rem)] p-2"
            >
              <FeatureItem {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;