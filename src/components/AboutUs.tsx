import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
    const stats = [{
        value: "100W+",
        label: "Global Customers"
    }, {
        value: "80+",
        label: "Countries Served"
    }, {
        value: "18+",
        label: "Years Experience"
    }, {
        value: "90W+",
        label: "Number of positive reviews"
    }];

    const testimonials = [{
        id: 1,
        content: "I recently bought the POOFZY 200R RGBIC Smart Outdoor Lights, and they exceeded my expectations! The lights are super bright, waterproof, and perfect for decorating my house year-round. I love the app for remote control options — switching colors and effects is easy.",
        name: "Phoebe Buffay",
        location: "From USA",
        imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/外国人1_20251122025617.png"
    }, {
        id: 2,
        content: "Bought these Permanent Outdoor Lights for the holiday season and Diwali, and they've been absolutely fantastic! The color changing options are vibrant and beautiful, and easy to customize through the app. Perfect for setting different moods for each occasion.",
        name: "Monica Geller",
        location: "From USA",
        imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/外国人2_20251122025617.png"
    }, {
        id: 3,
        content: "These permanent outdoor colorful lights completely change the look of our house. The lights are very bright and of high quality. Installation was very straightforward, and we didn't need any professional help. The product was delivered on time and each exactly the same as specified by seller.",
        name: "Robert Green",
        location: "From USA",
        imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/外国人3_20251122025617.png"
    }];

    return (
        <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">ABOUT US</h2>
                    <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
                </div>
                <div
                    className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://s.coze.cn/image/g2cimRQIs3w/"
                                alt="Poofzy Team"
                                className="w-full h-auto min-h-[350px] object-cover" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Poofzy Outdoor Permanent Eave Lights
                                                                                                </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">All-Weather Durability: Built with IP67/IP68 waterproof ratings and corrosion-resistant materials (e.g., aluminum alloy housing), ensuring reliable performance in rain, snow, extreme temperatures (-39°C to 60°C), and UV exposure.
                                                                                                </p>
                        <p className="text-gray-600 leading-relaxed mb-6">Permanent Installation Design: Hardwired for stable, maintenance-free operation (no frequent battery replacements), with secure mounting brackets for seamless integration into eaves, gutters, or railings.
                                                                                                </p>
                        <Link
                            to="/about"
                            className="inline-block px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-300 flex items-center"
                            style={{
                                textAlign: "center"
                            }}>View More <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
                {}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
                    {stats.map((stat, index) => <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
                        <p className="text-gray-600 mt-2">{stat.label}</p>
                    </div>)}
                </div>
                {}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">OUR CUSTOMERS SAY</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Hear what our valued customers have to say about their experience with our products.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map(testimonial => <div
                            key={testimonial.id}
                            className="bg-orange-50 rounded-lg shadow-md p-6 relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="text-4xl text-orange-300 absolute top-4 left-4 opacity-50">"</div>
                            <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                                    <img
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                {}
                <div
                    className="mt-20 bg-blue-600 rounded-xl p-8 text-white max-w-6xl mx-auto"
                    style={{
                        backgroundColor: "#93B4FF"
                    }}>
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">CONTACT US</h2>
                        <p className="mt-2 opacity-90">Have questions? Reach out to our team for assistance.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-2xl mr-3"></i>
                            <span>support@poofzy.com</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone text-2xl mr-3"></i>
                            <span>+1 (800) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
                            <span>123 Lighting Street, City, State 12345</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;