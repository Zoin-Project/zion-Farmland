import ProductCard from '../components/ProductCard';

const Fruits = () => {
  const fruits = [
    {
      name: 'Mangoes',
      image: '/images/mangoes.jpg',
      season: 'May - August',
      benefits: 'Rich in vitamins A and C, antioxidants',
      varieties: ['Kent', 'Tommy Atkins', 'Keitt']
    },
    {
      name: 'Bananas',
      image: '/images/bananas.jpg',
      season: 'Year-round',
      benefits: 'High in potassium and fiber',
      varieties: ['Cavendish', 'Lady Finger']
    },
    // Add more fruits
  ];

  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Our Organic Fruits</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fruits.map((fruit) => (
          <ProductCard
            key={fruit.name}
            image={fruit.image}
            title={fruit.name}
          >
            <div className="p-4">
              <p className="font-semibold">Season: {fruit.season}</p>
              <p className="mt-2 text-gray-700">{fruit.benefits}</p>
              <div className="mt-4">
                <h4 className="font-medium">Varieties:</h4>
                <ul className="list-disc list-inside">
                  {fruit.varieties.map(variety => (
                    <li key={variety}>{variety}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                Inquire About {fruit.name}
              </button>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Fruits;