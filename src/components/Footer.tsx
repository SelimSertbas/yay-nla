import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-bor-gold2-darker text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
                alt="YBV Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-heading font-bold text-xl">
                Yenişehir Bor Vakfı
              </span>
            </div>
            <p className="text-bor-gold2-lightest mb-4">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-bor-gold2-light transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-bor-gold2-light transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="hover:text-bor-gold2-light transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-bor-gold2-light">{t('footer_reach_us')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-bor-gold2-light" />
                <span>İstanbul, Yenişehir</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-bor-gold2-light" />
                <span>+90 (532) 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-bor-gold2-light" />
                <span>borvakfimedya@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-bor-gold2-light">{t('footer_quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-bor-gold2-light transition-colors">{t('about')}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-bor-gold2-light transition-colors">{t('projects')}</Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-bor-gold2-light transition-colors">{t('mission')}</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-bor-gold2-light transition-colors">{t('donate')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bor-gold2-light transition-colors">{t('contact')}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bor-gold2-light/20 pt-8 mt-8 text-center text-sm text-bor-gold2-lightest">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
              alt="YBV Logo" 
              className="w-8 h-8 object-contain opacity-70"
            />
          </div>
          <p>&copy; {new Date().getFullYear()} Yenişehir Bor Vakfı. {t('footer_rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
