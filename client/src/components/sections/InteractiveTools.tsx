import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

import {
  Calculator,
  Calendar,
  BookOpen,
  Clock,
  Sparkles,
  Heart,
  Droplets,
  Sun,
  Thermometer,
  Scissors,
  RefreshCw,
  CheckCircle,
  XCircle,
  HelpCircle,
  Palette,
  Leaf,
  ClipboardEdit,
  Info
} from "lucide-react";

// --- Dados Mock para o Simulador de Penteados ---
const hairstyleRecommendations = [
  {
    faceShape: "oval",
    hairLength: "curto",
    hairTexture: ["liso", "ondulado", "cacheado", "crespo"],
    lifestyle: ["pratico", "moderado", "elaborado"],
    name: "Pixie Despojado",
    description: "Um corte curto e moderno que realça a simetria do rosto oval e oferece praticidade.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 95,
    difficulty: "Fácil",
    maintenance: "Baixa",
  },
  {
    faceShape: "oval",
    hairLength: "longo",
    hairTexture: ["ondulado", "cacheado"],
    lifestyle: ["moderado", "elaborado"],
    name: "Camadas Longas com Ondas",
    description: "Adiciona movimento e volume, perfeito para rostos ovais que querem manter o comprimento.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 90,
    difficulty: "Moderado",
    maintenance: "Média",
  },
  {
    faceShape: "redondo",
    hairLength: "medio",
    hairTexture: ["liso", "ondulado"],
    lifestyle: ["pratico", "moderado"],
    name: "Long Bob Assimétrico",
    description: "Ajuda a alongar o rosto redondo com pontas mais longas na frente, criando ângulos.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 92,
    difficulty: "Moderado",
    maintenance: "Média",
  },
  {
    faceShape: "redondo",
    hairLength: "longo",
    hairTexture: ["liso", "ondulado", "cacheado", "crespo"],
    lifestyle: ["pratico", "moderado"],
    name: "Corte Reto Longo com Franja Lateral",
    description: "Cria linhas verticais que alongam o rosto, com a franja lateral suavizando as bochechas.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 88,
    difficulty: "Fácil",
    maintenance: "Baixa",
  },
  {
    faceShape: "quadrado",
    hairLength: "medio",
    hairTexture: ["ondulado", "cacheado"],
    lifestyle: ["moderado", "elaborado"],
    name: "Bob Graduado com Pontas Suaves",
    description: "Suaviza os ângulos da mandíbula, adicionando volume na parte de trás.",
    image: "./images/cortes/bob/bob-graduado.png", // Reutilizando imagem
    compatibility: 90,
    difficulty: "Médio",
    maintenance: "Média",
  },
  {
    faceShape: "quadrado",
    hairLength: "longo",
    hairTexture: ["liso", "ondulado"],
    lifestyle: ["pratico", "moderado"],
    name: "Franja Cortina com Cabelo Longo",
    description: "Emoldura o rosto suavemente, diminuindo a rigidez do formato quadrado.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 85,
    difficulty: "Fácil",
    maintenance: "Baixa",
  },
  {
    faceShape: "triangular",
    hairLength: "curto",
    hairTexture: ["liso", "ondulado"],
    lifestyle: ["pratico"],
    name: "Bob com Volume no Topo",
    description: "Cria mais volume na parte superior para equilibrar um queixo estreito.",
    image: "./images/cortes/bob/bob-graduado.png", // Reutilizando imagem
    compatibility: 90,
    difficulty: "Fácil",
    maintenance: "Baixa",
  },
  {
    faceShape: "coracao",
    hairLength: "medio",
    hairTexture: ["ondulado", "cacheado"],
    lifestyle: ["moderado"],
    name: "Camadas na Altura do Queixo",
    description: "Adiciona largura à parte inferior do rosto para equilibrar a testa larga.",
    image: "./images/cortes/bob/bob-graduado.png", // Reutilizando imagem
    compatibility: 92,
    difficulty: "Médio",
    maintenance: "Média",
  },
  {
    faceShape: "alongado",
    hairLength: "curto",
    hairTexture: ["liso", "ondulado"],
    lifestyle: ["pratico"],
    name: "Bob Curto com Volume Lateral",
    description: "Cria ilusão de largura, encurtando visualmente o rosto alongado.",
    image: "./images/cortes/bob/bob-curto-volume.png", // Reutilizando imagem
    compatibility: 95,
    difficulty: "Fácil",
    maintenance: "Baixa",
  },
  // Recomendações de fallback
  {
    faceShape: "any",
    hairLength: "any",
    hairTexture: ["liso", "ondulado", "cacheado", "crespo"],
    lifestyle: ["pratico", "moderado", "elaborado"],
    name: "Corte Versátil com Camadas",
    description: "Um corte adaptável que funciona bem com a maioria dos tipos de rosto e texturas, oferecendo flexibilidade.",
    image: "./images/cortes/bob/bob-graduado.png",
    compatibility: 70,
    difficulty: "Moderado",
    maintenance: "Média",
  },
];

// --- Configuração das Ferramentas Interativas ---
const interactiveTools = [
  {
    id: "hair-care-schedule",
    title: "Cronograma Capilar Personalizado",
    description: "Descubra o cronograma ideal para seu tipo de cabelo",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    category: "Cuidados",
    difficulty: "Fácil"
  },
  {
    id: "hair-porosity-test",
    title: "Teste de Porosidade Capilar",
    description: "Identifique a porosidade do seu cabelo em casa",
    icon: Droplets,
    color: "from-green-500 to-emerald-500",
    category: "Diagnóstico",
    difficulty: "Fácil"
  },
  {
    id: "hairstyle-simulator",
    title: "Simulador de Penteados",
    description: "Descubra o corte perfeito para o seu formato de rosto e estilo de vida",
    icon: Scissors,
    color: "from-purple-500 to-pink-500",
    category: "Estilo",
    difficulty: "Médio"
  },
  {
    id: "color-simulator",
    title: "Simulador de Cores",
    description: "Teste diferentes cores antes de decidir",
    icon: Palette, // Ícone atualizado
    color: "from-orange-500 to-red-500",
    category: "Coloração",
    difficulty: "Médio"
  },
  {
    id: "seasonal-care",
    title: "Cuidados Sazonais",
    description: "Adapte sua rotina às estações do ano",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    category: "Cuidados",
    difficulty: "Fácil"
  },
  {
    id: "treatment-timer",
    title: "Timer de Tratamentos",
    description: "Cronômetro para máscaras e produtos",
    icon: Clock,
    color: "from-indigo-500 to-blue-500",
    category: "Ferramentas",
    difficulty: "Fácil"
  },
  {
    id: "hair-diary",
    title: "Diário Capilar",
    description: "Acompanhe a evolução dos seus cabelos",
    icon: BookOpen,
    color: "from-teal-500 to-green-500",
    category: "Acompanhamento",
    difficulty: "Fácil"
  },
  {
    id: "damage-assessment",
    title: "Avaliação de Danos",
    description: "Analise o nível de dano dos seus fios",
    icon: Thermometer,
    color: "from-red-500 to-pink-500",
    category: "Diagnóstico",
    difficulty: "Médio"
  }
];

// --- Modais das Ferramentas ---

const HairCareScheduleModal = () => {
  const [hairType, setHairType] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [schedule, setSchedule] = useState<any>(null);

  const generateSchedule = () => {
    const schedules: { [key: string]: { hidratacao: number; nutricao: number; reconstrucao: number; frequencia: string } } = {
      "oleoso-normal": { hidratacao: 1, nutricao: 1, reconstrucao: 1, frequencia: "Semanal" },
      "misto-ressecado": { hidratacao: 2, nutricao: 1, reconstrucao: 1, frequencia: "Quinzenal" },
      "seco-danificado": { hidratacao: 2, nutricao: 2, reconstrucao: 1, frequencia: "Semanal" },
      "oleoso-ressecado": { hidratacao: 1, nutricao: 2, reconstrucao: 1, frequencia: "Semanal" },
      "oleoso-danificado": { hidratacao: 1, nutricao: 1, reconstrucao: 2, frequencia: "Semanal" },
      "misto-normal": { hidratacao: 1, nutricao: 1, reconstrucao: 1, frequencia: "Semanal" },
      "misto-danificado": { hidratacao: 1, nutricao: 1, reconstrucao: 2, frequencia: "Quinzenal" },
      "seco-normal": { hidratacao: 2, nutricao: 1, reconstrucao: 0, frequencia: "Quinzenal" },
    };

    const key = `${hairType}-${currentCondition}`;
    setSchedule(schedules[key] || {
      hidratacao: 1,
      nutricao: 1,
      reconstrucao: 0,
      frequencia: "Semanal",
      fallback: true
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="hairType" className="block text-sm font-medium mb-2">Tipo de cabelo:</Label>
        <select
          id="hairType"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          value={hairType}
          onChange={(e) => setHairType(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="oleoso">Oleoso</option>
          <option value="misto">Misto</option>
          <option value="seco">Seco</option>
        </select>
      </div>

      <div>
        <Label htmlFor="currentCondition" className="block text-sm font-medium mb-2">Condição atual:</Label>
        <select
          id="currentCondition"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          value={currentCondition}
          onChange={(e) => setCurrentCondition(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="normal">Normal/Saudável</option>
          <option value="ressecado">Ressecado</option>
          <option value="danificado">Danificado</option>
        </select>
      </div>

      <Button
        onClick={generateSchedule}
        disabled={!hairType || !currentCondition}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
      >
        Gerar Cronograma
      </Button>

      {schedule && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg dark:from-purple-900/20 dark:to-pink-900/20">
          <h3 className="font-bold text-lg mb-4">Seu Cronograma Personalizado</h3>
          {schedule.fallback && (
            <p className="text-sm text-red-500 mb-2 flex items-center">
              <Info className="h-4 w-4 mr-1" />
              Recomendação geral: Não encontramos um cronograma específico para esta combinação.
            </p>
          )}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{schedule.hidratacao}x</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Hidratação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{schedule.nutricao}x</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Nutrição</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{schedule.reconstrucao}x</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Reconstrução</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Frequência: {schedule.frequencia}
          </p>
        </div>
      )}
    </div>
  );
};

const PorosityTestModal = () => {
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<string[]>([]);

  const questions = [
    {
      question: "Como seu cabelo absorve água?",
      options: [
        { text: "Muito rapidamente", value: "alta" },
        { text: "Normalmente", value: "media" },
        { text: "Demora bastante", value: "baixa" }
      ]
    },
    {
      question: "Como fica após aplicar produtos?",
      options: [
        { text: "Absorve rapidamente, fica ressecado", value: "alta" },
        { text: "Absorve bem e fica hidratado", value: "media" },
        { text: "Os produtos ficam sobre o cabelo", value: "baixa" }
      ]
    },
    {
      question: "Como seu cabelo seca?",
      options: [
        { text: "Muito rapidamente", value: "alta" },
        { text: "Tempo normal", value: "media" },
        { text: "Demora muito", value: "baixa" }
      ]
    }
  ];

  const analyzeResults = () => {
    const alta = results.filter(r => r === "alta").length;
    const media = results.filter(r => r === "media").length;
    const baixa = results.filter(r => r === "baixa").length;

    if (alta >= 2) return "alta";
    if (baixa >= 2) return "baixa";
    return "media";
  };

  const getRecommendation = (porosity: string) => {
    const recommendations: { [key: string]: { title: string; description: string; tips: string[] } } = {
      alta: {
        title: "Porosidade Alta",
        description: "Seu cabelo absorve produtos rapidamente mas também perde rapidamente. As cutículas estão muito abertas.",
        tips: ["Use produtos com proteínas leves", "Hidrate frequentemente com máscaras e condicionadores ricos", "Use leave-in selador para reter a umidade"]
      },
      media: {
        title: "Porosidade Média",
        description: "Seu cabelo tem o equilíbrio ideal de absorção e retenção. As cutículas estão levemente abertas.",
        tips: ["Mantenha rotina regular de cuidados", "Alterne hidratação e nutrição", "Use produtos balanceados e sem excessos"]
      },
      baixa: {
        title: "Porosidade Baixa",
        description: "Seu cabelo tem dificuldade para absorver produtos mas retém bem a umidade. As cutículas são muito fechadas.",
        tips: ["Use calor (touca térmica, vapor) ao aplicar máscaras", "Prefira produtos mais leves e líquidos, sem excesso de óleos", "Evite excesso de proteínas"]
      }
    };
    return recommendations[porosity];
  };

  if (step > questions.length) {
    const porosity = analyzeResults();
    const recommendation = getRecommendation(porosity);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-3xl mb-2">🧪</div>
          <h3 className="text-xl font-bold">{recommendation.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{recommendation.description}</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Recomendações para cuidar do seu cabelo:</h4>
          <ul className="space-y-1">
            {recommendation.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <Sparkles className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => { setStep(1); setResults([]); }} variant="outline">Reiniciar Teste</Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step - 1];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-sm text-gray-500 mb-2">Pergunta {step} de {questions.length}</div>
        <Progress value={(step / questions.length) * 100} className="mb-4" />
        <h3 className="text-lg font-semibold">{currentQuestion.question}</h3>
      </div>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full text-left justify-start h-auto p-4 dark:hover:bg-gray-700"
            onClick={() => {
              const newResults = [...results];
              newResults[step - 1] = option.value;
              setResults(newResults);
              setStep(step + 1);
            }}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

// ** HAIRSTYLE SIMULATOR MODAL (AQUI ESTÁ A MAIOR MUDANÇA) **
const HairstyleSimulatorModal = () => {
  const [step, setStep] = useState(1);
  const [faceShape, setFaceShape] = useState("");
  const [hairLength, setHairLength] = useState("");
  const [hairTexture, setHairTexture] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const faceShapes = [
    {
      id: "oval",
      name: "Oval",
      description: "Formato equilibrado, combina com a maioria dos cortes. Testa e queixo proporcionais, maçãs do rosto mais largas."
    },
    {
      id: "redondo",
      name: "Redondo",
      description: "Largura e altura similares, bochechas mais cheias. Queixo arredondado, testa mais larga."
    },
    {
      id: "quadrado",
      name: "Quadrado",
      description: "Ângulos bem definidos na mandíbula. Testa, bochechas e mandíbula com largura similar. Linhas angulares."
    },
    {
      id: "triangular",
      name: "Triangular",
      description: "Queixo mais estreito que a testa. Testa mais larga, queixo pontiagudo."
    },
    {
      id: "coracao",
      name: "Coração",
      description: "Testa larga e queixo estreito. Testa proeminente, queixo delicado."
    },
    {
      id: "alongado",
      name: "Alongado",
      description: "Altura maior que a largura. Rosto mais comprido, testa alta."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500 text-white";
      case "Moderado": return "bg-yellow-500 text-white";
      case "Difícil": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getMaintenanceColor = (maintenance: string) => {
    switch (maintenance) {
      case "Baixa": return "bg-blue-500 text-white";
      case "Média": return "bg-orange-500 text-white";
      case "Alta": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const generateRecommendations = () => {
    const filteredRecommendations = hairstyleRecommendations.filter(style => {
      const faceShapeMatch = style.faceShape === faceShape || style.faceShape === "any";
      const hairLengthMatch = style.hairLength === hairLength || style.hairLength === "any";
      const hairTextureMatch = style.hairTexture.includes(hairTexture) || style.hairTexture.includes("any");
      const lifestyleMatch = style.lifestyle.includes(lifestyle) || style.lifestyle.includes("any");

      return faceShapeMatch && hairLengthMatch && hairTextureMatch && lifestyleMatch;
    });

    setRecommendations(filteredRecommendations.length > 0 ? filteredRecommendations : [{
      name: "Nenhuma recomendação encontrada",
      description: "Tente ajustar suas preferências para encontrar o corte ideal.",
      image: "https://via.placeholder.com/400x300?text=Sem+Recomendação", // Imagem placeholder
      compatibility: 0,
      difficulty: "N/A",
      maintenance: "N/A"
    }]);
    setStep(4);
  };

  const resetSimulator = () => {
    setStep(1);
    setFaceShape("");
    setHairLength("");
    setHairTexture("");
    setLifestyle("");
    setRecommendations([]);
  };

  // Removido o Card externo para que o DialogContent seja o container principal.
  // O conteúdo dos steps agora é renderizado diretamente.
  return (
    <div className="space-y-6">
      {/* Step 1: Face Shape */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faceShapes.map((shape) => (
              <div
                key={shape.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 dark:bg-gray-700 ${
                  faceShape === shape.id
                    ? "border-purple-600 ring-2 ring-purple-200 bg-purple-50 dark:bg-purple-900/10"
                    : "border-gray-200 hover:border-purple-300 dark:border-gray-600 dark:hover:border-purple-600"
                }`}
                onClick={() => setFaceShape(shape.id)}
              >
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">{shape.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{shape.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setStep(2)}
              disabled={!faceShape}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Próximo
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Hair Preferences */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold mb-3 block">Comprimento preferido:</Label>
            <RadioGroup value={hairLength} onValueChange={setHairLength}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="curto" id="curto" />
                <Label htmlFor="curto">Curto (até o queixo)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medio" id="medio" />
                <Label htmlFor="medio">Médio (até os ombros)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="longo" id="longo" />
                <Label htmlFor="longo">Longo (além dos ombros)</Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          <div>
            <Label className="text-base font-semibold mb-3 block">Textura do cabelo:</Label>
            <RadioGroup value={hairTexture} onValueChange={setHairTexture}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="liso" id="liso" />
                <Label htmlFor="liso">Liso</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ondulado" id="ondulado" />
                <Label htmlFor="ondulado">Ondulado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cacheado" id="cacheado" />
                <Label htmlFor="cacheado">Cacheado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="crespo" id="crespo" />
                <Label htmlFor="crespo">Crespo</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              Voltar
            </Button>
            <Button
              onClick={() => setStep(3)}
              disabled={!hairLength || !hairTexture}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Próximo
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Lifestyle */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold mb-3 block">Quanto tempo você tem para cuidar do cabelo diariamente?</Label>
            <RadioGroup value={lifestyle} onValueChange={setLifestyle}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pratico" id="pratico" />
                <Label htmlFor="pratico">Prático - Menos de 10 minutos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderado" id="moderado" />
                <Label htmlFor="moderado">Moderado - 10-20 minutos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="elaborado" id="elaborado" />
                <Label htmlFor="elaborado">Elaborado - Mais de 20 minutos</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              Voltar
            </Button>
            <Button
              onClick={generateRecommendations}
              disabled={!lifestyle}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Ver Recomendações
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Recommendations */}
		{step === 4 && recommendations.length > 0 && (
		<div className="space-y-6 block opacity-100 visible z-[50]">
			<Card className="dark:bg-gray-800 border shadow-md max-w-3xl mx-auto">
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
				<span className="flex items-center">
					<Sparkles className="h-6 w-6 mr-2 text-purple-600" />
					Seus Cortes Recomendados
				</span>
				<Button variant="outline" size="sm" onClick={resetSimulator}>
					<RefreshCw className="h-4 w-4 mr-2" />
					Reiniciar
				</Button>
				</CardTitle>
			</CardHeader>

			<CardContent>
				<div className="space-y-6 block opacity-100 visible z-[50]">
				{recommendations.map((style, index) => (
					<Card key={index} className="interactive-hover dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
					<CardContent className="p-0">
						<div className="relative">
						<img
							src={style.image}
							alt={style.name}
							className="w-full h-48 object-contain rounded-t-lg"
						/>
						<div className="absolute top-2 right-2">
							{style.compatibility > 0 && (
							<Badge className="bg-green-500 text-white">
								{style.compatibility}% compatível
							</Badge>
							)}
						</div>
						</div>

						<div className="p-4">
						<h3 className="font-bold text-lg mb-2">{style.name}</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
							{style.description}
						</p>

						<div className="flex justify-between items-center mb-4">
							{style.difficulty !== "N/A" && (
							<Badge className={getDifficultyColor(style.difficulty)}>
								{style.difficulty}
							</Badge>
							)}
							{style.maintenance !== "N/A" && (
							<Badge className={getMaintenanceColor(style.maintenance)}>
								Manutenção: {style.maintenance}
							</Badge>
							)}
						</div>

						{style.compatibility > 0 && (
							<div className="space-y-2">
							<div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
								<span>Compatibilidade</span>
								<span>{style.compatibility}%</span>
							</div>
							<Progress value={style.compatibility} className="w-full" />
							</div>
						)}
						</div>
					</CardContent>
					</Card>
				))}
				</div>

				<div className="mt-8 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
				<h3 className="font-semibold text-lg mb-2">Gostou das recomendações?</h3>
				<p className="text-gray-600 dark:text-gray-400 mb-4">
					Agende uma consulta para discutir o melhor corte para você!
				</p>
				<Button
					className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
					onClick={() => window.open('https://agenda.codematch.com.br/dashboard', '_blank')}
				>
					<BookOpen className="h-4 w-4 mr-2" />
					Agendar Consulta
				</Button>
				</div>
			</CardContent>
			</Card>
		</div>
		)}
    </div>
  );
};

const ColorSimulatorModal = () => {
  const [naturalColor, setNaturalColor] = useState("");
  const [desiredColor, setDesiredColor] = useState("");
  const [recommendation, setRecommendation] = useState<any>(null);

  const hairColors = [
    { id: "preto", name: "Preto", hex: "#000000" },
    { id: "castanho-escuro", name: "Castanho Escuro", hex: "#4B2E0F" },
    { id: "castanho-medio", name: "Castanho Médio", hex: "#6F4E37" },
    { id: "castanho-claro", name: "Castanho Claro", hex: "#8B6B4D" },
    { id: "loiro-escuro", name: "Loiro Escuro", hex: "#A58C6F" },
    { id: "loiro-medio", name: "Loiro Médio", hex: "#C5A98C" },
    { id: "loiro-claro", name: "Loiro Claro", hex: "#E0C8A8" },
    { id: "loiro-platina", name: "Loiro Platina", hex: "#F3F0E0" },
    { id: "ruivo", name: "Ruivo", hex: "#D66B4A" },
    { id: "vermelho", name: "Vermelho Fantasia", hex: "#FF0000" },
    { id: "azul", name: "Azul Fantasia", hex: "#0000FF" },
    { id: "rosa", name: "Rosa Fantasia", hex: "#FFC0CB" },
  ];

  const getColorName = (id: string) => hairColors.find(c => c.id === id)?.name || id;

  const generateColorRecommendation = () => {
    let compatibilityScore = 0;
    let tips = [];
    let requiresBleaching = false;

    // Lógica simplificada de compatibilidade e dicas
    if (!naturalColor || !desiredColor) {
      setRecommendation({
        title: "Selecione as cores",
        description: "Por favor, selecione sua cor natural e a cor desejada para a simulação.",
        tips: [],
        compatibility: 0,
        requiresBleaching: false
      });
      return;
    }

    const naturalIndex = hairColors.findIndex(c => c.id === naturalColor);
    const desiredIndex = hairColors.findIndex(c => c.id === desiredColor);

    if (naturalIndex === -1 || desiredIndex === -1) {
      setRecommendation({
        title: "Cores Inválidas",
        description: "Uma das cores selecionadas é inválida.",
        tips: [],
        compatibility: 0,
        requiresBleaching: false
      });
      return;
    }

    // Calcular compatibilidade (exemplo básico)
    const naturalGroup = naturalIndex < 8 ? "natural" : "fantasia";
    const desiredGroup = desiredIndex < 8 ? "natural" : "fantasia";

    if (naturalColor === desiredColor) {
      compatibilityScore = 100;
      tips.push("Perfeito! Não há necessidade de alteração.");
      requiresBleaching = false;
    } else if (desiredGroup === "fantasia") {
      requiresBleaching = true;
      tips.push("Para esta cor fantasia, a descoloração é quase sempre necessária, especialmente se sua cor natural for escura.");
      compatibilityScore = 70; // Partindo do pressuposto de que fantasia é mais "ousado"
    } else { // Desejada é natural
      if (naturalIndex < desiredIndex) { // Clarear
        tips.push("Para clarear, pode ser necessário um processo de clareamento ou descoloração suave, dependendo da diferença.");
        requiresBleaching = (desiredIndex - naturalIndex) > 2; // Ex: clarear mais de 2 tons
        compatibilityScore = 80 - (desiredIndex - naturalIndex) * 5; // Menor compatibilidade para grandes clareamentos
      } else { // Escurecer
        tips.push("Escurecer é geralmente um processo mais simples. Seu cabelo absorverá bem a nova cor.");
        compatibilityScore = 90;
        requiresBleaching = false;
      }
    }

    if (requiresBleaching) {
      tips.push("Atenção: A descoloração pode danificar o cabelo. Recomenda-se fazer este processo com um profissional.");
    }
    tips.push("Sempre faça um teste de mecha antes de aplicar a coloração em todo o cabelo.");
    tips.push("Use produtos específicos para cabelos coloridos para manter a vivacidade da cor.");

    compatibilityScore = Math.max(0, Math.min(100, compatibilityScore)); // Garante que fique entre 0 e 100

    setRecommendation({
      title: `De ${getColorName(naturalColor)} para ${getColorName(desiredColor)}`,
      description: `Com base nas suas escolhas, esta é uma análise da transformação de cor.`,
      tips: tips,
      compatibility: compatibilityScore,
      requiresBleaching: requiresBleaching
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="naturalColor" className="block text-base font-semibold mb-2">Sua cor de cabelo natural/atual:</Label>
        <select
          id="naturalColor"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          value={naturalColor}
          onChange={(e) => setNaturalColor(e.target.value)}
        >
          <option value="">Selecione...</option>
          {hairColors.map(color => (
            <option key={color.id} value={color.id}>{color.name}</option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="desiredColor" className="block text-base font-semibold mb-2">Cor de cabelo que você deseja:</Label>
        <select
          id="desiredColor"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          value={desiredColor}
          onChange={(e) => setDesiredColor(e.target.value)}
        >
          <option value="">Selecione...</option>
          {hairColors.map(color => (
            <option key={color.id} value={color.id}>{color.name}</option>
          ))}
        </select>
      </div>

      <Button
        onClick={generateColorRecommendation}
        disabled={!naturalColor || !desiredColor}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
      >
        Simular Cor
      </Button>

      {recommendation && (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg dark:from-orange-900/20 dark:to-red-900/20">
          <h3 className="font-bold text-lg mb-2">{recommendation.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{recommendation.description}</p>

          {recommendation.compatibility > 0 && (
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                <span>Compatibilidade da Mudança</span>
                <span>{recommendation.compatibility}%</span>
              </div>
              <Progress value={recommendation.compatibility} className="w-full" />
            </div>
          )}

          {recommendation.requiresBleaching && (
            <Badge className="bg-red-500 text-white mb-4">Requer Descoloração!</Badge>
          )}

          <h4 className="font-semibold mb-2">Dicas Importantes:</h4>
          <ul className="space-y-1">
            {recommendation.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SeasonalCareModal = () => {
  const [season, setSeason] = useState("");
  const [careTips, setCareTips] = useState<string[]>([]);

  const seasonalCareData: { [key: string]: string[] } = {
    verao: [
      "Proteja o cabelo do sol com produtos com filtro UV e chapéus.",
      "Lave o cabelo com mais frequência devido ao suor e cloro/sal.",
      "Use máscaras hidratantes e reconstrutoras após exposição solar e à água do mar/piscina.",
      "Enxágue o cabelo com água doce antes de entrar na piscina ou mar para minimizar a absorção de cloro/sal."
    ],
    outono: [
      "Foque na hidratação e nutrição para recuperar dos danos do verão.",
      "Use produtos que ajudem a combater o frizz causado pela umidade.",
      "Evite lavagens muito quentes para não ressecar o couro cabeludo.",
      "Considere tratamentos de selagem para proteger os fios da mudança climática."
    ],
    inverno: [
      "Intensifique a hidratação e nutrição para combater o ressecamento do frio e vento.",
      "Evite usar água muito quente ao lavar, para não ressecar o couro cabeludo e os fios.",
      "Proteja o cabelo ao usar secador e chapinha, que podem intensificar o ressecamento.",
      "Use óleos capilares e leave-ins para formar uma barreira protetora contra o frio."
    ],
    primavera: [
      "Faça uma desintoxicação capilar para remover acúmulo de produtos.",
      "Foque em tratamentos de brilho e leveza.",
      "Proteja o cabelo de alergias sazonais que podem afetar o couro cabeludo.",
      "Introduza produtos mais leves, diminuindo a intensidade dos tratamentos de inverno."
    ],
  };

  useEffect(() => {
    if (season) {
      setCareTips(seasonalCareData[season] || []);
    } else {
      setCareTips([]);
    }
  }, [season]);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="season" className="block text-base font-semibold mb-2">Selecione a estação do ano:</Label>
        <select
          id="season"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="verao">Verão</option>
          <option value="outono">Outono</option>
          <option value="inverno">Inverno</option>
          <option value="primavera">Primavera</option>
        </select>
      </div>

      {season && careTips.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg dark:from-yellow-900/20 dark:to-orange-900/20">
          <h3 className="font-bold text-lg mb-4">Dicas de Cuidados para o {season.charAt(0).toUpperCase() + season.slice(1)}:</h3>
          <ul className="space-y-2">
            {careTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <Leaf className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!season && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4">
          <HelpCircle className="h-6 w-6 mx-auto mb-2" />
          <p>Selecione uma estação para ver as dicas de cuidados.</p>
        </div>
      )}
    </div>
  );
};

interface HairDiaryEntry {
  date: string;
  treatment: string;
  notes: string;
}

const HairDiaryModal = () => {
  const [entries, setEntries] = useState<HairDiaryEntry[]>([]);
  const [newEntry, setNewEntry] = useState({ date: "", treatment: "", notes: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "info">("info");

  useEffect(() => {
    const storedEntries = localStorage.getItem("hairDiaryEntries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hairDiaryEntries", JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    if (newEntry.date && newEntry.treatment && newEntry.notes) {
      setEntries([...entries, newEntry]);
      setNewEntry({ date: "", treatment: "", notes: "" });
      setAlertMessage("Registro adicionado com sucesso!");
      setAlertType("success");
      setShowAlert(true);
    } else {
      setAlertMessage("Por favor, preencha todos os campos para adicionar um registro.");
      setAlertType("error");
      setShowAlert(true);
    }
  };

  const clearEntries = () => {
    setEntries([]);
    setAlertMessage("Diário limpo com sucesso!");
    setAlertType("success");
    setShowAlert(true);
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Adicionar Novo Registro:</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="entryDate">Data:</Label>
          <input
            type="date"
            id="entryDate"
            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="entryTreatment">Tratamento Realizado:</Label>
          <input
            type="text"
            id="entryTreatment"
            placeholder="Ex: Hidratação, Nutrição, Corte"
            className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            value={newEntry.treatment}
            onChange={(e) => setNewEntry({ ...newEntry, treatment: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="entryNotes">Observações:</Label>
          <Textarea
            id="entryNotes"
            placeholder="Como seu cabelo reagiu? Houve alguma melhora?"
            className="w-full p-2 border rounded-lg min-h-[80px] dark:bg-gray-800 dark:border-gray-700"
            value={newEntry.notes}
            onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
          />
        </div>
        <Button onClick={handleAddEntry} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
          Adicionar Registro
        </Button>
      </div>

      <Separator />

      <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
        Histórico do Diário
        {entries.length > 0 && (
          <Button variant="outline" size="sm" onClick={clearEntries}>
            <RefreshCw className="h-3 w-3 mr-1" /> Limpar
          </Button>
        )}
      </h3>
      {entries.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Nenhum registro ainda. Comece a adicionar!</p>
      ) : (
        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
          {[...entries].reverse().map((entry, index) => (
            <Card key={index} className="dark:bg-gray-800">
              <CardContent className="p-4">
                <p className="font-semibold text-sm mb-1">{entry.date}</p>
                <p className="text-md font-bold text-purple-600 dark:text-purple-400">{entry.treatment}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{entry.notes}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              {alertType === "success" && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
              {alertType === "error" && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
              {alertType === "info" && <Info className="h-5 w-5 text-blue-500 mr-2" />}
              {alertType === "success" ? "Sucesso!" : "Atenção!"}
            </AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>Ok</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const DamageAssessmentModal = () => {
  const [answers, setAnswers] = useState({
    quebra: "",
    ressecamento: "",
    pontasDuplas: "",
    elasticidade: "",
  });
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  const questions = [
    {
      id: "quebra",
      question: "Com que frequência você nota quebra ou queda excessiva de cabelo?",
      options: [
        { value: "nunca", label: "Raramente" },
        { value: "leve", label: "Às vezes, um pouco" },
        { value: "moderada", label: "Com frequência" },
        { value: "severa", label: "Muito e em grandes quantidades" },
      ],
    },
    {
      id: "ressecamento",
      question: "Qual o nível de ressecamento dos seus fios?",
      options: [
        { value: "nunca", label: "Sempre hidratado" },
        { value: "leve", label: "Levemente ressecado" },
        { value: "moderada", label: "Ressecado e opaco" },
        { value: "severa", label: "Extremamente seco e áspero" },
      ],
    },
    {
      id: "pontasDuplas",
      question: "Suas pontas estão com pontas duplas ou muito finas?",
      options: [
        { value: "nunca", label: "Não" },
        { value: "leve", label: "Poucas pontas duplas" },
        { value: "moderada", label: "Muitas pontas duplas" },
        { value: "severa", label: "Pontas esbranquiçadas e finas" },
      ],
    },
    {
      id: "elasticidade",
      question: "Ao esticar um fio úmido, como ele se comporta?",
      options: [
        { value: "nunca", label: "Volta ao normal" },
        { value: "leve", label: "Estica um pouco e volta" },
        { value: "moderada", label: "Estica muito antes de quebrar" },
        { value: "severa", label: "Quebra facilmente" },
      ],
    },
  ];

  const calculateDamage = () => {
    let score = 0;
    const severityMap: { [key: string]: number } = {
      "nunca": 0,
      "leve": 1,
      "moderada": 2,
      "severa": 3
    };

    Object.values(answers).forEach(answer => {
      score += severityMap[answer] || 0;
    });

    let level = "";
    let description = "";
    let tips = [];

    if (score <= 3) {
      level = "Dano Leve";
      description = "Seu cabelo apresenta poucos sinais de dano. Mantenha uma rotina de cuidados básicos.";
      tips = [
        "Continue com hidratação regular.",
        "Proteja do calor ao usar ferramentas térmicas.",
        "Corte as pontas a cada 3 meses para manter a saúde."
      ];
    } else if (score <= 7) {
      level = "Dano Moderado";
      description = "Seu cabelo tem danos visíveis e precisa de atenção. Pode estar ressecado ou com elasticidade comprometida.";
      tips = [
        "Invista em um cronograma capilar com foco em hidratação e nutrição.",
        "Use produtos reconstrutores com cautela (a cada 15 dias).",
        "Evite processos químicos agressivos por um tempo.",
        "Reduza o uso de ferramentas térmicas."
      ];
    } else {
      level = "Dano Severo";
      description = "Seu cabelo está gravemente danificado, com quebra e ressecamento intensos. Necessita de tratamento intensivo.";
      tips = [
        "Faça um cronograma capilar intensivo, priorizando reconstrução e nutrição.",
        "Evite QUALQUER processo químico ou térmico.",
        "Consulte um profissional para um tratamento de recuperação profunda.",
        "Proteja o cabelo do sol e do cloro/sal."
      ];
    }

    setAssessmentResult({ level, description, tips, score });
  };

  const isFormComplete = Object.values(answers).every(answer => answer !== "");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Avalie a condição do seu cabelo:</h3>
      {questions.map((q) => (
        <div key={q.id}>
          <Label className="block text-sm font-medium mb-2">{q.question}</Label>
          <RadioGroup
            value={(answers as any)[q.id]}
            onValueChange={(value) => setAnswers({ ...answers, [q.id]: value })}
          >
            {q.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                <Label htmlFor={`${q.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}

      <Button
        onClick={calculateDamage}
        disabled={!isFormComplete}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
      >
        Avaliar Danos
      </Button>

      {assessmentResult && (
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg dark:from-red-900/20 dark:to-pink-900/20">
          <h3 className="font-bold text-lg mb-2 flex items-center">
            <Thermometer className="h-5 w-5 mr-2 text-red-600" />
            Nível de Dano: {assessmentResult.level}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{assessmentResult.description}</p>
          <h4 className="font-semibold mb-2">Recomendações de Tratamento:</h4>
          <ul className="space-y-1">
            {assessmentResult.tips.map((tip: string, index: number) => (
              <li key={index} className="flex items-start">
                <Sparkles className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <Button variant="outline" onClick={() => setAssessmentResult(null)}>Refazer Avaliação</Button>
          </div>
        </div>
      )}
    </div>
  );
};


const TreatmentTimerModal = () => {
  const [selectedTime, setSelectedTime] = useState(0); // Iniciar com 0 para forçar seleção
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const presetTimes = [
    { label: "Máscara hidratante", time: 20 },
    { label: "Máscara nutritiva", time: 30 },
    { label: "Reconstrução", time: 15 },
    { label: "Cronograma especial", time: 45 }
  ];

  useEffect(() => {
    // Limpa o intervalo se o modal for fechado ou componente for desmontado
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startTimer = () => {
    if (selectedTime === 0) return;
    setTimeLeft(selectedTime * 60);
    setIsRunning(true);

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          clearInterval(id);
          alert("Tempo finalizado! Seu tratamento está pronto.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setSelectedTime(0);
    setTimeLeft(0);
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Escolha o tipo de tratamento:</h3>
        <div className="space-y-2">
          {presetTimes.map((preset, index) => (
            <Button
              key={index}
              variant={selectedTime === preset.time ? "default" : "outline"}
              className="w-full justify-between dark:hover:bg-gray-700"
              onClick={() => {
                if (isRunning) stopTimer();
                setSelectedTime(preset.time);
                setTimeLeft(preset.time * 60);
              }}
              disabled={isRunning}
            >
              <span>{preset.label}</span>
              <span>{preset.time} min</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-4">
          {formatTime(timeLeft)}
        </div>
        <Progress
          value={selectedTime > 0 ? ((selectedTime * 60 - timeLeft) / (selectedTime * 60)) * 100 : 0}
          className="mb-4"
        />
        <div className="flex gap-2">
          <Button
            onClick={startTimer}
            disabled={isRunning || selectedTime === 0}
            size="lg"
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            {isRunning ? "Timer Ativo" : "Iniciar Timer"}
          </Button>
          <Button
            onClick={stopTimer}
            disabled={!isRunning}
            size="lg"
            variant="destructive"
            className="flex-1"
          >
            Parar
          </Button>
          <Button
            onClick={resetTimer}
            disabled={isRunning || (timeLeft === 0 && selectedTime === 0)}
            size="lg"
            variant="outline"
            className="flex-1 dark:hover:bg-gray-700"
          >
            Reiniciar
          </Button>
        </div>
      </div>
    </div>
  );
};


export function InteractiveTools() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (toolId: string) => {
    setFavorites(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const renderModal = (tool: typeof interactiveTools[0]) => {
    switch (tool.id) {
      case "hair-care-schedule":
        return <HairCareScheduleModal />;
      case "hair-porosity-test":
        return <PorosityTestModal />;
      case "hairstyle-simulator":
        return <HairstyleSimulatorModal />;
      case "color-simulator":
        return <ColorSimulatorModal />;
      case "seasonal-care":
        return <SeasonalCareModal />;
      case "treatment-timer":
        return <TreatmentTimerModal />;
      case "hair-diary":
        return <HairDiaryModal />;
      case "damage-assessment":
        return <DamageAssessmentModal />;
      default:
        return (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🚧</div>
            <p className="text-gray-700 dark:text-gray-300">Esta ferramenta estará disponível em breve!</p>
          </div>
        );
    }
  };

  return (
    <section id="ferramentas" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Ferramentas Interativas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra ferramentas exclusivas para cuidar melhor dos seus cabelos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {interactiveTools.map((tool) => (
            <Dialog key={tool.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} text-white`}>
                        <tool.icon className="h-6 w-6" />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity dark:text-gray-400 dark:hover:bg-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(tool.id);
                        }}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(tool.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </Button>
                    </div>

                    <CardTitle className="text-lg leading-tight group-hover:text-purple-600 transition-colors dark:text-gray-100 dark:group-hover:text-purple-400">
                      {tool.title}
                    </CardTitle>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs dark:text-gray-300 dark:border-gray-600">
                        {tool.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(tool.difficulty === "Fácil" ? 1 : tool.difficulty === "Médio" ? 2 : 3)].map((_, i) => (
                          <Sparkles key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1 dark:text-gray-400">{tool.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${tool.color} text-white`}>
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <span>{tool.title}</span>
                  </DialogTitle>
                </DialogHeader>

                {renderModal(tool)}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Seção de Favoritos */}
        {favorites.length > 0 && (
          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:border-gray-700">
            <h3 className="text-xl font-bold mb-4 flex items-center dark:text-gray-100">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              Suas Ferramentas Favoritas
            </h3>
            <div className="flex flex-wrap gap-2">
              {favorites.map(fav => {
                const tool = interactiveTools.find(t => t.id === fav);
                return tool ? (
                  <Badge key={fav} variant="secondary" className="text-sm dark:bg-gray-700 dark:text-gray-300">
                    {tool.title}
                  </Badge>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}