import React, { useState, useEffect } from "react";
  import { useParams, Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";
import FloatingButton from "../components/FloatingButton.tsx";

// 产品数据接口
interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  // 添加更多详情页需要的字段
  features?: string[];
  specifications?: {
    length: string;
    color: string;
    waterproof: string;
    power: string;
    control: string;
  };
  installationTips?: string;
  warranty?: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // 模拟产品数据库
  const productDatabase: Product[] = [
    {
      id: 1,
      name: "POOFZY 200ft RGBIC Smart Outdoor Lights",
      category: "Product Introduction",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯主图_20251122024413.jpg",
      description: "Our flagship 200ft RGBIC smart outdoor permanent lights with app control, waterproof design, and customizable lighting effects for all occasions.",
      features: [
        "RGBIC technology for multicolor effects",
        "200ft length with 200+ LED bulbs",
        "IP67 waterproof rating",
        "App control with voice integration (Alexa/Google Home)",
        "50+ preset lighting effects",
        "Timer and scheduling功能"
      ],
      specifications: {
        length: "200ft",
        color: "RGBIC (16 million colors)",
        waterproof: "IP67",
        power: "12V DC",
        control: "Mobile App, Voice Control"
      },
      installationTips: "Professional installation recommended for best results. Ensure proper weatherproofing of connections.",
      warranty: "5-year limited warranty"
    },
    {
      id: 3,
      name: "POOFZY 150ft RGBIC Smart Outdoor Lights",
      category: "Installation Instructions",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯安装_20251122024413.png",
      description: "Versatile 150ft RGBIC smart outdoor permanent lights perfect for medium-sized homes with all the smart features of our larger models.",
      features: [
        "RGBIC technology for dynamic lighting",
        "150ft length with 150+ LED bulbs",
        "IP67 waterproof rating",
        "App control with voice integration",
        "40+ preset lighting effects",
        "Energy-efficient design"
      ],
      specifications: {
        length: "150ft",
        color: "RGBIC (16 million colors)",
        waterproof: "IP67",
        power: "12V DC",
        control: "Mobile App, Voice Control"
      },
      installationTips: "Easy DIY installation with included mounting hardware. Follow the installation guide for best practices.",
      warranty: "5-year limited warranty"
    },
    {
      id: 5,
      name: "POOFZY 100ft RGBIC Smart Outdoor Lights",
      category: "Software Usage Instructions",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/软件说明_20251122024413.png",
      description: "Compact 100ft RGBIC smart outdoor permanent lights ideal for smaller homes, patios, and business storefronts.",
      features: [
        "RGBIC technology for vibrant colors",
        "100ft length with 100+ LED bulbs",
        "IP67 waterproof rating",
        "App control with intuitive interface",
        "30+ preset lighting effects",
        "Compact design for tight spaces"
      ],
      specifications: {
        length: "100ft",
        color: "RGBIC (16 million colors)",
        waterproof: "IP67",
        power: "12V DC",
        control: "Mobile App"
      },
      installationTips: "Perfect for DIY installation. Flexible design allows for easy mounting on various surfaces.",
      warranty: "3-year limited warranty"
    },
    {
      id: 7,
      name: "POOFZY 50ft RGB Smart Outdoor Lights",
      category: "Effect Showcase",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/323819545090/attachment/灯展示_20251122024413.png",
      description: "Compact 50ft RGB smart outdoor permanent lights perfect for accent lighting, decks, and smaller outdoor spaces.",
      features: [
        "RGB technology for vibrant colors",
        "50ft length with 50+ LED bulbs",
        "IP65 waterproof rating",
        "Simple remote control",
        "20+ preset lighting effects",
        "Energy-saving design"
      ],
      specifications: {
        length: "50ft",
        color: "RGB (16 million colors)",
        waterproof: "IP65",
        power: "12V DC",
        control: "Remote Control"
      },
      installationTips: "Easy plug-and-play installation. Perfect for beginners or temporary installations.",
      warranty: "2-year limited warranty"
    }
  ];

  useEffect(() => {
    // 在实际应用中，这里应该是API调用
    // 模拟API请求延迟
    const timer = setTimeout(() => {
      const foundProduct = productDatabase.find(p => p.id === parseInt(id || '0'));
      setProduct(foundProduct || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-orange-50">
        <NavigationBar />
        <main className="flex-grow flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-orange-50">
        <NavigationBar />
        <main className="flex-grow flex items-center justify-center pt-16">
          <div className="text-center px-4">
            <div className="text-gray-400 mb-4">
              <i className="fas fa-box-open text-6xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Product not found</h3>
            <p className="text-gray-500 mb-6">The requested product could not be found.</p>
            <a 
              href="/product" 
              className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Back to Products
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <NavigationBar />
      <main className="flex-grow pt-16">
        <div
          className="relative h-64"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%"
          }}>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{product.name}</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-orange-500 mb-2">{product.category}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.specifications && (
                  <>
                    <div className="text-gray-600"><strong>Length:</strong> {product.specifications.length}</div>
                    <div className="text-gray-600"><strong>Color:</strong> {product.specifications.color}</div>
                    <div className="text-gray-600"><strong>Waterproof:</strong> {product.specifications.waterproof}</div>
                    <div className="text-gray-600"><strong>Power:</strong> {product.specifications.power}</div>
                    <div className="text-gray-600"><strong>Control:</strong> {product.specifications.control}</div>
                  </>
                )}
              </div>
              
               <div className="flex gap-4">
                <Link 
                  to="/product" 
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex-1 text-center"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Installation Tips</h4>
                <p className="text-gray-600">{product.installationTips}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Warranty Information</h4>
                <p className="text-gray-600">{product.warranty}</p>
              </div>
            </div>
          </div>
          
           <div className="text-center">
            <Link 
              to="/product" 
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-lg"
            >
              Browse All Products
            </Link>
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

export default ProductDetailPage;