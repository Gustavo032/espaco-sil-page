import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
  ChevronRight,
  Star,
  Heart,
  Share2,
  MessageSquare,
  Mail,
  Sun,
  Moon,
  Search,
  Filter,
  ArrowUp,
  Gift,
  Users,
  Zap,
  BookOpen,
  Lightbulb,
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
  PlayCircle,
  FileText,
  Calculator,
  Timer,
  Droplets,
  Thermometer,
  Wind,
  Smile,
  Target,
  TrendingUp,
  Camera,
  Download,
  ExternalLink,
  Bookmark,
  RefreshCw,
  Activity
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

const hairCareGuides = [
  {
    id: "hidratacao",
    title: "Cronograma de Hidratação",
    description: "Aprenda a criar um cronograma personalizado para seu tipo de cabelo",
    icon: Droplets,
    content: {
      steps: [
        "Identifique seu tipo de cabelo (oleoso, misto, seco)",
        "Teste de porosidade: mergulhe um fio em água",
        "Semana 1-2: Hidratação 2x, Nutrição 1x",
        "Semana 3-4: Hidratação 1x, Nutrição 2x, Reconstrução 1x",
        "Ajuste conforme necessidade do seu cabelo"
      ],
      tips: [
        "Use produtos sem sulfato e parabenos",
        "Aplique máscara do meio para as pontas",
        "Deixe agir por 20-30 minutos",
        "Enxágue com água morna"
      ]
    }
  },
  {
    id: "pos-progressiva",
    title: "Cuidados Pós-Progressiva",
    description: "Dicas essenciais para manter sua progressiva por mais tempo",
    icon: Shield,
    content: {
      steps: [
        "Aguarde 72h antes de lavar o cabelo",
        "Use shampoo e condicionador sem sal",
        "Evite prender o cabelo nas primeiras semanas",
        "Não use acessórios que marquem o cabelo",
        "Faça hidratação semanal"
      ],
      tips: [
        "Durma com fronha de cetim ou seda",
        "Evite água muito quente",
        "Use protetor térmico antes da chapinha",
        "Mantenha visitas regulares ao salão"
      ]
    }
  },
  {
    id: "crescimento",
    title: "Estimular Crescimento",
    description: "Técnicas naturais para acelerar o crescimento capilar",
    icon: TrendingUp,
    content: {
      steps: [
        "Massageie o couro cabeludo diariamente",
        "Use óleos essenciais (alecrim, hortelã)",
        "Mantenha alimentação rica em proteínas",
        "Beba bastante água",
        "Corte as pontas regularmente"
      ],
      tips: [
        "Evite penteados muito apertados",
        "Use suplementos vitamínicos",
        "Pratique exercícios regulares",
        "Durma bem para renovação celular"
      ]
    }
  },
  {
    id: "protecao-solar",
    title: "Proteção Solar Capilar",
    description: "Como proteger seus cabelos dos danos do sol",
    icon: Sun,
    content: {
      steps: [
        "Use produtos com proteção UV",
        "Aplique leave-in antes da exposição",
        "Cubra o cabelo com chapéu ou lenço",
        "Evite exposição solar entre 10h-16h",
        "Hidrate após exposição ao sol"
      ],
      tips: [
        "Cabelos coloridos precisam de mais proteção",
        "Use óleos capilares com FPS",
        "Enxágue com água doce após praia/piscina",
        "Faça máscaras reparadoras semanais"
      ]
    }
  }
];

const beforeAfterGallery = [
  {
    id: "progressiva-1",
    service: "Progressiva",
    before: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Transformação completa com progressiva"
  },
  {
    id: "coloracao-1",
    service: "Coloração",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Mudança radical de cor"
  },
  {
    id: "corte-1",
    service: "Corte",
    before: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Corte moderno e estiloso"
  }
];

const faqData = [
  {
    question: "Com que frequência devo cortar o cabelo?",
    answer: "Para cabelos saudáveis, recomenda-se cortar a cada 6-8 semanas. Para cabelos danificados, pode ser necessário cortar mais frequentemente, a cada 4-6 semanas."
  },
  {
    question: "Quanto tempo dura uma progressiva?",
    answer: "Uma progressiva bem feita pode durar de 3 a 6 meses, dependendo do tipo de cabelo, cuidados pós-tratamento e produtos utilizados."
  },
  {
    question: "Posso fazer coloração no mesmo dia da química?",
    answer: "Não recomendamos. É melhor esperar pelo menos 15 dias entre procedimentos químicos para não danificar o cabelo."
  },
  {
    question: "Como sei se meu cabelo precisa de hidratação?",
    answer: "Sinais incluem: ressecamento, falta de brilho, pontas duplas, dificuldade para pentear e falta de elasticidade."
  },
  {
    question: "Qual a diferença entre hidratação, nutrição e reconstrução?",
    answer: "Hidratação repõe água, nutrição repõe lipídios (gordura), e reconstrução repõe proteínas. Cada uma atende uma necessidade específica do cabelo."
  },
  {
    question: "Como manter a cor do cabelo por mais tempo?",
    answer: "Use produtos específicos para cabelos coloridos, evite água muito quente, use protetor solar capilar e faça manutenção regular."
  }
];

const appointmentReminders = [
  {
    icon: Clock,
    title: "Lembrete de Agendamento",
    description: "Mantenha seus tratamentos em dia"
  },
  {
    icon: Sparkles,
    title: "Cronograma Capilar",
    description: "Sua próxima hidratação está prevista para:"
  },
  {
    icon: Calendar,
    title: "Retoque de Cor",
    description: "Recomendamos retoque a cada 30-45 dias"
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [likedServices, setLikedServices] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPromotion, setShowPromotion] = useState(true);
  const [selectedGuide, setSelectedGuide] = useState<typeof hairCareGuides[0] | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<typeof beforeAfterGallery[0] | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [savedGuides, setSavedGuides] = useState<string[]>([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const { toast } = useToast();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load liked services and saved guides from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem('likedServices');
    const savedGuidesData = localStorage.getItem('savedGuides');
    
    if (savedLikes) {
      setLikedServices(JSON.parse(savedLikes));
    }
    if (savedGuidesData) {
      setSavedGuides(JSON.parse(savedGuidesData));
    }
  }, []);

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterGallery.length);
    }, 4000);
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

  // Helper functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLikeService = (serviceId: string) => {
    const newLikedServices = likedServices.includes(serviceId) 
      ? likedServices.filter(id => id !== serviceId)
      : [...likedServices, serviceId];
    
    setLikedServices(newLikedServices);
    localStorage.setItem('likedServices', JSON.stringify(newLikedServices));
    
    toast({
      title: likedServices.includes(serviceId) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: likedServices.includes(serviceId) 
        ? "Serviço removido da sua lista de favoritos" 
        : "Serviço adicionado à sua lista de favoritos",
    });
  };

  const shareService = (service: typeof services[0]) => {
    if (navigator.share) {
      navigator.share({
        title: `${service.name} - Espaço Sil`,
        text: service.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link da página foi copiado para a área de transferência.",
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setContactForm({ name: "", email: "", message: "" });
      setShowContactForm(false);
    }, 1000);
  };

  const toggleSaveGuide = (guideId: string) => {
    const newSavedGuides = savedGuides.includes(guideId)
      ? savedGuides.filter(id => id !== guideId)
      : [...savedGuides, guideId];
    
    setSavedGuides(newSavedGuides);
    localStorage.setItem('savedGuides', JSON.stringify(newSavedGuides));
    
    toast({
      title: savedGuides.includes(guideId) ? "Guia removido" : "Guia salvo",
      description: savedGuides.includes(guideId) 
        ? "Guia removido dos seus favoritos" 
        : "Guia salvo para consulta posterior",
    });
  };

  const toggleFaq = (question: string) => {
    setExpandedFaq(expandedFaq === question ? null : question);
  };

  const downloadGuide = (guide: typeof hairCareGuides[0]) => {
    const content = `
${guide.title}
${guide.description}

PASSOS:
${guide.content.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}

DICAS:
${guide.content.tips.map(tip => `• ${tip}`).join('\n')}

---
Espaço Sil - Sua beleza é nossa arte
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${guide.title.replace(/\s+/g, '_')}_EspacoSil.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Guia baixado!",
      description: "O guia foi salvo no seu dispositivo.",
    });
  };

  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || service.id === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Promotion Banner */}
      {showPromotion && (
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 text-center relative">
          <div className="flex items-center justify-center space-x-2">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">Primeira consulta GRÁTIS! Agende agora.</span>
          </div>
          <button
            onClick={() => setShowPromotion(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

      {/* Header */}
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
              <button 
                onClick={() => scrollToSection('guias')}
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                Guias
              </button>
              <button 
                onClick={() => scrollToSection('resultados')}
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                Resultados
              </button>
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
      <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Transformamos sua beleza com técnicas modernas e profissionais</p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12 fade-in">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Buscar serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 h-5 w-5" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <option value="all">Todos os serviços</option>
                  <option value="progressiva">Progressiva</option>
                  <option value="selagem">Selagem</option>
                  <option value="botox">Botox Capilar</option>
                  <option value="coloracao">Coloração</option>
                  <option value="cronograma">Cronograma Capilar</option>
                  <option value="corte">Corte</option>
                  <option value="sobrancelha">Sobrancelha</option>
                  <option value="manicure">Manicure e Pedicure</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <Card 
                key={service.id} 
                className="service-card cursor-pointer fade-in hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 relative group"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-purple-100 dark:hover:bg-purple-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLikeService(service.id);
                      }}
                    >
                      <Heart 
                        className={`h-4 w-4 ${likedServices.includes(service.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400'
                        }`} 
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-purple-100 dark:hover:bg-purple-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        shareService(service);
                      }}
                    >
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </Button>
                  </div>
                  
                  <service.icon className="text-4xl text-purple-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  {likedServices.includes(service.id) && (
                    <Badge variant="secondary" className="mb-3">
                      <Heart className="h-3 w-3 mr-1" />
                      Favorito
                    </Badge>
                  )}
                  
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
                    Ver mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">Nenhum serviço encontrado com os filtros aplicados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Hair Care Guide Section */}
      <section id="guias" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Guias de Cuidados</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Dicas profissionais para manter seus cabelos sempre lindos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairCareGuides.map((guide) => (
              <Card 
                key={guide.id} 
                className="fade-in hover:shadow-xl transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 group"
                onClick={() => setSelectedGuide(guide)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <guide.icon className="text-3xl text-purple-600 dark:text-purple-400" />
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveGuide(guide.id);
                        }}
                      >
                        <Bookmark 
                          className={`h-4 w-4 ${savedGuides.includes(guide.id) 
                            ? 'fill-yellow-500 text-yellow-500' 
                            : 'text-gray-400'
                          }`} 
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadGuide(guide);
                        }}
                      >
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">{guide.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{guide.description}</p>
                  
                  {savedGuides.includes(guide.id) && (
                    <Badge variant="secondary" className="mb-3">
                      <Bookmark className="h-3 w-3 mr-1" />
                      Salvo
                    </Badge>
                  )}
                  
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Guia
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section id="resultados" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Resultados Reais</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Veja as transformações incríveis das nossas clientes</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}
              >
                {beforeAfterGallery.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Antes</h3>
                        <img 
                          src={item.before} 
                          alt={`Antes - ${item.service}`} 
                          className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                          onClick={() => setSelectedGalleryItem(item)}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Depois</h3>
                        <img 
                          src={item.after} 
                          alt={`Depois - ${item.service}`} 
                          className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer"
                          onClick={() => setSelectedGalleryItem(item)}
                        />
                      </div>
                    </div>
                    <div className="text-center pb-8">
                      <Badge variant="outline" className="mb-2">{item.service}</Badge>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gallery Navigation */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentGalleryIndex((prev) => (prev - 1 + beforeAfterGallery.length) % beforeAfterGallery.length)}
                  className="hover:bg-purple-100 dark:hover:bg-purple-900"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex space-x-2">
                  {beforeAfterGallery.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentGalleryIndex ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      onClick={() => setCurrentGalleryIndex(index)}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterGallery.length)}
                  className="hover:bg-purple-100 dark:hover:bg-purple-900"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Sobre o Espaço Sil</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Com anos de experiência no universo da beleza, Sil criou um espaço único onde cada cliente 
                é tratado com carinho e profissionalismo. Especializamos em técnicas modernas e produtos 
                de alta qualidade para garantir os melhores resultados.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Nosso diferencial está na atenção personalizada e no cuidado com cada detalhe, 
                sempre buscando realçar a beleza natural de cada pessoa.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="text-purple-600 text-2xl" />
                <span className="text-gray-700 dark:text-gray-300">Profissional certificada com mais de 5 anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Tire suas dúvidas sobre nossos serviços</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="fade-in dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-6 h-auto font-semibold text-left hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => toggleFaq(faq.question)}
                    >
                      <span className="text-gray-800 dark:text-white">{faq.question}</span>
                      <ChevronRight 
                        className={`h-5 w-5 transition-transform ${
                          expandedFaq === faq.question ? 'rotate-90' : ''
                        }`} 
                      />
                    </Button>
                    {expandedFaq === faq.question && (
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Horários de Atendimento</h2>
            
            <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Segunda-feira</span>
                    <span className="text-gray-500 dark:text-gray-400">Fechado</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Terça-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Quarta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Quinta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Sexta-feira</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Sábado</span>
                    <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Domingo</span>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">O que nossas clientes dizem sobre nós</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-8 text-center">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} - Cliente satisfeita`} 
                          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-purple-200 dark:border-purple-700"
                        />
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400">{testimonial.name}</h4>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="hover:bg-purple-100 dark:hover:bg-purple-900"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="hover:bg-purple-100 dark:hover:bg-purple-900"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contato</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Entre em contato conosco</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* WhatsApp */}
              <Card className="bg-green-50 dark:bg-green-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Phone className="text-5xl text-green-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Fale conosco pelo WhatsApp para agendamentos e dúvidas</p>
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
              <Card className="bg-pink-50 dark:bg-pink-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Instagram className="text-5xl text-pink-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Instagram</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Acompanhe nossos trabalhos e novidades no Instagram</p>
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
              
              {/* Email Contact */}
              <Card className="bg-blue-50 dark:bg-blue-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <Mail className="text-5xl text-blue-500 mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Envie-nos uma mensagem por email</p>
                  <Button 
                    onClick={() => setShowContactForm(true)}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Enviar mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Clientes satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
                <div className="text-gray-600 dark:text-gray-300">Avaliação média</div>
              </div>
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
        <div className="text-gray-600 dark:text-gray-300 mb-6">
          {selectedService?.details}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedService && toggleLikeService(selectedService.id)}
              className="flex items-center space-x-2"
            >
              <Heart 
                className={`h-4 w-4 ${selectedService && likedServices.includes(selectedService.id) 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-400'
                }`} 
              />
              <span>{selectedService && likedServices.includes(selectedService.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedService && shareService(selectedService)}
              className="flex items-center space-x-2"
            >
              <Share2 className="h-4 w-4" />
              <span>Compartilhar</span>
            </Button>
          </div>
          <div className="text-center">
            <Button 
              asChild
              className="primary-gradient text-white hover:opacity-90 px-6 py-3 rounded-full w-full"
            >
              <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Serviço
              </a>
            </Button>
          </div>
        </div>
      </Modal>

      {/* Hair Care Guide Modal */}
      <Modal
        isOpen={selectedGuide !== null}
        onClose={() => setSelectedGuide(null)}
        title={selectedGuide?.title || ""}
      >
        {selectedGuide && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <selectedGuide.icon className="text-3xl text-purple-600" />
              <div>
                <h3 className="text-lg font-semibold dark:text-white">{selectedGuide.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedGuide.description}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Passo a Passo
              </h4>
              <ul className="space-y-2">
                {selectedGuide.content.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                Dicas Importantes
              </h4>
              <ul className="space-y-2">
                {selectedGuide.content.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={() => selectedGuide && toggleSaveGuide(selectedGuide.id)}
                className="flex-1"
                variant={savedGuides.includes(selectedGuide.id) ? "default" : "outline"}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                {savedGuides.includes(selectedGuide.id) ? "Salvo" : "Salvar Guia"}
              </Button>
              <Button
                onClick={() => selectedGuide && downloadGuide(selectedGuide)}
                className="flex-1"
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar PDF
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Gallery Modal */}
      <Modal
        isOpen={selectedGalleryItem !== null}
        onClose={() => setSelectedGalleryItem(null)}
        title={selectedGalleryItem?.service || ""}
      >
        {selectedGalleryItem && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Antes</h4>
                <img 
                  src={selectedGalleryItem.before} 
                  alt={`Antes - ${selectedGalleryItem.service}`} 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Depois</h4>
                <img 
                  src={selectedGalleryItem.after} 
                  alt={`Depois - ${selectedGalleryItem.service}`} 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-2">{selectedGalleryItem.service}</Badge>
              <p className="text-gray-600 dark:text-gray-300">{selectedGalleryItem.description}</p>
            </div>
            
            <div className="text-center">
              <Button 
                asChild
                className="primary-gradient text-white hover:opacity-90 px-6 py-3 rounded-full"
              >
                <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar {selectedGalleryItem.service}
                </a>
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Contact Form Modal */}
      <Modal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        title="Enviar Mensagem"
      >
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nome
            </label>
            <Input
              id="name"
              type="text"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mensagem
            </label>
            <Textarea
              id="message"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              placeholder="Sua mensagem..."
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            <Mail className="mr-2 h-4 w-4" />
            Enviar Mensagem
          </Button>
        </form>
      </Modal>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white shadow-lg rounded-full p-3 transition-all duration-300"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
