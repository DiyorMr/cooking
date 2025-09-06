import { Instagram } from '@deemlol/next-icons';
import React from 'react'

const Out = () => {

    const posts = [
        {
            img: "/img/ins2.svg",
            text: "The vegetable dishes need to have certain vitamin for those people",
            date: "September 16",
        },
        {
            img: "/img/ins3.svg",
            text: "Sweet food can bring someone into happiness as long as they don’t eat it too much",
            date: "September 19",
        },
        {
            img: "/img/ins4.svg",
            text: "What are you doing before start cooking? prepare the table of ingredients!",
            date: "September 18",
        },
        {
            img: "/img/ins5.svg",
            text: "Steak flavor never be wrong, it is suitable for you who want romantic dinner",
            date: "September 19",
        },
    ];

    return (
        <div className='mx-auto my-5 w-full max-w-7xl text-center mt-60'>
            <h1 className='text-[48px] font-semibold text-black'>Check out @foodieland on Instagram</h1>
            <p className='text-base font-normal text-[#00000099]'>Lorem ipsum dolor sit amet,
                consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
            <div className="w-full bg-gradient-to-b from-white to-sky-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Instagram Posts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {posts.map((post, idx) => (
                            <div
                                key={idx}
                                className="bg-white border rounded-xl shadow-md overflow-hidden"
                            >
                                <img
                                    src={post.img}
                                    alt="Food post"
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-gray-700">{post.text}</p>
                                    <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Button */}
                    <div className="flex justify-center mt-12">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-3xl hover:bg-gray-800 transition"
                        >
                            <Instagram size={24} color="#FFFFFF" />
                            Visit Our Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Out