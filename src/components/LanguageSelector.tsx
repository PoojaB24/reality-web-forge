
import { useState } from 'react';
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

const LanguageSelector = ({ onClose }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', languageCode);
    
    // Here you would typically integrate with i18n library
    console.log('Language selected:', languageCode);
    
    // For now, we'll just show a message
    const selectedLang = languages.find(lang => lang.code === languageCode);
    if (selectedLang) {
      // You could integrate with react-i18next or similar library here
      document.documentElement.lang = languageCode;
    }
  };

  return (
    <Card className="w-80 max-h-96 overflow-y-auto bg-white shadow-xl border-green-200">
      <CardContent className="p-0">
        <div className="sticky top-0 bg-white border-b border-green-100 p-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">Select Language</h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            aria-label="Close language selector"
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
              Currently: {languages.find(l => l.code === selectedLanguage)?.name}
            </Badge>
            <Button
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 text-white"
              aria-label="Apply language selection"
            >
              Apply
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Language support coming soon for all Indian languages
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;
