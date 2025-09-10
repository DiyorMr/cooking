"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

type Food = {
    id: number;
    title: string;
    image: string;
    time: string;
    category: string;
};

const foods: Food[] = [
    {
        id: 1,
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: "/footcard/salad.svg",
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id: 2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: "/footcard/chef.svg",
        time: "30 Minutes",
        category: "Western",
    },
    {
        id: 3,
        title: "Healthy Japanese Fried Rice with Asparagus",
        image: "/footcard/aspa.svg",
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id: 4,
        title: "Cauliflower Walnut Vegetarian Taco Meat"
        , image: "/footcard/tasko.svg",
        time: "30 Minutes",
        category: "Eastern",
    },
    {
        id: 5,
        title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        image: "/footcard/soup.svg",
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id: 6,
        title: "Barbeque Spicy Sandwiches with Chips",
        image: "/footcard/chips.svg",
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id: 7,
        title: "Firecracker Vegan Lettuce Wraps - Spicy!",
        image: "/footcard/wraps.svg",
        time: "30 Minutes",
        category: "Seafood",
    },
    {
        id: 8,
        title: "Chicken Ramen Soup with Mushroom",
        image: "/footcard/salad.svg",
        time: "30 Minutes",
        category: "Japanese",
    },
];

export default function FoodCards() {
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10 ">
                <h1 className="text-3xl font-bold mb-2 text-black">
                    Try this delicious recipe <br /> to make your day
                </h1>
                <p className="text-black mb-8 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua enim ad minim.
                </p>
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                {foods.map((food) => (
                    <div
                        key={food.id}
                        className="relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={food.image}
                            alt={food.title}
                            className="h-40 w-full object-cover"
                        />
                        <button
                            onClick={() => toggleFavorite(food.id)}
                            className="absolute top-3 right-3 bg-white/80 p-1 rounded-full shadow"
                        >
                            <Heart
                                size={20}
                                className={`${favorites.includes(food.id) ? "fill-red-500 text-red-500" : "text-gray-500"
                                    }`}
                            />
                        </button>
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2 text-black">
                                {food.title}
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>⏱ {food.time}</span>
                                <span>🍴 {food.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}