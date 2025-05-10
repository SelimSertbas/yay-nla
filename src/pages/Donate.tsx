import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Landmark, Link as LinkIcon, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Donate = () => {
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
              {t('donate')}
            </h1>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('donate_description')}
            </p>

            {/* Donation Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Landmark size={40} className="text-bor-green mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bor-green-dark">{t('bank_transfer')}</h3>
                <div className="text-sm text-gray-600 mb-4 space-y-4">
                  <div>
                    <p className="font-semibold">Yenişehir Vakıf Zıraat</p>
                    <p>Hesap adı: Yenişehir Bor Ürünleri Vakfı</p>
                  </div>
                  <div>
                    <p className="font-semibold">TL Hesabı</p>
                    <p>Hesap No: 1402-97535830-5001</p>
                    <p>IBAN: TR290001001402975358305001</p>
                  </div>
                  <div>
                    <p className="font-semibold">USD Hesabı</p>
                    <p>Hesap No: 1402-97535830-5003</p>
                    <p>IBAN: TR720001001402975358305003</p>
                  </div>
                  <div>
                    <p className="font-semibold">EUR Hesabı</p>
                    <p>Hesap No: 1402-97535830-5004</p>
                    <p>IBAN: TR450001001402975358305004</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="text-xs text-center text-gray-500">
                    {t('secure_payment')}
                  </span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <LinkIcon size={40} className="text-bor-green mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bor-green-dark">Link ile Bağış</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Şimdilik aktif değil
                </p>
                <div className="flex flex-col space-y-3">
                  <Link to="/contact" className="w-full bg-bor-green text-white px-4 py-3 rounded-md font-medium hover:bg-bor-green-dark transition-all duration-300 text-center">
                    {t('contact_us_button')}
                  </Link>
                  <span className="text-xs text-center text-gray-500">
                    {t('secure_payment')}
                  </span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <Users size={40} className="text-bor-green mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bor-green-dark">{t('corporate_supporter')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('corporate_description')}
                </p>
                <Link to="/contact" className="w-full bg-white border border-bor-green text-bor-green px-4 py-3 rounded-md font-medium hover:bg-bor-green hover:text-white transition-all duration-300 flex justify-center items-center">
                  {t('contact_us_button')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
