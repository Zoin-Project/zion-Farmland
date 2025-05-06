import { ReactNode } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  children: ReactNode;
}

const ProductCard = ({ image, title, children }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;