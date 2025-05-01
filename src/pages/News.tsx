import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-bor-beige overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(/uploads/66518c75-45ee-4b03-83b4-c491fa6e755c.png)`,
          filter: 'blur(3px) brightness(0.7)'
        }}
      />
      
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-2xl mx-4">
          <img 
            src="/uploads/66518c75-45ee-4b03-83b4-c491fa6e755c.png"
            alt="Yenişehir Bor Vakfı Logo"
            className="w-40 h-40 mx-auto object-contain drop-shadow-lg"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            {t('news')}
          </h2>
          <p className="text-xl text-white/90 leading-relaxed font-medium drop-shadow-sm">
            Vakfımızın güncel haberlerini ve duyurularını çok yakında bu sayfada bulabileceksiniz.
          </p>
          <div className="pt-4">
            <span className="inline-block px-6 py-3 bg-bor-gold2/80 text-white font-medium rounded-lg backdrop-blur-sm shadow-lg">
              Çok Yakında Sizlerle...
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
