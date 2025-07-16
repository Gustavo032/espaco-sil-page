
import { Button } from "@/components/ui/button";
import { Calendar, Award, Users, Star, Sparkles, Scissors, Palette, Hand } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background with Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900 to-purple-800"></div>
      
      {/* Animated Particles and Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60 animation-delay-1000"></div>
        <div className="absolute top-60 left-60 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-70 animation-delay-500"></div>
        
        {/* Geometric Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-12 h-12 border border-cyan-400/30 rotate-45 animate-float opacity-60"></div>
        <div className="absolute top-1/2 right-16 w-8 h-8 border border-purple-400/40 rounded-full animate-float delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rotate-12 animate-pulse"></div>
      </div>

      {/* Grid Layout Container */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side - Text Content */}
        <div className="px-6 lg:px-12 xl:px-20 text-center lg:text-left">
          <div className="fade-in space-y-8">
            {/* Main Title with Elegant Typography */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-light text-white leading-tight">
                <span 
                  className="block font-serif bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Espaço
                </span>
                <span 
                  className="block font-serif bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent mt-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Sil
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 py-4">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-16"></div>
                <Sparkles className="text-cyan-400 text-2xl animate-pulse" />
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent w-16"></div>
              </div>
            </div>

            {/* Subtitle with Typing Effect */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl xl:text-4xl font-light text-white/90 tracking-wide leading-relaxed">
                <span className="typing-text">Sua beleza é nossa</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  arte
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                asChild
                className="group relative px-12 py-6 text-lg font-semibold rounded-full overflow-hidden 
                         bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600
                         text-white shadow-2xl transform hover:scale-105 transition-all duration-500
                         hover:shadow-blue-500/25 border border-blue-400/30"
              >
                <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                                 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Agende seu horário
                </a>
              </Button>
            </div>

            {/* Mini Features */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="glass-effect p-4 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                <Award className="text-yellow-400 text-2xl mb-2 mx-auto" />
                <div className="text-white text-sm font-medium">Certificada</div>
                <div className="text-white/70 text-xs">5+ anos</div>
              </div>
              
              <div className="glass-effect p-4 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                <Users className="text-blue-400 text-2xl mb-2 mx-auto" />
                <div className="text-white text-sm font-medium">500+ Clientes</div>
                <div className="text-white/70 text-xs">Satisfeitas</div>
              </div>
              
              <div className="glass-effect p-4 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                <Star className="text-pink-400 text-2xl mb-2 mx-auto" />
                <div className="text-white text-sm font-medium">Nota 4.9</div>
                <div className="text-white/70 text-xs">Excelência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Element (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-center px-12 xl:px-20">
          <div className="relative">
            {/* Main Visual Circle */}
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-purple-400/40 animate-spin-reverse"></div>
              <div className="absolute inset-8 rounded-full border border-cyan-400/30 animate-pulse"></div>
              
              {/* Center Content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                            backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Scissors className="text-6xl text-cyan-400 mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <div className="flex space-x-1 justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-xl border border-white/20 animate-float">
                <Palette className="text-purple-400 text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-xl border border-white/20 animate-float delay-1000">
                <Sparkles className="text-blue-400 text-xl" />
              </div>
              <div className="absolute top-1/2 -left-8 glass-effect p-3 rounded-xl border border-white/20 animate-float delay-500">
                <Hand className="text-pink-400 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
