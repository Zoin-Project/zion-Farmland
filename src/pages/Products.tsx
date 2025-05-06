import { motion } from "framer-motion";
import Fish from "../assets/images/tilapia-fish.avif";
import Cow from "../assets/images/cows.avif";
import Pig from "../assets/images/pig.jpg";
import Fruits from "../assets/images/fruits-basket.jpg";
import Goats from "../assets/images/goats-nature.jpg";

const ProductsPage = () => {
    const products = [
        { id: 1, name: "Farm Fresh Fruits", category: "Fruit", image: Fruits, route: "/fruits" },
        { id: 2, name: "Fresh Fish", category: "Fish", image: Fish, route: "/fish" },
        { id: 4, name: "Free Range Pig", category: "Pig", image: Pig, route: "/pig" },
        { id: 5, name: "Goats", category: "Goats", image: Goats, route: "/goats" },
        { id: 3, name: "Organic Cow Milk", category: "Cow", image: Cow, route: "/cow" },
    ];
    return (
        <div className="bg-green-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=" my-8 text-4xl font-bold text-center text-green-800"
                >
                    🌾 Our Farm Products
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                            key={product.id}
                            onClick={() => (window.location.href = product.route)}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                            <div className="p-4 bg-white">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProductsPage;