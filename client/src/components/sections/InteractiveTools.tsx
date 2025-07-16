
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  Calendar, 
  BookOpen, 
  Clock, 
  Star,
  Heart,
  Droplets,
  Sun,
  Thermometer,
  Scissors
} from "lucide-react";

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
    id: "face-shape-analyzer",
    title: "Analisador de Formato de Rosto",
    description: "Encontre o corte perfeito para seu formato",
    icon: Scissors,
    color: "from-purple-500 to-pink-500",
    category: "Estilo",
    difficulty: "Médio"
  },
  {
    id: "color-simulator",
    title: "Simulador de Cores",
    description: "Teste diferentes cores antes de decidir",
    icon: Calculator,
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

const HairCareScheduleModal = () => {
  const [hairType, setHairType] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [schedule, setSchedule] = useState<any>(null);

  const generateSchedule = () => {
    const schedules = {
      "oleoso-normal": {
        hidratacao: 1,
        nutricao: 1,
        reconstrucao: 1,
        frequencia: "Semanal"
      },
      "misto-ressecado": {
        hidratacao: 2,
        nutricao: 1,
        reconstrucao: 1,
        frequencia: "Quinzenal"
      },
      "seco-danificado": {
        hidratacao: 2,
        nutricao: 2,
        reconstrucao: 1,
        frequencia: "Semanal"
      }
    };
    
    const key = `${hairType}-${currentCondition}` as keyof typeof schedules;
    setSchedule(schedules[key] || schedules["misto-ressecado"]);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Tipo de cabelo:</label>
        <select 
          className="w-full p-2 border rounded-lg"
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
        <label className="block text-sm font-medium mb-2">Condição atual:</label>
        <select 
          className="w-full p-2 border rounded-lg"
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
        className="w-full"
      >
        Gerar Cronograma
      </Button>

      {schedule && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Seu Cronograma Personalizado</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{schedule.hidratacao}x</div>
              <div className="text-sm">Hidratação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{schedule.nutricao}x</div>
              <div className="text-sm">Nutrição</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{schedule.reconstrucao}x</div>
              <div className="text-sm">Reconstrução</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
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
    const recommendations = {
      alta: {
        title: "Porosidade Alta",
        description: "Seu cabelo absorve produtos rapidamente mas também perde rapidamente.",
        tips: ["Use produtos com proteínas leves", "Hidrate frequentemente", "Use leave-in selador"]
      },
      media: {
        title: "Porosidade Média",
        description: "Seu cabelo tem o equilíbrio ideal de absorção e retenção.",
        tips: ["Mantenha rotina regular", "Alterne hidratação e nutrição", "Use produtos balanceados"]
      },
      baixa: {
        title: "Porosidade Baixa",
        description: "Seu cabelo tem dificuldade para absorver produtos mas retém bem.",
        tips: ["Use calor ao aplicar máscaras", "Prefira produtos líquidos", "Evite excesso de proteínas"]
      }
    };
    return recommendations[porosity as keyof typeof recommendations];
  };

  if (step > questions.length) {
    const porosity = analyzeResults();
    const recommendation = getRecommendation(porosity);
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-3xl mb-2">🧪</div>
          <h3 className="text-xl font-bold">{recommendation.title}</h3>
          <p className="text-gray-600 mt-2">{recommendation.description}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Recomendações:</h4>
          <ul className="space-y-1">
            {recommendation.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <Star className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
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
            className="w-full text-left justify-start h-auto p-4"
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

const FaceShapeModal = () => {
  const [selectedShape, setSelectedShape] = useState("");
  
  const faceShapes = [
    {
      id: "oval",
      name: "Oval",
      cuts: ["Bob", "Pixie", "Long Bob", "Franja reta"]
    },
    {
      id: "redondo",
      name: "Redondo",
      cuts: ["Camadas longas", "Franja lateral", "Corte reto longo"]
    },
    {
      id: "quadrado",
      name: "Quadrado",
      cuts: ["Ondas suaves", "Bob assimétrico", "Franja longa"]
    },
    {
      id: "triangular",
      name: "Triangular",
      cuts: ["Volume no topo", "Franja cheia", "Bob graduado"]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Selecione o formato do seu rosto:</h3>
        <div className="grid grid-cols-2 gap-3">
          {faceShapes.map((shape) => (
            <Button
              key={shape.id}
              variant={selectedShape === shape.id ? "default" : "outline"}
              className="h-20"
              onClick={() => setSelectedShape(shape.id)}
            >
              {shape.name}
            </Button>
          ))}
        </div>
      </div>

      {selectedShape && (
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Cortes recomendados para rosto {faceShapes.find(s => s.id === selectedShape)?.name}:</h4>
          <div className="flex flex-wrap gap-2">
            {faceShapes.find(s => s.id === selectedShape)?.cuts.map((cut, index) => (
              <Badge key={index} variant="secondary">{cut}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TreatmentTimerModal = () => {
  const [selectedTime, setSelectedTime] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const presetTimes = [
    { label: "Máscara hidratante", time: 20 },
    { label: "Máscara nutritiva", time: 30 },
    { label: "Reconstrução", time: 15 },
    { label: "Cronograma especial", time: 45 }
  ];

  const startTimer = () => {
    setTimeLeft(selectedTime * 60);
    setIsRunning(true);
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          clearInterval(interval);
          alert("Tempo finalizado! Seu tratamento está pronto.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

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
              className="w-full justify-between"
              onClick={() => setSelectedTime(preset.time)}
            >
              <span>{preset.label}</span>
              <span>{preset.time} min</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="text-4xl font-bold mb-4">
          {isRunning ? formatTime(timeLeft) : `${selectedTime}:00`}
        </div>
        <Progress 
          value={isRunning ? ((selectedTime * 60 - timeLeft) / (selectedTime * 60)) * 100 : 0} 
          className="mb-4"
        />
        <Button 
          onClick={startTimer} 
          disabled={isRunning}
          size="lg"
          className="w-full"
        >
          {isRunning ? "Timer Ativo" : "Iniciar Timer"}
        </Button>
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
      case "face-shape-analyzer":
        return <FaceShapeModal />;
      case "treatment-timer":
        return <TreatmentTimerModal />;
      default:
        return (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🚧</div>
            <p>Esta ferramenta estará disponível em breve!</p>
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
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} text-white`}>
                        <tool.icon className="h-6 w-6" />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
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
                    
                    <CardTitle className="text-lg leading-tight group-hover:text-purple-600 transition-colors">
                      {tool.title}
                    </CardTitle>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(tool.difficulty === "Fácil" ? 1 : tool.difficulty === "Médio" ? 2 : 3)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">{tool.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
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
          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              Suas Ferramentas Favoritas
            </h3>
            <div className="flex flex-wrap gap-2">
              {favorites.map(fav => {
                const tool = interactiveTools.find(t => t.id === fav);
                return tool ? (
                  <Badge key={fav} variant="secondary" className="text-sm">
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
