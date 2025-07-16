import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { 
  Scissors, 
  Sparkles, 
  Leaf, 
  Palette, 
  Clock, 
  Eye, 
  Hand, 
  MapPin, 
  Phone, 
  Instagram, 
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const services = [
  {
    id: "progressiva",
    name: "Progressiva",
    icon: Sparkles,
    description: "Cabelos lisos e sedosos por mais tempo",
    details: "Tratamento que deixa os cabelos lisos, sedosos e livres de frizz por até 4 meses. Utilizamos produtos de alta qualidade que respeitam a estrutura capilar."
  },
  {
    id: "selagem",
    name: "Selagem",
    icon: Sparkles,
    description: "Proteção e brilho intenso",
    details: "Procedimento que sela a cutícula do cabelo, proporcionando brilho intenso, maciez e proteção contra agentes externos. Ideal para cabelos danificados."
  },
  {
    id: "botox",
    name: "Botox Capilar",
    icon: Leaf,
    description: "Restauração profunda dos fios",
    details: "Tratamento reparador que reconstrói a fibra capilar, devolvendo vida, brilho e movimento aos cabelos. Reduz volume e controla o frizz."
  },
  {
    id: "coloracao",
    name: "Coloração",
    icon: Palette,
    description: "Cores vibrantes e duradouras",
    details: "Mudança de cor com produtos profissionais que garantem resultado duradouro e cabelos saudáveis. Desde tons naturais até as cores mais ousadas."
  },
  {
    id: "cronograma",
    name: "Cronograma Capilar",
    icon: Clock,
    description: "Tratamento personalizado",
    details: "Programa de tratamento personalizado que alterna hidratação, nutrição e reconstrução de acordo com as necessidades específicas do seu cabelo."
  },
  {
    id: "corte",
    name: "Corte",
    icon: Scissors,
    description: "Estilos modernos e clássicos",
    details: "Cortes modernos e clássicos, adaptados ao seu formato de rosto e estilo pessoal. Desde cortes femininos delicados até estilos mais arrojados."
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    icon: Eye,
    description: "Design perfeito para seu rosto",
    details: "Design de sobrancelhas personalizado para valorizar seu olhar. Técnicas de depilação, modelagem e correção para um resultado natural e harmonioso."
  },
  {
    id: "manicure",
    name: "Manicure e Pedicure",
    icon: Hand,
    description: "Cuidado completo para mãos e pés",
    details: "Cuidado completo para mãos e pés, incluindo limpeza, hidratação, corte e esmaltação. Deixamos suas unhas sempre impecáveis."
  }
];

const testimonials = [
  {
    name: "Larissa",
    text: "Meu cabelo nunca esteve tão lindo!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Juliana",
    text: "O atendimento é impecável. Recomendo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Camila",
    text: "A Sil realmente entende de beleza.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 primary-gradient-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scissors className="text-white text-2xl" />
              <h1 className="text-white text-xl font-bold">Espaço Sil</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-purple-300 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-purple-300 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('agendamento')}
                className="text-white hover:text-purple-300 transition-colors"
              >
                Agendamento
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-purple-300 transition-colors"
              >
                Contato
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </Button>
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
                  onClick={() => scrollToSection('contato')}
                  className="text-white hover:text-purple-300 transition-colors py-2 text-left"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="primary-gradient min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Interior moderno de salão de beleza" 
              className="w-32 h-32 mx-auto rounded-full shadow-2xl mb-8 object-cover"
            />
            
            <h1 className="hero-title font-bold mb-6">
              Espaço Sil
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Sua beleza é nossa arte.
            </p>
            <Button 
              asChild
              className="bg-white text-purple-800 hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agende seu horário
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Transformamos sua beleza com técnicas modernas e profissionais</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="service-card cursor-pointer fade-in hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="text-4xl text-purple-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-800">
                    Ver mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 fade-in">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Profissional cabeleireira trabalhando" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2 fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Espaço Sil</h2>
              <p className="text-lg text-gray-600 mb-6">
                Com anos de experiência no universo da beleza, Sil criou um espaço único onde cada cliente 
                é tratado com carinho e profissionalismo. Especializamos em técnicas modernas e produtos 
                de alta qualidade para garantir os melhores resultados.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nosso diferencial está na atenção personalizada e no cuidado com cada detalhe, 
                sempre buscando realçar a beleza natural de cada pessoa.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="text-purple-600 text-2xl" />
                <span className="text-gray-700">Profissional certificada com mais de 5 anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Horários de Atendimento</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Segunda-feira</span>
                    <span className="text-gray-500">Fechado</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Terça-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Quarta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Quinta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Sexta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Sábado</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Domingo</span>
                    <span className="text-purple-600 font-semibold">13:00 - 16:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Localização</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="text-purple-600 text-3xl mr-3" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">R. Doze de Setembro, 328 - Jardim Bela Vista, Itapevi - SP</p>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="secondary-gradient text-white hover:opacity-90 px-6 py-3 rounded-full"
                >
                  <a 
                    href="https://maps.google.com/?q=R. Doze de Setembro, 328 - Jardim Bela Vista, Itapevi - SP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver no mapa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600">O que nossas clientes dizem sobre nós</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="shadow-lg">
                      <CardContent className="p-8 text-center">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} - Cliente satisfeita`} 
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                        />
                        <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                        <h4 className="font-semibold text-purple-600">{testimonial.name}</h4>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contato</h2>
            <p className="text-xl text-gray-600">Entre em contato conosco</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp */}
              <Card className="bg-green-50 shadow-lg fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Phone className="text-5xl text-green-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">WhatsApp</h3>
                  <p className="text-gray-600 mb-6">Fale conosco pelo WhatsApp para agendamentos e dúvidas</p>
                  <Button 
                    asChild
                    className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-full"
                  >
                    <a href="https://wa.me/5511965919937" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      (11) 96591-9937
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Instagram */}
              <Card className="bg-pink-50 shadow-lg fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Instagram className="text-5xl text-pink-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instagram</h3>
                  <p className="text-gray-600 mb-6">Acompanhe nossos trabalhos e novidades no Instagram</p>
                  <Button 
                    asChild
                    className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-full"
                  >
                    <a href="https://instagram.com/guusta.r" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" />
                      @guusta.r
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendamento" className="py-20 primary-gradient text-white">
        <div className="container mx-auto px-4 text-center fade-in">
          <h2 className="text-4xl font-bold mb-6">Pronta para transformar sua beleza?</h2>
          <p className="text-xl mb-8 opacity-90">Agende seu horário agora mesmo e descubra o seu melhor visual</p>
          <Button 
            asChild
            className="bg-white text-purple-800 hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Agora
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="text-purple-400 text-2xl" />
                <h3 className="text-xl font-bold">Espaço Sil</h3>
              </div>
              <p className="text-gray-400">Sua beleza é nossa arte.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p><MapPin className="inline mr-2 h-4 w-4" />R. Doze de Setembro, 328 - Jardim Bela Vista, Itapevi - SP</p>
                <p><Phone className="inline mr-2 h-4 w-4" />(11) 96591-9937</p>
                <p><Instagram className="inline mr-2 h-4 w-4" />@guusta.r</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>Seg: Fechado</p>
                <p>Ter - Sáb: 10:00 - 18:00</p>
                <p>Dom: 13:00 - 16:30</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Espaço Sil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name || ""}
      >
        <div className="text-gray-600 mb-6">
          {selectedService?.details}
        </div>
        <div className="text-center">
          <Button 
            asChild
            className="primary-gradient text-white hover:opacity-90 px-6 py-3 rounded-full"
          >
            <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Serviço
            </a>
          </Button>
        </div>
      </Modal>
    </div>
  );
}
