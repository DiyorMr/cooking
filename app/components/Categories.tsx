import React from "react";

type Category = {
    name: string;
    image: string;
    bg: string;
};

const categories: Category[] = [
    {
        name: "Breakfast",
        image: "categories/image1.svg",
        bg: "from-gray-100 to-white",
    },
    {
        name: "Vegan",
        image: "categories/image2.svg",
        bg: "from-green-100 to-white",
    },
    {
        name: "Meat",
        image: "categories/image3.svg",
        bg: "from-red-100 to-white",
    },
    {
        name: "Dessert",
        image: "categories/image4.svg",
        bg: "from-yellow-100 to-white",
    },
    {
        name: "Lunch",
        image: "categories/image5.svg",
        bg: "from-orange-100 to-white",
    },
    {
        name: "Chocolate",
        image: "categories/image6.svg",
        bg: "from-pink-100 to-white",
    },
];

const Categories: React.FC = () => {
    return (
        <section className="mx-auto my-5 w-full max-w-7xl px-6 py-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black">Categories</h2>
                <button className="bg-cyan-100 hover:bg-cyan-200 text-sm font-medium px-4 py-4 rounded-lg text-black cursor-pointer">
                    View All Categories
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.name}
                        className={`flex flex-col items-center text-black rounded-2xl shadow-sm bg-gradient-to-b ${cat.bg} p-4 hover:scale-105 transition-transform cursor-pointer`}
                    >
                        <img src={cat.image} alt={cat.name} className="w-16 h-16 mb-3" />
                        <span className="text-sm font-medium">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
