
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface LanguageSelectorProps {
  onClose: () => void;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', flag: '🇮🇳' },
];

// Translation map for basic UI elements
const translations: Record<string, Record<string, string>> = {
  en: {
    selectLanguage: 'Select Language',
    close: 'Close language selector',
    currently: 'Currently',
    apply: 'Apply',
    languageSupport: 'Language support coming soon for all Indian languages',
    ecoCartIndia: 'EcoCart India',
    ecoFriendlyProducts: 'Eco-Friendly Indian Products',
    discoverProducts: 'Discover authentic Indian eco-friendly products from trusted brands',
    searchPlaceholder: 'Search for Indian products (e.g., Masala Chai, Basmati Rice, Neem Face Wash)...',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    help: 'Help',
    cart: 'Cart',
    signIn: 'Sign In'
  },
  hi: {
    selectLanguage: 'भाषा चुनें',
    close: 'भाषा चयनकर्ता बंद करें',
    currently: 'वर्तमान में',
    apply: 'लागू करें',
    languageSupport: 'सभी भारतीय भाषाओं के लिए भाषा समर्थन जल्द आ रहा है',
    ecoCartIndia: 'इकोकार्ट भारत',
    ecoFriendlyProducts: 'पर्यावरण अनुकूल भारतीय उत्पाद',
    discoverProducts: 'विश्वसनीय ब्रांडों से प्रामाणिक भारतीय पर्यावरण अनुकूल उत्पादों की खोज करें',
    searchPlaceholder: 'भारतीय उत्पादों की खोज करें (जैसे, मसाला चाय, बासमती चावल, नीम फेस वाश)...',
    addToCart: 'कार्ट में जोड़ें',
    viewDetails: 'विवरण देखें',
    help: 'सहायता',
    cart: 'कार्ट',
    signIn: 'साइन इन करें'
  },
  bn: {
    selectLanguage: 'ভাষা নির্বাচন করুন',
    close: 'ভাষা নির্বাচক বন্ধ করুন',
    currently: 'বর্তমানে',
    apply: 'প্রয়োগ করুন',
    languageSupport: 'সমস্ত ভারতীয় ভাষার জন্য ভাষা সহায়তা শীঘ্রই আসছে',
    ecoCartIndia: 'ইকোকার্ট ইন্ডিয়া',
    ecoFriendlyProducts: 'পরিবেশবান্ধব ভারতীয় পণ্য',
    discoverProducts: 'বিশ্বস্ত ব্র্যান্ডগুলি থেকে খাঁটি ভারতীয় পরিবেশবান্ধব পণ্যগুলি আবিষ্কার করুন',
    searchPlaceholder: 'ভারতীয় পণ্য খুঁজুন (যেমন, মসলা চা, বাসমতী চাল, নিম ফেস ওয়াশ)...',
    addToCart: 'কার্টে যোগ করুন',
    viewDetails: 'বিস্তারিত দেখুন',
    help: 'সাহায্য',
    cart: 'কার্ট',
    signIn: 'সাইন ইন করুন'
  }
};

const LanguageSelector = ({ onClose }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });

  const currentTranslations = translations[selectedLanguage] || translations.en;

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', languageCode);
    
    // Update document language
    document.documentElement.lang = languageCode;
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: languageCode } 
    }));
    
    console.log('Language selected:', languageCode);
  };

  const handleApply = () => {
    // Force page refresh to apply language changes
    window.location.reload();
  };

  return (
    <Card className="w-80 max-h-96 overflow-y-auto bg-white shadow-xl border-green-200">
      <CardContent className="p-0">
        <div className="sticky top-0 bg-white border-b border-green-100 p-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">{currentTranslations.selectLanguage}</h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            aria-label={currentTranslations.close}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-2">
          {languages.map((language) => (
            <Button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              variant="ghost"
              className={`w-full justify-start p-3 mb-1 hover:bg-green-50 ${
                selectedLanguage === language.code ? 'bg-green-100 text-green-800' : ''
              }`}
              aria-label={`Select ${language.name} language`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <span className="text-xl" aria-hidden="true">{language.flag}</span>
                  <div className="text-left">
                    <div className="font-medium">{language.name}</div>
                    <div className="text-sm text-gray-600">{language.nativeName}</div>
                  </div>
                </div>
                {selectedLanguage === language.code && (
                  <Check className="h-4 w-4 text-green-600" aria-label="Selected" />
                )}
              </div>
            </Button>
          ))}
        </div>
        
        <div className="border-t border-green-100 p-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {currentTranslations.currently}: {languages.find(l => l.code === selectedLanguage)?.name}
            </Badge>
            <Button
              onClick={handleApply}
              className="bg-green-600 hover:bg-green-700 text-white"
              aria-label="Apply language selection"
            >
              {currentTranslations.apply}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {currentTranslations.languageSupport}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;
