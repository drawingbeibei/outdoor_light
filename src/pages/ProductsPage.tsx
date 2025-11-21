import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";
import FloatingButton from "../components/FloatingButton.tsx";

const productData = [{
    id: 1,
    name: "POOFZY 200ft RGBIC Smart Outdoor Lights",
    category: "Product Introduction",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯主图_20251122024413.jpg",
    description: "Our flagship 200ft RGBIC smart outdoor permanent lights with app control, waterproof design, and customizable lighting effects for all occasions."
}, {
    id: 3,
    name: "POOFZY 150ft RGBIC Smart Outdoor Lights",
    category: "Installation Instructions",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯安装_20251122024413.png",
    description: "Versatile 150ft RGBIC smart outdoor permanent lights perfect for medium-sized homes with all the smart features of our larger models."
}, {
    id: 5,
    name: "POOFZY 100ft RGBIC Smart Outdoor Lights",
    category: "Software Usage Instructions",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/软件说明_20251122024413.png",
    description: "Compact 100ft RGBIC smart outdoor permanent lights ideal for smaller homes, patios, and business storefronts."
}, {
    id: 7,
    name: "POOFZY 50ft RGB Smart Outdoor Lights",
    category: "Effect Showcase",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯展示_20251122024413.png",
    description: "Compact 50ft RGB smart outdoor permanent lights perfect for accent lighting, decks, and smaller outdoor spaces."
}];

const ProductsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const filteredProducts = selectedCategory === "All" ? productData : productData.filter(product => product.category === selectedCategory);

    const categories = [
        "All",
        ...Array.from(new Set(productData.map(product => product.category)))
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <main className="flex-grow bg-orange-50 pt-16">
                <div
                    className="relative h-64"
                    style={{
                        backgroundImage: "url(https://space-static.coze.site/coze_space/7575074689770504489/upload/%E7%81%AF%E4%B8%BBA+2_1467x730.jpg?sign=1766345398-71a8451a99-0-0935a92f74b0f5a850bd03d274172590e11973b6ae9c23c513aeb85314c6ddf4)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 50%"
                    }}>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Our Products</h1>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <></>
                    {}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(category => <></>)}
                    </div>
                    <></>
                    {}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {filteredProducts.map(product => <div
                            key={product.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="aspect-square bg-gray-100 overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="text-sm text-orange-500 mb-1">{product.category}</div>
                                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                                <div className="flex justify-end items-center mt-4">
                                     <Link
                                         to={`/product/${product.id}`}
                                         className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors flex items-center justify-center">
                                         Details
                                         <i className="fas fa-arrow-right ml-2"></i>
                                     </Link>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    {}
                    {filteredProducts.length === 0 && <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <i className="fas fa-box-open text-6xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-6">Try selecting a different category</p>
                        <button
                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                            onClick={() => setSelectedCategory("All")}>View All Products
                                                                                                                                                                                                                                              </button>
                    </div>}
                </div>
            </main>
            <footer className="bg-orange-50 py-8 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
                                <li><Link to="/product" className="text-gray-600 hover:text-orange-500">Product</Link></li>
                                <li><Link to="/about" className="text-gray-600 hover:text-orange-500">About Us</Link></li>
                                <li><Link to="/contact" className="text-gray-600 hover:text-orange-500">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-4">Product Categories</h4>
                            <ul className="space-y-2">
                                {categories.filter(cat => cat !== "All").map(category => <li key={category}>
                                    <button
                                        className="text-gray-600 hover:text-orange-500"
                                        onClick={() => setSelectedCategory(category)}>
                                        {category}
                                    </button>
                                </li>)}
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
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">Copyright © 2025 Poofzy Outdoor Permanent Eave Lights<br />Powered by HK
                                                                                                                                                                                                                                            </p>
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

export default ProductsPage;