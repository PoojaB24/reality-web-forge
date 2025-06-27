
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';

interface VoiceSpeakerProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const VoiceSpeaker = ({ text, className = '', size = 'md' }: VoiceSpeakerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const speak = () => {
    if (isPlaying) {
      // Stop current speech
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    if (!text) return;

    setIsLoading(true);
    
    // Create speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice properties
    utterance.rate = 0.8; // Slightly slower for better comprehension
    utterance.pitch = 1;
    utterance.volume = 0.8;

    // Try to find an Indian English voice or fallback to default
    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(voice => 
      voice.lang.includes('en-IN') || 
      voice.name.toLowerCase().includes('indian') ||
      voice.name.toLowerCase().includes('hindi')
    );
    
    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    // Event listeners
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsLoading(false);
      console.error('Speech synthesis error');
    };

    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  const iconSize = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const buttonSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <Button
      onClick={speak}
      variant="outline"
      size="sm"
      className={`flex items-center space-x-1 ${buttonSize} ${className}`}
      disabled={isLoading}
      aria-label={isPlaying ? 'Stop reading' : 'Read aloud'}
    >
      {isLoading ? (
        <Loader2 className={`${iconSize} animate-spin`} />
      ) : isPlaying ? (
        <VolumeX className={iconSize} />
      ) : (
        <Volume2 className={iconSize} />
      )}
      <span className="sr-only">
        {isPlaying ? 'Stop reading' : 'Read aloud'}
      </span>
    </Button>
  );
};

export default VoiceSpeaker;
