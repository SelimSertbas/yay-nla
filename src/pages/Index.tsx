import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBlock from "@/components/FeatureBlock";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Leaf, Book, Users, ArrowRight, TreeDeciduous, 
  Droplets, Bird, Sprout, Newspaper, Info, 
  Heart, MessageCircle, Landmark, Target,
  Phone, MapPin, Facebook, Twitter, Instagram
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Başarılı!",
        description: "Mesajınız başarıyla gönderildi.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Hata!",
        description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-bor-beige overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <Hero />

      <main>
        {/* Haberler (News) Section */}
        <section className="section bg-white/80 backdrop-blur-sm relative z-10" id="news">
          <div className="container-custom">
            <h2 className="text-center section-title animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('news')}
            </h2>
            <p className="text-center section-description animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('projects_description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/10 flex items-center justify-center">
                  <Newspaper size={40} className="text-bor-green" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-bor-earth">12 Nisan 2025</span>
                  <h3 className="font-bold text-xl mb-2 text-bor-green-dark">{t('boron_project')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/news" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('news')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/10 flex items-center justify-center">
                  <Newspaper size={40} className="text-bor-green" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-bor-earth">5 Nisan 2025</span>
                  <h3 className="font-bold text-xl mb-2 text-bor-green-dark">{t('afforestation')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/news" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('news')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/10 flex items-center justify-center">
                  <Newspaper size={40} className="text-bor-green" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-bor-earth">28 Mart 2025</span>
                  <h3 className="font-bold text-xl mb-2 text-bor-green-dark">{t('student_scholarships')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/news" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('news')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hakkımızda (About) Section */}
        <section className="section bg-bor-beige/80 backdrop-blur-sm relative z-10" id="about">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                <h2 className="section-title mb-6">{t('about')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('about_foundation_p1')}
                </p>
                <p className="text-gray-700 mb-6">
                  {t('about_foundation_p2')}
                </p>
                {/* Stats section removed as requested */}
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="relative">
                  <div className="w-full aspect-video bg-bor-green/20 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
                        alt="YBV Logo" 
                        className="w-48 h-48 object-contain animate-pulse-subtle opacity-30"
                      />
                    </div>
                    <div className="z-10 text-center p-8">
                      <h3 className="text-2xl font-bold mb-2 text-bor-green-dark">Yenişehir Bor Vakfı</h3>
                      <p className="text-gray-700">{t('about_us_description')}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bor-green/10 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misyonumuz (Our Mission) Section */}
        <section className="section bg-white/80 backdrop-blur-sm relative z-10" id="mission">
          <div className="container-custom">
            <h2 className="text-center section-title mb-10 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('our_mission')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="bg-bor-green/5 p-8 rounded-lg border-l-4 border-bor-green relative overflow-hidden group hover:bg-bor-green/10 transition-all duration-500">
                  <Target size={40} className="text-bor-green mb-4 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="text-xl font-bold mb-3 text-bor-green-dark">{t('our_vision')}</h3>
                  <p className="text-gray-600">
                    {t('about_us_description')}
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
            
            <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-bor-green-dark">{t('our_goals')}</h3>
                <p className="text-gray-600 mb-8">
                  {t('projects_description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('nature')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('afforestation_description').substring(0, 70)}...
                    </p>
                  </div>
                  
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('human')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('scholarship_description').substring(0, 70)}...
                    </p>
                  </div>
                  
                  <div className="p-4 border border-bor-green/20 rounded-lg hover:border-bor-green/60 hover:bg-bor-green/5 transition-all duration-300">
                    <h4 className="font-bold text-bor-green mb-2">{t('agriculture')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('boron_description').substring(0, 70)}...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section bg-bor-beige/80 backdrop-blur-sm relative z-10" id="summary">
          <div className="container-custom">
            <h2 className="text-center section-title animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('hero_title')}
            </h2>
            <p className="text-center section-description animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('hero_subtitle')}
            </p>
          </div>
        </section>

        {/* Three Feature Blocks */}
        <section className="section bg-white/80 backdrop-blur-sm relative z-10" id="projects">
          <div className="container-custom">
            <h2 className="text-center section-title mb-12 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('our_projects')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* BORON Feature */}
              <FeatureBlock 
                title={t('boron_project')} 
                description={t('boron_description')}
                icon={<Sprout size={40} className="animate-bounce" />}
                index={0}
                className="bg-white/90 backdrop-blur-sm hover:bg-white hover:-translate-y-2 transition-all duration-500"
              />
              
              {/* Yardım Projeleri */}
              <FeatureBlock 
                title={t('education_projects')} 
                description={t('scholarship_description')}
                icon={<Users size={40} className="animate-pulse" />}
                index={1}
                className="bg-white/90 backdrop-blur-sm hover:bg-white hover:-translate-y-2 transition-all duration-500"
              />
              
              {/* Doğal Yaşam Koruma */}
              <FeatureBlock 
                title={t('nature_protection_projects')} 
                description={t('afforestation_description')}
                icon={<Leaf size={40} className="animate-bounce" />}
                index={2}
                className="bg-white/90 backdrop-blur-sm hover:bg-white hover:-translate-y-2 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* Detailed BORON Section - Updated to show "Çok Yakında Sizlerle..." */}
        <section className="section bg-bor-beige/80 backdrop-blur-sm relative z-10">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                <div className="rounded-xl overflow-hidden bg-gradient-green h-72 flex items-center justify-center transform transition-transform duration-700 hover:scale-105">
                  <Book size={100} className="text-white animate-float" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <h2 className="section-title">{t('boron_project')}</h2>
                <p className="text-gray-600 mb-6 text-xl">
                  Çok Yakında Sizlerle...
                </p>
                <Link to="/projects" className="btn-primary inline-flex items-center transform transition-transform duration-300 hover:scale-105">
                  {t('our_projects_button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Projects */}
        <section className="section bg-white/80 backdrop-blur-sm relative z-10">
          <div className="container-custom">
            <h2 className="text-center section-title mb-10 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('nature_protection_projects')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/20 flex items-center justify-center overflow-hidden">
                  <TreeDeciduous size={60} className="text-bor-green transform transition-transform duration-700 hover:scale-125" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-bor-green-dark">{t('afforestation')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/projects" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('our_projects_button')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/20 flex items-center justify-center overflow-hidden">
                  <Droplets size={60} className="text-bor-green transform transition-transform duration-700 hover:scale-125" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-bor-green-dark">{t('water_resources')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/projects" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('our_projects_button')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="h-40 bg-bor-green/20 flex items-center justify-center overflow-hidden">
                  <Bird size={60} className="text-bor-green transform transition-transform duration-700 hover:scale-125" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-bor-green-dark">{t('wildlife')}</h3>
                  <p className="text-gray-600 mb-4">
                    Çok Yakında Sizlerle...
                  </p>
                  <Link to="/projects" className="text-bor-green font-medium hover:underline inline-flex items-center group">
                    {t('our_projects_button')}
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action / Bağış Section */}
        <section className="py-20 bg-gradient-to-r from-bor-green to-bor-green-dark text-white relative z-10" id="donate">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('donate_title')}
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('donate_description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg hover:bg-white/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <Landmark size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{t('bank_transfer')}</h3>
                <p className="text-sm text-white/80 mb-4">TR12 3456 7890 1234 5678 9012 34</p>
                <span className="inline-block text-xs bg-white/30 px-3 py-1 rounded-full">Yenişehir Bor Vakfı</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg hover:bg-white/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <Heart size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Link ile Bağış</h3>
                <p className="text-sm text-white/80 mb-4">Buradan link ile bağış yapabilirsiniz</p>
                <Link to="/donate" className="inline-block bg-white text-bor-green-dark px-4 py-2 rounded-md font-medium hover:bg-bor-gold hover:text-white transition-all duration-300">
                  {t('donate_button')}
                </Link>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg hover:bg-white/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                <Users size={40} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{t('corporate_supporter')}</h3>
                <p className="text-sm text-white/80 mb-4">{t('corporate_description')}</p>
                <Link to="/contact" className="inline-block bg-white text-bor-green-dark px-4 py-2 rounded-md font-medium hover:bg-bor-gold hover:text-white transition-all duration-300">
                  {t('contact_us_button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section bg-white/80 backdrop-blur-sm relative z-10" id="contact">
          <div className="container-custom">
            <h2 className="text-center section-title mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('contact_us')}
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                <div className="bg-bor-beige/30 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-6 text-bor-green-dark border-b border-bor-green/20 pb-3">{t('contact_info')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle size={20} className="text-bor-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-green-dark">{t('email_address')}</h4>
                        <p className="text-gray-600">borvakfimedya@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone size={20} className="text-bor-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-green-dark">{t('phone_number')}</h4>
                        <p className="text-gray-600">+90 (532) 123 45 67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={20} className="text-bor-green" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-green-dark">{t('address')}</h4>
                        <p className="text-gray-600">İstanbul, Yenişehir</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-bor-green/20">
                      <h4 className="font-medium mb-3 text-bor-green-dark">{t('follow_us')}</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center hover:bg-bor-green hover:text-white transition-all duration-300">
                          <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center hover:bg-bor-green hover:text-white transition-all duration-300">
                          <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-bor-green/10 flex items-center justify-center hover:bg-bor-green hover:text-white transition-all duration-300">
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('name_surname')}
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-bor-green/30 focus:border-bor-green focus:ring-bor-green/50 hover:border-bor-green/50 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('email')}
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-bor-green/30 focus:border-bor-green focus:ring-bor-green/50 hover:border-bor-green/50 transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('subject')}
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border-bor-green/30 focus:border-bor-green focus:ring-bor-green/50 hover:border-bor-green/50 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all border-bor-green/30 focus:border-bor-green focus:ring-bor-green/30 hover:border-bor-green/50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-bor-green text-white py-3 rounded-md font-medium hover:bg-bor-green-dark transition-all duration-300 shadow-md hover:shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Gönderiliyor...' : t('send')}
                  </button>
                </form>

                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.212442996433!2d34.58200837583756!3d36.78396217225169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1str!2str!4v1745946301251!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vakıf Konum"
                    className="w-full h-full rounded-lg"
                  />
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

export default Index;
