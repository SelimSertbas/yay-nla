import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  icon,
  index,
  className,
}) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-lg transition-all duration-500 hover:shadow-lg flex flex-col items-center text-center animate-fade-up group relative",
        className
      )}
      style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
    >
      <div className="p-3 bg-bor-gold2/10 rounded-full mb-5 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-bor-gold2/20">
        <div className="w-16 h-16 flex items-center justify-center text-bor-gold2">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-bor-gold2-dark transition-all duration-300 group-hover:text-bor-gold2">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      <div className="w-12 h-1 bg-bor-gold2/30 rounded mt-4 transition-all duration-300 group-hover:w-24 group-hover:bg-bor-gold2/60"></div>
      
      {/* Logo watermark */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 opacity-10 rotate-12 transform group-hover:rotate-0 transition-all duration-500">
        <img 
          src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
          alt="YBV Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default FeatureBlock;
