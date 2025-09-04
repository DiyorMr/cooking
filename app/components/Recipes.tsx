"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";

type Recipe = {
    id: number;
    title: string;
    image: string;
    time: string;
    category: string;
};

const recipes: Recipe[] = [
    {
        id: 1,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: "simple/big.svg",
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id: 2,
        title: "Fresh Lime Roasted Salmon with Ginger Sauce",
        image: "simple/sause.svg",
        time: "30 Minutes",
        category: "Fish",
    },
    {
        id: 3,
        title: "Strawberry Oatmeal Pancake with Honey Syrup",
        image: "simple/pancake.svg",
        time: "30 Minutes",
        category: "Breakfast",
    },
    {
        id: 4,
        title: "Fresh and Healthy Mixed Mayonnaise Salad",
        image: "simple/salad.svg",
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id: 5,
        title: "Chicken Meatballs with Cream Cheese",
        image: "simple/chasse.svg",
        time: "30 Minutes",
        category: "Meat",
    },
    {
        id: 6,
        title: "Fruity Pancake with Orange & Blueberry",
        image: "simple/orange.svg",
        time: "30 Minutes",
        category: "Sweet",
    },
    {
        id: 7,
        title: "The Best Easy One Pot Chicken and Rice",
        image: "simple/rise.svg",
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id: 8,
        title: "The Creamiest Creamy Chicken and Bacon Pasta",
        image: "simple/pasta.svg",
        time: "30 Minutes",
        category: "Noodles",
    },
     {
        id: 7,
        title: "Fruity Pancake with Orange & Blueberry",
        image: "simple/chasse.svg",
        time: "30 Minutes",
        category: "Sweet",
    },
];

const Recipes: React.FC = () => {
    const [liked, setLiked] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        setLiked((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="px-6 py-10 mx-auto my-5 w-full max-w-7xl">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black">Simple and tasty recipes</h2>
                <p className="text-[#00000099] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="relative rounded-[30px] bg-gradient-to-b from-[rgba(231,249,253,0)] to-[rgba(231,249,253,1)] shadow hover:shadow-lg transition overflow-hidden"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />

                        <button
                            onClick={() => toggleLike(recipe.id)}
                            className="absolute top-3 right-3 bg-white/70 rounded-full p-2 hover:scale-110 transition"
                        >
                            <Heart
                                className={`h-5 w-5 ${liked.includes(recipe.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                                    }`}
                            />
                        </button>

                        <div className="p-4">
                            <h3 className="font-semibold text-base line-clamp-2 text-black">{recipe.title}</h3>
                            <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
                                <span>{recipe.time}</span>
                                <span>•</span>
                                <span>{recipe.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recipes;
