import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "boron",
    title: "BORON ile Çevreci Tarım",
    image: "/images/boron/1.jpg",
    description: "Doğal toprak iyileştirici ürünümüz BORON ile sürdürülebilir tarım uygulamaları.",
    link: "/projects/boron"
  }
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-bor-beige">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-bor-green/10 to-transparent">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-bor-green-dark mb-6">
              {t('our_projects')}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('projects_description')}
            </p>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-16 bg-bor-beige/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden border border-bor-green/10 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-bor-green mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-bor-green font-medium">
                      {t("learn_more")}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
