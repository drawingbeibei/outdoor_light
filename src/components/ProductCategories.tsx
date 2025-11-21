import React from "react";
import { Link } from "react-router-dom";

// 调整产品分类顺序，使其与Products页面的商品顺序一致
const productCategories = [{
    id: 1,
    name: "POOFZY 200ft RGBIC Smart Outdoor Lights",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯主图_20251122024413.jpg",
    alt: "POOFZY 200ft RGBIC Smart Outdoor Lights"
}, {
    id: 3,
    name: "POOFZY 150ft RGBIC Smart Outdoor Lights",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯安装_20251122024413.png",
    alt: "POOFZY 150ft RGBIC Smart Outdoor Lights"
}, {
    id: 5,
    name: "POOFZY 100ft RGBIC Smart Outdoor Lights",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/软件说明_20251122024413.png",
    alt: "POOFZY 100ft RGBIC Smart Outdoor Lights"
}, {
    id: 7,
    name: "POOFZY 50ft RGB Smart Outdoor Lights",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯展示_20251122024413.png",
    alt: "POOFZY 50ft RGB Smart Outdoor Lights"
}];

const ProductCategories: React.FC = () => {
    return (
        <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">PRODUCT CATEGORIES</h2>
                    <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                     {productCategories.map(category => (
                        <Link 
                            key={category.id}
                            to={`/product/${category.id}`}
                            className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                        >
                            <div className="aspect-square bg-gray-200 overflow-hidden">
                                <img
                                    src={category.imageUrl}
                                    alt={category.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 w-full">
                                    <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/product"
                        className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-300 flex items-center justify-center mx-auto max-w-[20%]">All Categories <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;