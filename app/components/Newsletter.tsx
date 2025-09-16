import React from "react";

function Newsletter() {
    return (
        <div
            className="relative bg-blue-50 max-w-7xl mx-auto rounded-[60px] flex flex-col items-center text-center mb-40
                 px-6 py-16 md:px-12 overflow-hidden h-[600px] 
                 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/img/inboximg.svg')" }}
        >
            <div className="absolute inset-0 bg-white/30" />

            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    Deliciousness to your inbox
                </h2>

                <p className="text-gray-700 max-w-2xl mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua aliquat enim ad minim
                </p>

                <div className="flex items-center bg-white rounded-full shadow-md 
                        overflow-hidden max-w-md w-full">
                    <input
                        type="email"
                        placeholder="Your email address..."
                        className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition cursor-pointer">
                        Subscribe
                    </button>
                  </div>
            </div>
        </div>
    );
}

export default Newsletter;
