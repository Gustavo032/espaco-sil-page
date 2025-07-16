import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Import dos componentes separados
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ServiceModal } from "@/components/modals/ServiceModal";
import { PromotionBanner } from "@/components/common/PromotionBanner";
import { BackToTop } from "@/components/common/BackToTop";

// Import dos componentes completos que ainda não foram separados
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Leaf, 
  Palette, 
  Clock, 
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
  Activity,
  MapPin,
  Phone,
  Instagram
} from "lucide-react";

// Data objects e constantes
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
    icon: Sparkles,
    description: "Cortes modernos e clássicos",
    details: "Procedimento que sela a cutícula do cabelo, proporcionando brilho intenso, maciez e proteção contra agentes externos. Ideal para cabelos danificados."
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    icon: Sparkles,
    description: "Proteção e brilho intenso",
    details: "Procedimento que sela a cutícula do cabelo, proporcionando brilho intenso, maciez e proteção contra agentes externos. Ideal para cabelos danificados."
  },
  {
    id: "manicure",
    name: "Manicure e Pedicure",
    icon: Sparkles,
    description: "Proteção e brilho intenso",
    details: "Procedimento que sela a cutícula do cabelo, proporcionando brilho intenso, maciez e proteção contra agentes externos. Ideal para cabelos danificados."
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

const hairstyleSimulator = {
  faceShapes: [
    {
      id: "oval",
      name: "Oval",
      description: "Formato equilibrado, combina com a maioria dos cortes",
      characteristics: ["Testa e queixo proporcionais", "Maçãs do rosto mais largas"]
    },
    {
      id: "redondo",
      name: "Redondo",
      description: "Largura e altura similares, bochechas mais cheias",
      characteristics: ["Queixo arredondado", "Testa mais larga"]
    },
    {
      id: "quadrado",
      name: "Quadrado",
      description: "Ângulos bem definidos na mandíbula",
      characteristics: ["Testa, bochechas e mandíbula com largura similar", "Linhas angulares"]
    },
    {
      id: "triangular",
      name: "Triangular",
      description: "Queixo mais estreito que a testa",
      characteristics: ["Testa mais larga", "Queixo pontiagudo"]
    },
    {
      id: "coração",
      name: "Coração",
      description: "Testa larga e queixo estreito",
      characteristics: ["Testa proeminente", "Queixo delicado"]
    },
    {
      id: "alongado",
      name: "Alongado",
      description: "Altura maior que a largura",
      characteristics: ["Rosto mais comprido", "Testa alta"]
    }
  ],

  hairstyles: {
    oval: [
      {
        name: "Bob Clássico",
        image: "https://images.unsplash.com/photo-1594824985091-f6c0c8ce1bcc?w=300&h=300&fit=crop",
        description: "Corte na altura do queixo, versátil e elegante",
        difficulty: "Fácil",
        maintenance: "Baixa"
      },
      {
        name: "Long Bob (Lob)",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
        description: "Comprimento até os ombros, moderno e sofisticado",
        difficulty: "Fácil",
        maintenance: "Baixa"
      },
      {
        name: "Pixie Cut",
        image: "https://images.unsplash.com/photo-1616683693867-8fa0e472faf5?w=300&h=300&fit=crop",
        description: "Corte curtinho, prático e estiloso",
        difficulty: "Médio",
        maintenance: "Alta"
      }
    ],
    redondo: [
      {
        name: "Corte em Camadas",
        image: "https://images.unsplash.com/photo-1605980607089-67de6f5e8b8c?w=300&h=300&fit=crop",
        description: "Camadas longas que alongam o rosto",
        difficulty: "Médio",
        maintenance: "Média"
      },
      {
        name: "Franja Lateral",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
        description: "Franja de lado que afina o rosto",
        difficulty: "Fácil",
        maintenance: "Média"
      },
      {
        name: "Cabelo Longo Liso",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",
        description: "Comprimento longo com efeito alongador",
        difficulty: "Fácil",
        maintenance: "Baixa"
      }
    ],
    quadrado: [
      {
        name: "Ondas Suaves",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=300&fit=crop",
        description: "Ondas que suavizam os ângulos",
        difficulty: "Médio",
        maintenance: "Média"
      },
      {
        name: "Bob Assimétrico",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop",
        description: "Corte irregular que quebra a simetria",
        difficulty: "Difícil",
        maintenance: "Alta"
      },
      {
        name: "Franja Longa",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        description: "Franja que cobre a testa parcialmente",
        difficulty: "Fácil",
        maintenance: "Média"
      }
    ],
    triangular: [
      {
        name: "Volume na Base",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
        description: "Corte que adiciona volume na parte inferior",
        difficulty: "Médio",
        maintenance: "Média"
      },
      {
        name: "Bob Graduado",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        description: "Mais volume embaixo, equilibra as proporções",
        difficulty: "Médio",
        maintenance: "Média"
      }
    ],
    coração: [
      {
        name: "Franja Cheia",
        image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?w=300&h=300&fit=crop",
        description: "Franja que diminui a testa visualmente",
        difficulty: "Fácil",
        maintenance: "Alta"
      },
      {
        name: "Ondas Volumosas",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
        description: "Volume que equilibra a parte inferior",
        difficulty: "Médio",
        maintenance: "Média"
      }
    ],
    alongado: [
      {
        name: "Bob com Franja",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
        description: "Corte que diminui o comprimento visual",
        difficulty: "Fácil",
        maintenance: "Média"
      },
      {
        name: "Ondas na Altura dos Ombros",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",
        description: "Adiciona largura visual ao rosto",
        difficulty: "Médio",
        maintenance: "Média"
      }
    ]
  },

  getRecommendations: (faceShape: string, hairLength: string, lifestyle: string) => {
    const baseStyles = hairstyleSimulator.hairstyles[faceShape as keyof typeof hairstyleSimulator.hairstyles] || [];
    
    let filtered = baseStyles.filter(style => {
      if (hairLength === "curto" && (style.name.includes("Long") || style.name.includes("Longo"))) return false;
      if (hairLength === "longo" && style.name.includes("Pixie")) return false;
      if (lifestyle === "pratico" && style.maintenance === "Alta") return false;
      return true;
    });

    return filtered.length > 0 ? filtered : baseStyles.slice(0, 2);
  }
};

const virtualConsultation = {
  questions: [
    {
      id: "hairType",
      question: "Qual é seu tipo de cabelo?",
      options: ["Liso", "Ondulado", "Cacheado", "Crespo"]
    },
    {
      id: "length",
      question: "Qual o comprimento atual?",
      options: ["Curto (até o queixo)", "Médio (até os ombros)", "Longo (além dos ombros)", "Extra longo"]
    },
    {
      id: "condition",
      question: "Como está a condição dos seus cabelos?",
      options: ["Saudável", "Ressecado", "Oleoso", "Misto", "Danificado"]
    },
    {
      id: "chemicalHistory",
      question: "Fez algum procedimento químico recentemente?",
      options: ["Não", "Progressiva", "Coloração", "Relaxamento", "Luzes/Mechas"]
    },
    {
      id: "desired",
      question: "O que você gostaria de fazer?",
      options: ["Corte", "Cor", "Tratamento", "Mudança radical", "Manutenção"]
    }
  ],
  
  generateRecommendation: (answers: { [key: string]: string }) => {
    let recommendations = [];
    let urgency = "baixa";
    
    if (answers.condition === "Danificado") {
      recommendations.push("Reconstrução capilar urgente");
      recommendations.push("Cronograma capilar intensivo");
      urgency = "alta";
    }
    
    if (answers.chemicalHistory !== "Não") {
      recommendations.push("Hidratação profunda");
      recommendations.push("Proteína capilar");
    }
    
    if (answers.desired === "Mudança radical") {
      recommendations.push("Consulta presencial obrigatória");
      recommendations.push("Teste de mecha recomendado");
    }
    
    return {
      recommendations,
      urgency,
      estimatedTime: urgency === "alta" ? "2-3 horas" : "1-2 horas",
      followUp: "Retorno em 15 dias para avaliação"
    };
  }
};

const seasonalTips = [
  {
    season: "Verão",
    icon: Sun,
    tips: [
      "Use protetor solar capilar",
      "Hidrate mais frequentemente",
      "Evite ferramentas de calor",
      "Penteados protegidos são ideais"
    ],
    products: ["Leave-in com proteção UV", "Óleo capilar", "Máscara hidratante"]
  },
  {
    season: "Inverno", 
    icon: Wind,
    tips: [
      "Intensifique a nutrição",
      "Use óleos capilares",
      "Evite água muito quente",
      "Cubra os cabelos no frio"
    ],
    products: ["Máscaras nutritivas", "Óleos vegetais", "Cremes leave-in"]
  }
];

const hairEmergencyKit = [
  {
    problem: "Cabelo muito oleoso",
    solution: "Shampoo seco caseiro: amido de milho + cacau em pó",
    icon: AlertCircle
  },
  {
    problem: "Frizz descontrolado", 
    solution: "Misture um pouco de creme de pentear com água",
    icon: Zap
  },
  {
    problem: "Pontas duplas",
    solution: "Torça pequenas mechas e corte os fios que saem",
    icon: Sparkles
  },
  {
    problem: "Caspa emergencial",
    solution: "Massageie couro cabeludo com óleo de coco morno",
    icon: Sparkles
  }
];

const interactiveTutorials = [
  {
    id: "braiding",
    title: "Aprenda a Fazer Tranças",
    difficulty: "Iniciante",
    duration: "10 min",
    steps: [
      "Escove bem o cabelo",
      "Divida em 3 mechas iguais", 
      "Cruze a mecha direita sobre a central",
      "Cruze a mecha esquerda sobre a nova central",
      "Repita até o final",
      "Prenda com elástico"
    ],
    tips: ["Pratique com cabelo úmido", "Use creme para pentear"]
  },
  {
    id: "bun",
    title: "Coque Perfeito",
    difficulty: "Fácil",
    duration: "5 min", 
    steps: [
      "Faça um rabo alto",
      "Torça o rabo",
      "Enrole ao redor da base",
      "Prenda com grampos",
      "Finalize com spray"
    ],
    tips: ["Texturize antes para mais volume", "Use invisível da cor do cabelo"]
  }
];

const personalizedReminders = {
  setReminder: (type: string, date: Date, notes: string) => {
    const reminders = JSON.parse(localStorage.getItem('hairReminders') || '[]');
    const newReminder = {
      id: Date.now(),
      type,
      date: date.toISOString(),
      notes,
      completed: false
    };
    reminders.push(newReminder);
    localStorage.setItem('hairReminders', JSON.stringify(reminders));
    return newReminder;
  },
  
  getUpcomingReminders: () => {
    const reminders = JSON.parse(localStorage.getItem('hairReminders') || '[]');
    const now = new Date();
    return reminders
      .filter((r: any) => new Date(r.date) > now && !r.completed)
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
  },
  
  completeReminder: (id: number) => {
    const reminders = JSON.parse(localStorage.getItem('hairReminders') || '[]');
    const updated = reminders.map((r: any) => 
      r.id === id ? { ...r, completed: true } : r
    );
    localStorage.setItem('hairReminders', JSON.stringify(updated));
  }
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [likedServices, setLikedServices] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPromotion, setShowPromotion] = useState(true);
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
    const savedLikes = localStorage.getItem('likedServices');
    if (savedLikes) {
      setLikedServices(JSON.parse(savedLikes));
    }
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

  return (
    <div className="min-h-screen smooth-scroll">
      <PromotionBanner 
        show={showPromotion} 
        onClose={() => setShowPromotion(false)} 
      />

      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />

      <Hero />

      <Services onServiceSelect={setSelectedService} likedServices={likedServices} toggleLikeService={toggleLikeService} shareService={shareService} />

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

      <Contact onShowContactForm={() => setShowContactForm(true)} />

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

      <Footer />

      <ServiceModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        likedServices={likedServices}
        onToggleLike={toggleLikeService}
        onShare={shareService}
      />

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

      <BackToTop 
        show={showBackToTop} 
        onClick={scrollToTop} 
      />
    </div>
  );
}