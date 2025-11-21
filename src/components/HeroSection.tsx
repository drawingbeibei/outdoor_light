import React from "react";
import Carousel from "./Carousel.tsx";

const HeroSection: React.FC = () => {
    // 轮播图片地址
    const carouselImages = [
        "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯轮播3_20251122033959.jpg",
        "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯轮播4_20251122033959.jpg"
    ];

    return (
        <section className="relative pt-16">
            <div className="w-full relative overflow-hidden">
                <Carousel 
                    images={carouselImages}
                    interval={4000}
                    height="500px"
                />
                {/* 添加文字覆盖层 */}
                <div 
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="text-center text-white px-4">
                         <h1
                             className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-white"
                         >
                             Poofzy Permanent Light - The Best Choice for Your Home Decoration
                         </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;