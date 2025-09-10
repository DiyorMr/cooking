import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-white px-6 md:px-12 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <img src="/img/logo.svg" alt="" />
                        <p className="text-gray-600 mt-2 max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        </p>
                    </div>
                    <nav className="flex gap-6 text-gray-800 font-medium">
                        <a href="#" className="hover:text-black">Recipes</a>
                        <a href="#" className="hover:text-black">Blog</a>
                        <a href="#" className="hover:text-black">Contact</a>
                        <a href="#" className="hover:text-black">About us</a>
                    </nav>
                </div>
                <hr className="my-8 border-gray-200" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2020 Flowbase. Powered by{" "}
                        <span className="text-red-500">Webflow</span>
                    </p>
                    <div className="flex gap-4 text-gray-700 text-lg">
                        <a href="#" className="hover:text-black">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-black">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-black">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
