import React from 'react';

const FloatingButton: React.FC = () => {
  return (
    <button 
      className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
      aria-label="Quick action"
    >
      <i className="fas fa-plus text-xl"></i>
    </button>
  );
};

export default FloatingButton;