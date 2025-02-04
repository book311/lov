import { useState } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { UsFlag } from "./ui/flags/UsFlag";
import { SaFlag } from "./ui/flags/SaFlag";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const isArabic = currentLanguage === 'ar';

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-accent/10"
                >
                  {currentLanguage === 'en' ? <UsFlag /> : <SaFlag />}
                  <span>{currentLanguage === 'en' ? 'English' : 'العربية'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-40 bg-secondary border border-accent/20"
              >
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('en')}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-accent/10"
                >
                  <UsFlag />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('ar')}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-accent/10"
                >
                  <SaFlag />
                  <span>العربية</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent-soft text-black font-medium"
            >
              {isArabic ? "احصل على عرض سعر" : "Get a Quote"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};