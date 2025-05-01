import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Users, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-bor-beige overflow-hidden">
      <BackgroundAnimation />
      <Navbar />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-bor-green-dark text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('about_us')}
            </h1>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('about_us_description')}
            </p>

            {/* About Us Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <h2 className="text-3xl font-bold mb-6 text-bor-green-dark">{t('about_foundation')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('about_foundation_p1')}
                </p>
                <p className="text-gray-700 mb-6">
                  {t('about_foundation_p2')}
                </p>
                {/* Stats section removed as requested */}
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="relative">
                  <div className="w-full aspect-video bg-bor-green/20 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/uploads/ceadc832-e01a-4681-9169-758831124592.png" 
                        alt="YBV Logo" 
                        className="w-48 h-48 object-contain animate-pulse-subtle opacity-30"
                      />
                    </div>
                    <div className="z-10 text-center p-8">
                      <h3 className="text-2xl font-bold mb-2 text-bor-green-dark">Yenişehir Bor Vakfı</h3>
                      <p className="text-gray-700">2020'den beri doğaya ve insana hizmet ediyoruz</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bor-green/10 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>

            {/* Yönetim Kurulu */}
            <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-bor-green-dark text-center">{t('board_of_directors')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="h-64 bg-bor-green/5">
                    <img 
                      src="/uploads/d4e02c81-1df4-4527-8e1f-b7bdaaa62430.jpg"
                      alt="F. Bahar TÜRKAN" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-bor-green-dark">F. Bahar TÜRKAN</h3>
                    <p className="text-gray-600 font-medium mb-4">{t('board_president')}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="h-64 bg-bor-green/5">
                    <img 
                      src="/uploads/8374b808-8917-4e7a-bad6-31d5ee9628bc.png"
                      alt="İbrahim ALAGÖZ"  
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-bor-green-dark">İbrahim ALAGÖZ</h3>
                    <p className="text-gray-600 font-medium mb-4">{t('vice_president')}</p>
                    <p className="text-sm text-gray-500">İktisat - Lisans</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="h-64 bg-bor-green/5">
                    <img 
                      src="/uploads/90bf708e-a219-4f6f-84a6-323ea5702d03.png"
                      alt="Ebubekir ŞEN" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-bor-green-dark">Ebubekir ŞEN</h3>
                    <p className="text-gray-600 font-medium mb-4">{t('vice_president')}</p>
                    <p className="text-sm text-gray-500">Ziraat ve Hayvancılık</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kurucu Mütevelli Heyeti */}
            <div className="animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <h2 className="text-3xl font-bold mb-8 text-bor-green-dark text-center">{t('founding_board')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex">
                    <div className="w-1/3 h-40 bg-bor-green/5">
                      <img 
                        src="/uploads/642b63e6-3156-4d70-985b-1ac1e9c8d6a0.png"
                        alt="Volkan ALAGÖZ" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-1 text-bor-green-dark">Volkan ALAGÖZ</h3>
                      <p className="text-gray-600 font-medium mb-2">{t('founding_member')}</p>
                      <p className="text-sm text-gray-500">İşletme - Lisans</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex">
                    <div className="w-1/3 h-40 bg-bor-green/5">
                      <img 
                        src="/uploads/cdbd3a3d-52a1-4808-b021-6e611f9060b4.png"
                        alt="Asiye ASLAN" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-1 text-bor-green-dark">Asiye ASLAN</h3>
                      <p className="text-gray-600 font-medium mb-2">{t('founding_member')}</p>
                      <p className="text-sm text-gray-500">Eğitimci - Lisans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
