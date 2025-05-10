import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";

const boronImages = [
  "/images/boron/1.jpg",
  "/images/boron/2.jpg",
  "/images/boron/3.jpg",
  "/images/boron/4.jpg",
  "/images/boron/5.jpg",
  "/images/boron/6.jpg",
  "/images/boron/7.jpg",
  "/images/boron/8.jpg",
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [modalImg, setModalImg] = useState<string | null>(null);

  const project = {
    id: "boron",
    title: "BORON ile Çevreci Tarım",
    description: "BORON, geliştirdiğimiz tamamen doğal bir toprak iyileştirici üründür. Kimyasal gübre ve ilaçlara gerek kalmadan toprağınızı zenginleştirerek, daha sağlıklı ve verimli ürünler yetiştirmenize olanak tanır."
  };

  if (projectId !== project.id) {
    return (
      <div className="min-h-screen flex flex-col bg-bor-beige">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-bor-green mb-4">404</h1>
            <p className="text-gray-600 mb-8">Proje bulunamadı</p>
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center px-6 py-3 bg-bor-green text-white rounded-lg hover:bg-bor-green/90 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Projelere Dön
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-bor-beige">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-bor-green/10 to-transparent">
          <div className="container-custom">
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center text-bor-green hover:text-bor-green-dark mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              {t("our_projects")}
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-bor-green-dark mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-6">
              {project.description}
            </p>
          </div>
        </section>

        {/* BORON Uygulama Anları - Tüm Fotoğraflar */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-bor-green mb-6">Vakfımızın tamamen organik olan BORON gübremizi çiftçilerimiz ile buluşturma anlarımız</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {boronImages.map((src, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={() => setModalImg(src)}>
                  <img src={src} alt={`BORON Uygulama ${idx+1}`} className="w-full h-64 object-cover transition-transform duration-200 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PPTX Section */}
        <section className="py-12 bg-bor-beige/70">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-bor-green mb-6">Vakfımız tarafından meyve bahçesine yatırım yapmak isteyen yatırımcılarına teklif bahçelerimiz</h2>
            <ul className="space-y-4">
              <li>
                <a href="/pdf/antep-fistigi-bahcesi.pptx" target="_blank" rel="noopener noreferrer" className="text-bor-green hover:underline font-medium">Antep Fıstığı Bahçesi</a>
              </li>
              <li>
                <a href="/pdf/ceviz-bahcesi.pptx" target="_blank" rel="noopener noreferrer" className="text-bor-green hover:underline font-medium">Ceviz Bahçesi</a>
              </li>
              <li>
                <a href="/pdf/elma-bahcesi.pptx" target="_blank" rel="noopener noreferrer" className="text-bor-green hover:underline font-medium">Elma Bahçesi</a>
              </li>
              <li>
                <a href="/pdf/elma-seftali-nektarin-bahcesi.pptx" target="_blank" rel="noopener noreferrer" className="text-bor-green hover:underline font-medium">Elma, Şeftali, Nektarin Bahçesi</a>
              </li>
              <li>
                <a href="/pdf/narenciye-bahcesi.pptx" target="_blank" rel="noopener noreferrer" className="text-bor-green hover:underline font-medium">Narenciye Bahçesi</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Modal for large image */}
        {modalImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setModalImg(null)}
          >
            <img
              src={modalImg}
              alt="Büyük Görsel"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail; 