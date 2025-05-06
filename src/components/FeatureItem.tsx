import { Link } from 'react-router-dom';

interface FeatureItemProps {
  src: string;
  alt: string;
  label: string;
  route: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ src, alt, label, route }) => {
  
  return (
    <Link to={route} className='group transform transition duration-500 hover:no-underline'>
      <div className='flex flex-col items-center'>
        <div className='w-24 h-24 p-4 bg-gray-200 rounded-full mx-auto shadow group-hover:scale-105 group-hover:shadow-lime-500'>
          <img src={src} alt={alt} className='w-full h-full object-contain' />
        </div>
        <p className='text-lg font-bold pt-2 text-gray-800 group-hover:text-green-600'>{label}</p>
      </div>
    </Link>
  );
};

export default FeatureItem;