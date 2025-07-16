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
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Download,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Send,
  Bell,
  BellOff,
  Printer,
  QrCode,
  Wifi,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Gamepad2,
  Sparkle,
  Coins,
  Crown,
  Flame
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
    image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    service: "Progressiva",
    rating: 5,
    date: "2024-01-15"
  },
  {
    name: "Juliana",
    text: "O atendimento é impecável. Recomendo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    service: "Corte",
    rating: 5,
    date: "2024-01-10"
  },
  {
    name: "Camila",
    text: "A Sil realmente entende de beleza.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    service: "Coloração",
    rating: 5,
    date: "2024-01-08"
  }
];

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Progressiva",
    description: "Resultado incrível de progressiva"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Corte Moderno",
    description: "Corte moderno e estiloso"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Coloração",
    description: "Transformação com coloração"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Botox Capilar",
    description: "Cabelo hidratado e brilhante"
  }
];

const faqData = [
  {
    question: "Quanto tempo dura uma progressiva?",
    answer: "A progressiva dura em média 3 a 4 meses, dependendo do tipo de cabelo e cuidados posteriores. Recomendamos produtos específicos para manter o resultado por mais tempo."
  },
  {
    question: "Posso fazer coloração no mesmo dia da progressiva?",
    answer: "Não recomendamos fazer ambos procedimentos no mesmo dia. O ideal é aguardar pelo menos 15 dias entre os processos para não danificar o cabelo."
  },
  {
    question: "Vocês trabalham com agendamento online?",
    answer: "Sim! Você pode agendar através do nosso sistema online ou pelo WhatsApp. Também aceitamos agendamentos por telefone."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos dinheiro, cartão de débito, cartão de crédito (até 3x sem juros), PIX e transferência bancária."
  }
];

const loyaltyProgram = {
  bronze: { visits: 0, discount: 0, icon: Coins },
  silver: { visits: 5, discount: 10, icon: Award },
  gold: { visits: 10, discount: 15, icon: Crown },
  diamond: { visits: 20, discount: 20, icon: Sparkle }
};

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
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [notifications, setNotifications] = useState(true);
  const [loyaltyVisits, setLoyaltyVisits] = useState(0);
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showBookingCalendar, setShowBookingCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "", name: "" });
  const [showQRCode, setShowQRCode] = useState(false);
  const [visitCounter, setVisitCounter] = useState(0);
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

  // Load liked services from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('likedServices');
    if (saved) {
      setLikedServices(JSON.parse(saved));
    }
    
    // Load loyalty visits
    const savedVisits = localStorage.getItem('loyaltyVisits');
    if (savedVisits) {
      setLoyaltyVisits(parseInt(savedVisits));
    }
    
    // Track visit counter
    const savedCounter = localStorage.getItem('visitCounter');
    const currentCounter = savedCounter ? parseInt(savedCounter) + 1 : 1;
    setVisitCounter(currentCounter);
    localStorage.setItem('visitCounter', currentCounter.toString());
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

  // Additional helper functions
  const getLoyaltyTier = (visits: number) => {
    if (visits >= 20) return { tier: 'diamond', ...loyaltyProgram.diamond };
    if (visits >= 10) return { tier: 'gold', ...loyaltyProgram.gold };
    if (visits >= 5) return { tier: 'silver', ...loyaltyProgram.silver };
    return { tier: 'bronze', ...loyaltyProgram.bronze };
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      const basePrice = getServicePrice(serviceId);
      const loyaltyTier = getLoyaltyTier(loyaltyVisits);
      const discount = (basePrice * loyaltyTier.discount) / 100;
      return total + (basePrice - discount);
    }, 0);
  };

  const getServicePrice = (serviceId: string) => {
    const prices: { [key: string]: number } = {
      progressiva: 150,
      selagem: 80,
      botox: 120,
      coloracao: 100,
      cronograma: 60,
      corte: 50,
      sobrancelha: 25,
      manicure: 30
    };
    return prices[serviceId] || 0;
  };

  const addLoyaltyVisit = () => {
    const newVisits = loyaltyVisits + 1;
    setLoyaltyVisits(newVisits);
    localStorage.setItem('loyaltyVisits', newVisits.toString());
    
    const newTier = getLoyaltyTier(newVisits);
    const oldTier = getLoyaltyTier(loyaltyVisits);
    
    if (newTier.tier !== oldTier.tier) {
      toast({
        title: "Parabéns! Novo nível desbloqueado!",
        description: `Você alcançou o nível ${newTier.tier.toUpperCase()} e ganhou ${newTier.discount}% de desconto!`,
      });
    }
  };

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const submitReview = () => {
    if (!newReview.name || !newReview.comment) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Avaliação enviada!",
      description: "Obrigado pelo seu feedback. Sua avaliação será publicada em breve.",
    });
    
    setNewReview({ rating: 5, comment: "", name: "" });
    setShowReviewModal(false);
  };

  const downloadQRCode = () => {
    toast({
      title: "QR Code baixado!",
      description: "O QR Code foi salvo na sua pasta de downloads.",
    });
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    if ("Notification" in window) {
      if (notifications) {
        Notification.requestPermission();
      }
    }
    toast({
      title: notifications ? "Notificações desativadas" : "Notificações ativadas",
      description: notifications ? "Você não receberá mais notificações." : "Você receberá notificações sobre promoções e novidades.",
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
            <nav className="hidden md:flex items-center space-x-8">
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
              
              {/* Additional Features */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300"
                onClick={() => setShowGallery(true)}
                title="Galeria de Fotos"
              >
                <Camera className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300"
                onClick={() => setShowFAQ(true)}
                title="Perguntas Frequentes"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300"
                onClick={toggleNotifications}
                title={notifications ? "Desativar Notificações" : "Ativar Notificações"}
              >
                {notifications ? <Bell className="h-5 w-5" /> : <BellOff className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300"
                onClick={() => setShowQRCode(true)}
                title="QR Code"
              >
                <QrCode className="h-5 w-5" />
              </Button>
              
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
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
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
            
            {/* Loyalty Program Display */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {(() => {
                    const tier = getLoyaltyTier(loyaltyVisits);
                    const TierIcon = tier.icon;
                    return (
                      <>
                        <TierIcon className="h-8 w-8" />
                        <div>
                          <h3 className="font-semibold">Programa de Fidelidade - {tier.tier.toUpperCase()}</h3>
                          <p className="text-sm opacity-90">{loyaltyVisits} visitas • {tier.discount}% de desconto</p>
                        </div>
                      </>
                    );
                  })()}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowLoyaltyModal(true)}
                    className="text-white hover:bg-white/20"
                  >
                    <Crown className="h-4 w-4 mr-1" />
                    Detalhes
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPriceCalculator(true)}
                    className="text-white hover:bg-white/20"
                  >
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Calculadora
                  </Button>
                </div>
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
                  
                  {/* Price with loyalty discount */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">
                        R$ {(getServicePrice(service.id) * (1 - getLoyaltyTier(loyaltyVisits).discount / 100)).toFixed(2)}
                      </span>
                      {getLoyaltyTier(loyaltyVisits).discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          R$ {getServicePrice(service.id).toFixed(2)}
                        </span>
                      )}
                    </div>
                    {getLoyaltyTier(loyaltyVisits).discount > 0 && (
                      <Badge variant="secondary" className="mt-1">
                        -{getLoyaltyTier(loyaltyVisits).discount}% desconto
                      </Badge>
                    )}
                  </div>
                  
                  {likedServices.includes(service.id) && (
                    <Badge variant="secondary" className="mb-3">
                      <Heart className="h-3 w-3 mr-1" />
                      Favorito
                    </Badge>
                  )}
                  
                  <div className="flex flex-col space-y-2">
                    <Button 
                      variant="ghost" 
                      className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                    >
                      Ver mais
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleServiceSelection(service.id);
                      }}
                      className={selectedServices.includes(service.id) ? "bg-purple-100 border-purple-300" : ""}
                    >
                      {selectedServices.includes(service.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Selecionado
                        </>
                      ) : (
                        <>
                          <Coins className="h-4 w-4 mr-1" />
                          Adicionar
                        </>
                      )}
                    </Button>
                  </div>
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

      {/* Gallery Modal */}
      <Modal
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        title="Galeria de Trabalhos"
      >
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative group cursor-pointer">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-32 object-cover rounded-lg"
                onClick={() => setSelectedImage(image)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* FAQ Modal */}
      <Modal
        isOpen={showFAQ}
        onClose={() => setShowFAQ(false)}
        title="Perguntas Frequentes"
      >
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronRight className={`h-4 w-4 transition-transform ${openFAQ === index ? 'rotate-90' : ''}`} />
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Modal>

      {/* Loyalty Program Modal */}
      <Modal
        isOpen={showLoyaltyModal}
        onClose={() => setShowLoyaltyModal(false)}
        title="Programa de Fidelidade"
      >
        <div className="space-y-4">
          {Object.entries(loyaltyProgram).map(([tier, data]) => {
            const IconComponent = data.icon;
            const isCurrentTier = getLoyaltyTier(loyaltyVisits).tier === tier;
            return (
              <div key={tier} className={`p-4 rounded-lg border ${isCurrentTier ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold capitalize">{tier}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {data.visits} visitas • {data.discount}% desconto
                    </p>
                  </div>
                  {isCurrentTier && (
                    <Badge variant="secondary">Atual</Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>

      {/* Price Calculator Modal */}
      <Modal
        isOpen={showPriceCalculator}
        onClose={() => setShowPriceCalculator(false)}
        title="Calculadora de Preços"
      >
        <div className="space-y-4">
          <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-600">
              R$ {calculateTotalPrice().toFixed(2)}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total com desconto de fidelidade
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">Serviços Selecionados:</h4>
            {selectedServices.length === 0 ? (
              <p className="text-gray-500">Nenhum serviço selecionado</p>
            ) : (
              selectedServices.map(serviceId => {
                const service = services.find(s => s.id === serviceId);
                const price = getServicePrice(serviceId);
                const discount = (price * getLoyaltyTier(loyaltyVisits).discount) / 100;
                return (
                  <div key={serviceId} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span>{service?.name}</span>
                    <div className="text-right">
                      <span className="font-semibold">R$ {(price - discount).toFixed(2)}</span>
                      {discount > 0 && (
                        <div className="text-sm text-gray-500 line-through">R$ {price.toFixed(2)}</div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          
          <Button
            onClick={addLoyaltyVisit}
            disabled={selectedServices.length === 0}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Serviços
          </Button>
        </div>
      </Modal>

      {/* Review Modal */}
      <Modal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        title="Deixe sua Avaliação"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sua Avaliação</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setNewReview({...newReview, rating: star})}
                  className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  <Star className="h-6 w-6 fill-current" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Seu Nome</label>
            <Input
              value={newReview.name}
              onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              placeholder="Digite seu nome"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Comentário</label>
            <Textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              placeholder="Conte sobre sua experiência..."
              rows={4}
            />
          </div>
          
          <Button onClick={submitReview} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Enviar Avaliação
          </Button>
        </div>
      </Modal>

      {/* QR Code Modal */}
      <Modal
        isOpen={showQRCode}
        onClose={() => setShowQRCode(false)}
        title="QR Code - Espaço Sil"
      >
        <div className="text-center space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <QrCode className="h-32 w-32 mx-auto text-purple-600" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Compartilhe este QR Code para que outras pessoas possam acessar nosso site
          </p>
          <div className="flex space-x-2">
            <Button
              onClick={downloadQRCode}
              className="flex-1"
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast({ title: "Link copiado!", description: "URL copiada para a área de transferência" });
              }}
              className="flex-1"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </Modal>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2">
        <Button
          onClick={() => setShowReviewModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-3 transition-all duration-300"
          size="icon"
          title="Deixar Avaliação"
        >
          <Star className="h-5 w-5" />
        </Button>
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <Button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg rounded-full p-3 transition-all duration-300"
            size="icon"
            title="Voltar ao Topo"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
        
        {/* Visit Counter */}
        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
          Visita #{visitCounter}
        </div>
      </div>
    </div>
  );
}
