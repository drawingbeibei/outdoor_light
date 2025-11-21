import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";
import FloatingButton from "../components/FloatingButton.tsx";

const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-orange-50">
            <NavigationBar />
            <main className="flex-grow pt-16">
                 <div
                    className="relative h-64"
                    style={{
                        backgroundImage: "url(https://space-static.coze.site/coze_space/7575074689770504489/upload/%E7%81%AF%E4%B8%BBA+2_1467x730.jpg?sign=1766345428-36f0c6202c-0-efd7cbd66e07254addfa8abd7b5fcafc97dce8ebd5e07ed691ddcc61bc93c75f)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 50%"
                    }}>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Contact Us</h1>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-6">
                    <></>
                    <div className="max-w-6xl mx-auto">
                        <div
                            className="text-center mb-12"
                            style={{
                                padding: "30px"
                            }}>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                            <p className="text-gray-600">We're here to help and answer any question you might have</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {}
                                <div className="p-8 bg-gray-50">
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                            <i className="fas fa-info-circle text-orange-500 mr-2"></i>Contact Information
                                                                                                                                                                                                                                                                    </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                                                    <i className="fas fa-envelope text-orange-500"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">EMAIL</p>
                                                    <p className="text-gray-600">keyf0808@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                                                    <i className="fas fa-phone text-orange-500"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">PHONE NUMBER</p>
                                                    <p className="text-gray-600">+86-17801466334</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                                                    <i className="fas fa-map-marker-alt text-orange-500"></i>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-700">ADDRESS</p>
                                                    <p className="text-gray-600">No.2875 Beichen West Road, Shaoxing, Zhejiang, China</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us:</h3>
                                        <div className="flex space-x-3">
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-200 transition-colors">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors">
                                                <i className="fab fa-weixin"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors">
                                                <i className="fab fa-weibo"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {}
                                <div className="p-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <i className="fas fa-paper-plane text-orange-500 mr-2"></i>Send Us a Message
                                                                                                                                                                                                                                            </h3>
                                    <form>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                                        </div>
                                        <div className="mb-6">
                                            <textarea
                                                placeholder="Your Message"
                                                rows={5}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center">SEND MESSAGE <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-8 mt-auto bg-orange-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-600 hover:text-orange-500">Home</a></li>
                                <li><a href="/product" className="text-gray-600 hover:text-orange-500">Product</a></li>
                                <li><a href="/about" className="text-gray-600 hover:text-orange-500">About Us</a></li>
                                <li><a href="/contact" className="text-gray-600 hover:text-orange-500">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Product Categories</h4>
                            <ul className="space-y-2">
                                <li><a href="/product" className="text-gray-600 hover:text-orange-500">屋檐灯200ft</a></li>
                                <li><a href="/product" className="text-gray-600 hover:text-orange-500">屋檐灯150ft</a></li>
                                <li><a href="/product" className="text-gray-600 hover:text-orange-500">屋檐灯100ft</a></li>
                                <li><a href="/product" className="text-gray-600 hover:text-orange-500">屋檐灯50ft</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <i className="fas fa-envelope mt-1 mr-2"></i>
                                    <span>keyf0808@gmail.com</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone mt-1 mr-2"></i>
                                    <span>+86-17801466334</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                                    <span>No.2875 Beichen West Road, Shaoxing, Zhejiang, China</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">Copyright © 2025 Poofzy Outdoor Permanent Eave Lights<br />Powered by HK</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-orange-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500">
                                <i className="fab fa-weixin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <FloatingButton />
        </div>
    );
};

export default ContactUsPage;