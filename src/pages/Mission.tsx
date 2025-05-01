
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Target, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-bor-beige overflow-hidden">
      <BackgroundAnimation />
      <Navbar />

      <main className="flex-grow">
        {/* Misyonumuz (Our Mission) Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-bor-green-dark text-center mb-12 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('our_mission')}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="bg-bor-green/5 p-8 rounded-lg border-l-4 border-bor-green relative overflow-hidden group hover:bg-bor-green/10 transition-all duration-500">
                  <Target size={40} className="text-bor-green mb-4 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="text-xl font-bold mb-3 text-bor-green-dark">{t('our_vision')}</h3>
                  <p className="text-gray-600">
                    Doğanın ve toplumun uyum içinde geliştiği, sürdürülebilir bir dünya için ilham veren çözümler 
                    üretmek ve yaymak.
                  </p>
                  <div className="absolute bottom-0 right-0 w-20 h-20 -mb-8 -mr-8 rounded-full bg-bor-green/5 group-hover:scale-150 transition-all duration-700"></div>
                </div>
              </div>
              
              <div className="animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="bg-bor-beige/20 p-8 rounded-lg border-l-4 border-bor-earth relative overflow-hidden group hover:bg-bor-beige/40 transition-all duration-500">
                  <Heart size={40} className="text-bor-earth mb-4 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="text-xl font-bold mb-3 text-bor-green-dark">{t('our_values')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-bor-earth mr-2"></div>
                      <span>{t('sustainability')}</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-bor-earth mr-2"></div>
                      <span>{t('transparency')}</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-bor-earth mr-2"></div>
                      <span>{t('innovation')}</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-bor-earth mr-2"></div>
                      <span>{t('community_focus')}</span>
                    </li>
                  </ul>
                  <div className="absolute bottom-0 right-0 w-20 h-20 -mb-8 -mr-8 rounded-full bg-bor-earth/5 group-hover:scale-150 transition-all duration-700"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-bor-green-dark">{t('our_goals')}</h3>
                <p className="text-gray-600 mb-8">
                  Vakfımızın hedefleri, doğal kaynakların korunması, sürdürülebilir tarımın desteklenmesi ve toplumsal 
                  kalkınmaya katkı sağlamaktır. Bu hedeflerimize ulaşmak için:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('nature')}</h4>
                    <p className="text-sm text-gray-600">
                      Ağaçlandırma ve yeşil alan projeleriyle karbon ayak izimizi azaltmak
                    </p>
                  </div>
                  
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('human')}</h4>
                    <p className="text-sm text-gray-600">
                      Eğitim ve sağlık alanlarında ihtiyaç sahiplerine destek olmak
                    </p>
                  </div>
                  
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('agriculture')}</h4>
                    <p className="text-sm text-gray-600">
                      Organik ve sürdürülebilir tarım uygulamalarını yaygınlaştırmak
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-bor-green-dark/5 p-8 rounded-lg animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <h3 className="text-2xl font-bold mb-6 text-bor-green-dark text-center">{t('our_principles')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-bor-green">{t('environmental_responsibility')}:</strong> Doğal kaynakların korunması ve çevre dostu uygulamaların yaygınlaştırılması için çalışıyoruz.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-bor-green">{t('innovation_principle')}:</strong> Sürdürülebilirlik için yenilikçi çözümler geliştirmeye odaklanıyoruz.
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-bor-green">{t('social_benefit')}:</strong> Tüm faaliyetlerimizde toplumun yaşam kalitesini arttırmayı hedefliyoruz.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-bor-green">{t('transparency_principle')}:</strong> Tüm faaliyetlerimizi şeffaf ve hesap verebilir bir şekilde yürütüyoruz.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong className="text-bor-green">{t('cooperation')}:</strong> Kamu, özel sektör ve sivil toplum kuruluşlarıyla işbirliği içinde çalışıyoruz.
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-bor-green">{t('sustainability_principle')}:</strong> Gelecek nesillere daha yaşanabilir bir dünya bırakmak için çalışıyoruz.
                  </p>
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

export default Mission;
