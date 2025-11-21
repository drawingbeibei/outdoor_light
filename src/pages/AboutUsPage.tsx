import React from "react";
import NavigationBar from "../components/NavigationBar.tsx";
import FloatingButton from "../components/FloatingButton.tsx";

const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-orange-50">
            <NavigationBar />
            <main className="flex-grow pt-16">
                <div
                    className="relative h-64"
                    style={{
                        backgroundImage: "url(https://space-static.coze.site/coze_space/7575074689770504489/upload/%E7%81%AF%E4%B8%BBA+2_1467x730.jpg?sign=1766345414-1525f20a50-0-0e6d4336dbc0e9e40e9c13922432c60d606b8f60d1bf46c451e93a9fdfd98c78)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 50%"
                    }}>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">About Us</h1>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Who We Are</h2>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>At Poofzy, we don’t just create permanent outdoor eave lights—we redefine how spaces interact with light, backed by a 100+ strong R&D team dedicated to pushing the boundaries of durability, design, and smart technology.</p>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>·Extreme Environment Testing: Our labs simulate -30°C to 60°C temperatures, 95% humidity, and 1000-hour UV exposure to ensure lights withstand decades of weather.</p>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>·Smart Control Innovation: Software engineers develop proprietary apps and IoT integrations, allowing users to customize colors, schedules, and energy usage via voice commands (Alexa/Google Home) or mobile devices.</p>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>·Sustainable Design: Materials scientists pioneer recyclable aluminum alloys and low-power LED chips, cutting energy consumption by 40% while extending lifespan to 50,000+ hours.</p>
                            <></>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://s.coze.cn/image/Ishz_D_Rqxw/"
                                alt="Our Team"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="rounded-lg overflow-hidden shadow-md order-2 md:order-1">
                            <img
                                src="https://s.coze.cn/image/G5uElRZSp-c/"
                                alt="Our Mission"
                                className="w-full h-full object-cover" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>“To turn every eave into a canvas of light that lasts generations.”</p>
                            <p
                                className="text-gray-600 mb-4 leading-relaxed"
                                style={{
                                    fontSize: "20px"
                                }}>From initial sketch to final product, every Poofzy light is touched by the passion of 100+ innovators who refuse to compromise on quality. We don’t follow trends—we create them.
                                                                                                                                “Lighting isn’t just about brightness. It’s about building a legacy of illumination.”</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <p className="text-3xl font-bold text-orange-500">1000+</p>
                            <p className="text-gray-600 mt-2">Global Customers</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <p className="text-3xl font-bold text-orange-500">80+</p>
                            <p className="text-gray-600 mt-2">Countries Served</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <p className="text-3xl font-bold text-orange-500">18+</p>
                            <p className="text-gray-600 mt-2">Years Experience</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-8 mt-auto">
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

export default AboutUsPage;