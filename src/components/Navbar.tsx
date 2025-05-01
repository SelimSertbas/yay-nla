import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "../contexts/LanguageContext";

// Export the language type for use in other components
export type LanguageType = "tr" | "en" | "ar" | "de";

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const languageOptions = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" }, // Arabic
    { code: "de", name: "Deutsch" }, // German as the additional language
  ];

  const handleLanguageChange = (langCode: LanguageType) => {
    setLanguage(langCode);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/uploads/d27427c6-c84d-4a18-bda8-296dfc882b66.png" 
              alt="YBV Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-heading font-bold text-xl text-bor-gold2-dark hidden sm:inline-block">
              Yenişehir Bor Vakfı
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link 
              to="/news" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/news") && "text-bor-gold2"
              )}
            >
              {t('news')}
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/about") && "text-bor-gold2"
              )}
            >
              {t('about')}
            </Link>
            <Link 
              to="/mission" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/mission") && "text-bor-gold2"
              )}
            >
              {t('mission')}
            </Link>
            <Link 
              to="/projects" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/projects") && "text-bor-gold2"
              )}
            >
              {t('projects')}
            </Link>
            <Link 
              to="/donate" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/donate") && "text-bor-gold2"
              )}
            >
              {t('donate')}
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "font-medium text-gray-600 hover:text-bor-gold2 transition-colors",
                isActive("/contact") && "text-bor-gold2"
              )}
            >
              {t('contact')}
            </Link>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-bor-gold2-lightest hover:text-bor-gold2 transition-colors">
                <Globe size={18} className="text-bor-gold2" />
                <span className="text-sm uppercase">{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as LanguageType)}
                    className={cn(
                      "cursor-pointer hover:bg-bor-gold2-lightest hover:text-bor-gold2-dark",
                      language === lang.code ? "bg-bor-gold2-lightest text-bor-gold2-dark font-medium" : ""
                    )}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="p-1 rounded-md hover:bg-bor-gold2-lightest hover:text-bor-gold2 transition-colors">
                <Globe size={20} className="text-bor-gold2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as LanguageType)}
                    className={cn(
                      "cursor-pointer hover:bg-bor-gold2-lightest hover:text-bor-gold2-dark",
                      language === lang.code ? "bg-bor-gold2-lightest text-bor-gold2-dark font-medium" : ""
                    )}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 py-4">
            <Link 
              to="/#news" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('news')}
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              to="/mission" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('mission')}
            </Link>
            <Link 
              to="/projects" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('projects')}
            </Link>
            <Link 
              to="/donate" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('donate')}
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-600 hover:text-bor-gold2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
