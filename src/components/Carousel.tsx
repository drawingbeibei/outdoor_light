import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  interval?: number;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  interval = 5000, 
  height = "500px" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 自动轮播效果
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      // 动画完成后重置过渡状态
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div 
      className="w-full overflow-hidden relative" 
      style={{ height }}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "100%" 
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 relative"
            style={{ height: "100%" }}
          >
            <img
              src={image}
              alt={`Carousel slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* 添加渐变覆盖层，使文字更清晰 */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/0"
            />
          </div>
        ))}
      </div>
      
      {/* 轮播指示器 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;