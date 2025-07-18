import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export function Header({ darkMode, setDarkMode, scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 primary-gradient-dark shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="text-white text-2xl" />
            <h1 className="text-white text-xl font-bold">Espaço Sil</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Serviços
            </button>
            {/* <button 
              onClick={() => scrollToSection('guias')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Guias
            </button> */}
            {/* <button 
              onClick={() => scrollToSection('resultados')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Resultados
            </button> */}
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('ferramentas')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Ferramentas
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Galeria
            </button>
            {/* <button 
              onClick={() => scrollToSection('simulador')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Simulador
            </button> */}
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-purple-300 transition-colors text-sm"
            >
              Contato
            </button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-purple-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-purple-300 transition-colors py-2 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-purple-300 transition-colors py-2 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('agendamento')}
                className="text-white hover:text-purple-300 transition-colors py-2 text-left"
              >
                Agendamento
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => { scrollToSection('ferramentas'); setMobileMenuOpen(false); }}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                Ferramentas
              </button>
              <button 
                onClick={() => { scrollToSection('galeria'); setMobileMenuOpen(false); }}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                Galeria
              </button>
              <button 
                onClick={() => { scrollToSection('simulador'); setMobileMenuOpen(false); }}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                Simulador
              </button>
              <button 
                onClick={() => { scrollToSection('faq'); setMobileMenuOpen(false); }}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => { scrollToSection('contato'); setMobileMenuOpen(false); }}
                className="text-white hover:text-purple-300 transition-colors py-2"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}