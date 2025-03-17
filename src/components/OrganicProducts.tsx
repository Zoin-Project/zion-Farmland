import OrganicImage from '../assets/images/organic-food.jpg';
import FarmAnimals from '../assets/images/Farm-Animals.jpg'

const OrganicProducts = () => {
  return (
    <>
    <div className='bg-green-50'>
        <div className='container mx-auto py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='text-center'>
            <h1 className='text-5xl font-bold'>We provide high-quality organic products</h1>
            <div className='px-8 pt-6'>
                <p className='pb-2'>Our core values guide us in how we conduct ourselves—personally and professionally. In this ever-changing world of agriculture, our core values are constant. They underlie our work, how we interact with each other and which strategies we employ to fulfill our mission.</p>
                <p>We continue to develop our capacities. Even more fruits and vegetables will be grown and gathered in the nearest future. ​​​​​​​The total number of our livestock is also increasing.</p>
                <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md">
                MORE ABOUT US
                </button>
            </div>
            </div>
            <div className='shadow-lg'>
            <img src={OrganicImage} alt="Organic Food" className='w-full h-auto' />
            </div>
        </div>
        </div>
        </div>
        <div>
        <div className='container mx-auto py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='shadow-lg'>
            <img src={FarmAnimals} alt="Organic Food" className='w-full h-auto' />
            </div>
            <div className='text-center'>
            <h1 className='text-5xl font-bold'>We provide Animals</h1>
            <div className='px-8 pt-6'>
                <p className='pb-2'>Our core values guide us in how we conduct ourselves—personally and professionally. In this ever-changing world of agriculture, our core values are constant. They underlie our work, how we interact with each other and which strategies we employ to fulfill our mission.</p>
                <p>We continue to develop our capacities. Even more fruits and vegetables will be grown and gathered in the nearest future. ​​​​​​​The total number of our livestock is also increasing.</p>
                <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md">
                MORE ABOUT US
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default OrganicProducts;