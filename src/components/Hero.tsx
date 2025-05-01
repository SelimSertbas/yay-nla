import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[85vh] flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bor-gold2/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-bor-gold/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-bor-gold2/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-xl mx-auto text-center mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <img 
            src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
            alt="YBV Logo" 
            className="w-36 h-36 object-contain mx-auto animate-float logo-shadow"
          />
        </div>
      
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 relative">
            {t('hero_title')}
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-bor-gold2 animate-grow"></span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <Link 
              to="/projects" 
              className="bg-bor-gold2 hover:bg-bor-gold2-dark text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center transform hover:translate-y-[-4px]"
            >
              {t('our_projects_button')}
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
            <Link 
              to="/donate" 
              className="bg-bor-gold2-dark hover:bg-bor-gold2-darkest text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg transform hover:translate-y-[-4px]"
            >
              {t('support_button')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider with animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative w-full h-20 overflow-hidden">
          <div className="absolute inset-0 animate-wave opacity-30">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 100" 
              className="w-full h-auto"
            >
              <path 
                fill="#F9F7F3" 
                fillOpacity="1" 
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
              ></path>
            </svg>
          </div>
          <div className="absolute inset-0 animate-wave opacity-30" style={{ animationDelay: '-5s' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 100" 
              className="w-full h-auto"
            >
              <path 
                fill="#F9F7F3" 
                fillOpacity="1" 
                d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
              ></path>
            </svg>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 100" 
            className="w-full h-auto absolute bottom-0"
          >
            <path 
              fill="#F9F7F3" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
