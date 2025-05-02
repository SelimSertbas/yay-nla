import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Phone, MapPin, Mail, Instagram, MessageCircle, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_56d2h8b', // EmailJS service ID
        'template_4gydd8e', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YQ2O7SR0cxtW8ac-t' // EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: "Başarılı!",
          description: "Mesajınız başarıyla gönderildi.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
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

      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm relative z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-bor-gold2-dark text-center mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              {t('contact_us')}
            </h1>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('contact_description')}
            </p>

            <div className="flex flex-col md:flex-row gap-10 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="w-full md:w-1/2">
                <div className="bg-bor-beige/30 p-6 rounded-lg h-full border border-bor-gold2/20">
                  <h3 className="text-xl font-bold mb-6 text-bor-gold2-dark border-b border-bor-gold2/20 pb-3">{t('contact_info')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-gold2/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle size={20} className="text-bor-gold2" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-gold2-dark">{t('email_address')}</h4>
                        <p className="text-gray-600">borvakfimedya@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-gold2/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone size={20} className="text-bor-gold2" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-gold2-dark">{t('phone_number')}</h4>
                        <p className="text-gray-600">...</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-bor-gold2/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={20} className="text-bor-gold2" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-bor-gold2-dark">{t('address')}</h4>
                        <p className="text-gray-600">İstanbul, Yenişehir</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-bor-gold2/20">
                      <h4 className="font-medium mb-3 text-bor-gold2-dark">{t('follow_us')}</h4>
                      <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/borvakf%C4%B1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bor-gold2/10 flex items-center justify-center hover:bg-bor-gold2 hover:text-white transition-all duration-300">
                          <Linkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com/yenisehirborvakfi?igsh=ZGVseHRzMHo3a2U3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bor-gold2/10 flex items-center justify-center hover:bg-bor-gold2 hover:text-white transition-all duration-300">
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full border-bor-gold2/30 focus:border-bor-gold2 focus:ring-bor-gold2/50 hover:border-bor-gold2/50 transition-all"
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
                        className="w-full border-bor-gold2/30 focus:border-bor-gold2 focus:ring-bor-gold2/50 hover:border-bor-gold2/50 transition-all"
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
                      className="w-full border-bor-gold2/30 focus:border-bor-gold2 focus:ring-bor-gold2/50 hover:border-bor-gold2/50 transition-all"
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
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all border-bor-gold2/30 focus:border-bor-gold2 focus:ring-bor-gold2/30 hover:border-bor-gold2/50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-bor-gold2 text-white py-3 rounded-md font-medium hover:bg-bor-gold2-dark transition-all duration-300 shadow-md hover:shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Gönderiliyor...' : t('send')}
                  </button>
                </form>
              </div>
            </div>

            {/* Map Section - Updated with Google Maps iframe */}
            <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-bor-gold2/10">
                <h3 className="text-xl font-bold mb-4 text-bor-gold2-dark">{t('location')}</h3>
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.212442996433!2d34.58200837583756!3d36.78396217225169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDQ3JzAyLjMiTiAzNMKwMzUnMDQuNSJF!5e1!3m2!1str!2str!4v1746116330702!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Yenişehir Bor Vakfı Konum"
                    className="rounded-lg"
                  ></iframe>
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

export default Contact;
