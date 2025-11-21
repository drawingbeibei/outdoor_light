import React from "react";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-orange-50 shadow-sm"
            style={{
                padding: "20px"
            }}>
            <div className="container mx-auto px-4 py-3 flex justify-center items-center">
                <div className="mr-16">
                    <img
                        src="https://s.coze.cn/t/KjdF1b4wBeA/"
                        alt="Poofzy Logo"
                        className="h-16 w-auto" />
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-blue-500 font-medium transition-colors">Home
                                                                                                                                   </Link>
                    <Link
                        to="/product"
                        className="text-gray-800 hover:text-blue-500 font-medium transition-colors">Product
                                                                                                                                   </Link>
                    <Link
                        to="/about"
                        className="text-gray-800 hover:text-blue-500 font-medium transition-colors">About Us
                                                                                                                                   </Link>
                    <Link
                        to="/contact"
                        className="text-gray-800 hover:text-blue-500 font-medium transition-colors">Contact Us
                                                                                                                                   </Link>
                </nav>
            </div>
        </header>
    );
};

export default NavigationBar;