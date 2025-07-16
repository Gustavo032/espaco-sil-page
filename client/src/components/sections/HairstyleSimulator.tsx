
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Scissors, 
  Star, 
  Clock, 
  Sparkles, 
  RefreshCw,
  BookOpen,
  TrendingUp
} from "lucide-react";

const faceShapes = [
  {
    id: "oval",
    name: "Oval",
    description: "Formato equilibrado, combina com a maioria dos cortes",
    characteristics: ["Testa e queixo proporcionais", "Maçãs do rosto mais largas"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?w=150&h=150&fit=crop&face"
  },
  {
    id: "redondo",
    name: "Redondo",
    description: "Largura e altura similares, bochechas mais cheias",
    characteristics: ["Queixo arredondado", "Testa mais larga"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face"
  },
  {
    id: "quadrado",
    name: "Quadrado",
    description: "Ângulos bem definidos na mandíbula",
    characteristics: ["Testa, bochechas e mandíbula com largura similar", "Linhas angulares"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face"
  },
  {
    id: "triangular",
    name: "Triangular",
    description: "Queixo mais estreito que a testa",
    characteristics: ["Testa mais larga", "Queixo pontiagudo"],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=150&h=150&fit=crop&face"
  },
  {
    id: "coração",
    name: "Coração",
    description: "Testa larga e queixo estreito",
    characteristics: ["Testa proeminente", "Queixo delicado"],
    image: "https://images.unsplash.com/photo-1616683693867-8fa0e472faf5?w=150&h=150&fit=crop&face"
  },
  {
    id: "alongado",
    name: "Alongado",
    description: "Altura maior que a largura",
    characteristics: ["Rosto mais comprido", "Testa alta"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&h=150&fit=crop&face"
  }
];

const hairstyles = {
  oval: [
    {
      name: "Bob Clássico",
      image: "https://images.unsplash.com/photo-1594824985091-f6c0c8ce1bcc?w=300&h=300&fit=crop",
      description: "Corte na altura do queixo, versátil e elegante",
      difficulty: "Fácil",
      maintenance: "Baixa",
      compatibility: 95
    },
    {
      name: "Long Bob (Lob)",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
      description: "Comprimento até os ombros, moderno e sofisticado",
      difficulty: "Fácil",
      maintenance: "Baixa",
      compatibility: 90
    },
    {
      name: "Pixie Cut",
      image: "https://images.unsplash.com/photo-1616683693867-8fa0e472faf5?w=300&h=300&fit=crop",
      description: "Corte curtinho, prático e estiloso",
      difficulty: "Médio",
      maintenance: "Alta",
      compatibility: 85
    }
  ],
  redondo: [
    {
      name: "Corte em Camadas",
      image: "https://images.unsplash.com/photo-1605980607089-67de6f5e8b8c?w=300&h=300&fit=crop",
      description: "Camadas longas que alongam o rosto",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 92
    },
    {
      name: "Franja Lateral",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
      description: "Franja de lado que afina o rosto",
      difficulty: "Fácil",
      maintenance: "Média",
      compatibility: 88
    },
    {
      name: "Cabelo Longo Liso",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",
      description: "Comprimento longo com efeito alongador",
      difficulty: "Fácil",
      maintenance: "Baixa",
      compatibility: 85
    }
  ],
  quadrado: [
    {
      name: "Ondas Suaves",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=300&fit=crop",
      description: "Ondas que suavizam os ângulos",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 90
    },
    {
      name: "Bob Assimétrico",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop",
      description: "Corte irregular que quebra a simetria",
      difficulty: "Difícil",
      maintenance: "Alta",
      compatibility: 88
    },
    {
      name: "Franja Longa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Franja que cobre a testa parcialmente",
      difficulty: "Fácil",
      maintenance: "Média",
      compatibility: 85
    }
  ],
  triangular: [
    {
      name: "Volume na Base",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop",
      description: "Corte que adiciona volume na parte inferior",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 88
    },
    {
      name: "Bob Graduado",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Mais volume embaixo, equilibra as proporções",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 85
    }
  ],
  coração: [
    {
      name: "Franja Cheia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?w=300&h=300&fit=crop",
      description: "Franja que diminui a testa visualmente",
      difficulty: "Fácil",
      maintenance: "Alta",
      compatibility: 90
    },
    {
      name: "Ondas Volumosas",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
      description: "Volume que equilibra a parte inferior",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 87
    }
  ],
  alongado: [
    {
      name: "Bob com Franja",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop",
      description: "Corte que diminui o comprimento visual",
      difficulty: "Fácil",
      maintenance: "Média",
      compatibility: 92
    },
    {
      name: "Ondas na Altura dos Ombros",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",
      description: "Adiciona largura visual ao rosto",
      difficulty: "Médio",
      maintenance: "Média",
      compatibility: 89
    }
  ]
};

export function HairstyleSimulator() {
  const [step, setStep] = useState(1);
  const [selectedFaceShape, setSelectedFaceShape] = useState<string>("");
  const [hairLength, setHairLength] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string>("");
  const [hairTexture, setHairTexture] = useState<string>("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const getRecommendations = () => {
    if (!selectedFaceShape) return [];
    
    let baseStyles = hairstyles[selectedFaceShape as keyof typeof hairstyles] || [];
    
    // Filter based on preferences
    let filtered = baseStyles.filter(style => {
      if (hairLength === "curto" && (style.name.includes("Long") || style.name.includes("Longo"))) return false;
      if (hairLength === "longo" && style.name.includes("Pixie")) return false;
      if (lifestyle === "pratico" && style.maintenance === "Alta") return false;
      return true;
    });

    return filtered.length > 0 ? filtered : baseStyles.slice(0, 2);
  };

  const generateRecommendations = () => {
    const recs = getRecommendations();
    setRecommendations(recs);
    setStep(4);
  };

  const resetSimulator = () => {
    setStep(1);
    setSelectedFaceShape("");
    setHairLength("");
    setLifestyle("");
    setHairTexture("");
    setRecommendations([]);
  };

  const getStepProgress = () => {
    return (step / 4) * 100;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "text-green-600 bg-green-100";
      case "Médio": return "text-yellow-600 bg-yellow-100";
      case "Difícil": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getMaintenanceColor = (maintenance: string) => {
    switch (maintenance) {
      case "Baixa": return "text-green-600 bg-green-100";
      case "Média": return "text-yellow-600 bg-yellow-100";
      case "Alta": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section id="simulador" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Simulador de Penteados
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra o corte perfeito para o seu formato de rosto e estilo de vida
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progresso</span>
              <span>{step}/4</span>
            </div>
            <Progress value={getStepProgress()} className="w-full" />
          </div>

          {/* Step 1: Face Shape Selection */}
          {step === 1 && (
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-6 w-6 mr-2 text-purple-600" />
                  Qual é o formato do seu rosto?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {faceShapes.map((shape) => (
                    <Card 
                      key={shape.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedFaceShape === shape.id ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900' : ''
                      }`}
                      onClick={() => setSelectedFaceShape(shape.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <img 
                          src={shape.image} 
                          alt={shape.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                        />
                        <h3 className="font-semibold mb-2">{shape.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {shape.description}
                        </p>
                        <div className="space-y-1">
                          {shape.characteristics.map((char, index) => (
                            <div key={index} className="text-xs text-gray-500 flex items-center">
                              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                              {char}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setStep(2)}
                    disabled={!selectedFaceShape}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Próximo
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Hair Preferences */}
          {step === 2 && (
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scissors className="h-6 w-6 mr-2 text-purple-600" />
                  Preferências de Cabelo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
              </CardContent>
            </Card>
          )}

          {/* Step 3: Lifestyle */}
          {step === 3 && (
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-purple-600" />
                  Estilo de Vida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
              </CardContent>
            </Card>
          )}

          {/* Step 4: Recommendations */}
          {step === 4 && recommendations.length > 0 && (
            <div className="space-y-6 fade-in">
              <Card>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendations.map((style, index) => (
                      <Card key={index} className="interactive-hover">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img 
                              src={style.image} 
                              alt={style.name}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-green-500 text-white">
                                {style.compatibility}% compatível
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{style.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                              {style.description}
                            </p>
                            
                            <div className="flex justify-between items-center mb-4">
                              <Badge className={getDifficultyColor(style.difficulty)}>
                                {style.difficulty}
                              </Badge>
                              <Badge className={getMaintenanceColor(style.maintenance)}>
                                Manutenção: {style.maintenance}
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Compatibilidade</span>
                                <span>{style.compatibility}%</span>
                              </div>
                              <Progress value={style.compatibility} className="w-full" />
                            </div>
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
      </div>
    </section>
  );
}
