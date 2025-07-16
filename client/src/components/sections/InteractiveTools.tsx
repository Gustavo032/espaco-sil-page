
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Droplets, 
  Sun, 
  Sprout, 
  Shield, 
  Download, 
  BookOpen, 
  Clock, 
  Star,
  AlertTriangle,
  Lightbulb,
  Heart,
  Scissors,
  Brush,
  Sparkles
} from "lucide-react";

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
    icon: Brush,
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
    icon: Sprout,
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
    icon: Shield,
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
  },
  {
    id: "waves",
    title: "Ondas Naturais",
    difficulty: "Médio",
    duration: "15 min",
    steps: [
      "Aplique mousse no cabelo úmido",
      "Divida o cabelo em seções",
      "Torça cada seção e prenda",
      "Deixe secar naturalmente",
      "Solte e finalize com óleo"
    ],
    tips: ["Não desfaça as ondas com escova", "Use difusor se necessário"]
  }
];

const hairEmergencyKit = [
  {
    problem: "Cabelo muito oleoso",
    solution: "Shampoo seco caseiro: amido de milho + cacau em pó",
    icon: Droplets
  },
  {
    problem: "Frizz descontrolado", 
    solution: "Misture um pouco de creme de pentear com água",
    icon: Sparkles
  },
  {
    problem: "Pontas duplas",
    solution: "Torça pequenas mechas e corte os fios que saem",
    icon: Scissors
  },
  {
    problem: "Caspa emergencial",
    solution: "Massageie couro cabeludo com óleo de coco morno",
    icon: Heart
  }
];

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
    icon: Droplets,
    tips: [
      "Intensifique a nutrição",
      "Use óleos capilares",
      "Evite água muito quente",
      "Cubra os cabelos no frio"
    ],
    products: ["Máscaras nutritivas", "Óleos vegetais", "Cremes leave-in"]
  }
];

export function InteractiveTools() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [savedGuides, setSavedGuides] = useState<string[]>([]);
  const [currentTutorialStep, setCurrentTutorialStep] = useState<{ [key: string]: number }>({});

  const toggleSaveGuide = (guideId: string) => {
    const newSaved = savedGuides.includes(guideId) 
      ? savedGuides.filter(id => id !== guideId)
      : [...savedGuides, guideId];
    setSavedGuides(newSaved);
    localStorage.setItem('savedHairGuides', JSON.stringify(newSaved));
  };

  const downloadGuide = (guide: typeof hairCareGuides[0]) => {
    const content = `
${guide.title}
${guide.description}

PASSOS:
${guide.content.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

DICAS:
${guide.content.tips.map(tip => `• ${tip}`).join('\n')}

Espaço Sil - Sua beleza é nossa arte
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${guide.title.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const nextTutorialStep = (tutorialId: string, maxSteps: number) => {
    setCurrentTutorialStep(prev => ({
      ...prev,
      [tutorialId]: Math.min((prev[tutorialId] || 0) + 1, maxSteps - 1)
    }));
  };

  const prevTutorialStep = (tutorialId: string) => {
    setCurrentTutorialStep(prev => ({
      ...prev,
      [tutorialId]: Math.max((prev[tutorialId] || 0) - 1, 0)
    }));
  };

  return (
    <section id="ferramentas" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Ferramentas Interativas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprenda técnicas profissionais, cuide do seu cabelo em casa e explore nossos guias especializados
          </p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="guides">Guias de Cuidados</TabsTrigger>
            <TabsTrigger value="tutorials">Tutoriais</TabsTrigger>
            <TabsTrigger value="emergency">Kit Emergência</TabsTrigger>
            <TabsTrigger value="seasonal">Dicas Sazonais</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hairCareGuides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-lg transition-all duration-300 interactive-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                          <guide.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {guide.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSaveGuide(guide.id)}
                          className={savedGuides.includes(guide.id) ? "text-red-500" : "text-gray-400"}
                        >
                          <Heart className={`h-4 w-4 ${savedGuides.includes(guide.id) ? "fill-current" : ""}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => downloadGuide(guide)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-2">
                          PASSOS A SEGUIR:
                        </h4>
                        <ul className="space-y-2">
                          {guide.content.steps.map((step, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Badge variant="outline" className="min-w-[24px] h-6 flex items-center justify-center text-xs">
                                {index + 1}
                              </Badge>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-2">
                          DICAS PROFISSIONAIS:
                        </h4>
                        <ul className="space-y-1">
                          {guide.content.tips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Lightbulb className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interactiveTutorials.map((tutorial) => (
                <Card key={tutorial.id} className="interactive-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      <div className="flex space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {tutorial.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {tutorial.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Progresso</span>
                        <span>{((currentTutorialStep[tutorial.id] || 0) + 1)}/{tutorial.steps.length}</span>
                      </div>
                      <Progress 
                        value={((currentTutorialStep[tutorial.id] || 0) + 1) / tutorial.steps.length * 100} 
                        className="w-full"
                      />
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Passo {(currentTutorialStep[tutorial.id] || 0) + 1}:
                        </h4>
                        <p className="text-sm">
                          {tutorial.steps[currentTutorialStep[tutorial.id] || 0]}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => prevTutorialStep(tutorial.id)}
                          disabled={(currentTutorialStep[tutorial.id] || 0) === 0}
                        >
                          Anterior
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => nextTutorialStep(tutorial.id, tutorial.steps.length)}
                          disabled={(currentTutorialStep[tutorial.id] || 0) === tutorial.steps.length - 1}
                        >
                          Próximo
                        </Button>
                      </div>

                      <div className="border-t pt-3">
                        <h5 className="font-semibold text-sm mb-2">Dicas importantes:</h5>
                        <ul className="space-y-1">
                          {tutorial.tips.map((tip, index) => (
                            <li key={index} className="text-xs flex items-start space-x-1">
                              <Star className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hairEmergencyKit.map((emergency, index) => (
                <Card key={index} className="border-l-4 border-red-400 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                        <emergency.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                          {emergency.problem}
                        </h3>
                        <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg border-l-4 border-green-400">
                          <p className="text-sm">
                            <strong>Solução rápida:</strong> {emergency.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seasonal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seasonalTips.map((season, index) => (
                <Card key={index} className="interactive-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
                        <season.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Cuidados de {season.season}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Dicas essenciais:</h4>
                        <ul className="space-y-2">
                          {season.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2 text-sm">
                              <Lightbulb className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold mb-3">Produtos recomendados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {season.products.map((product, productIndex) => (
                            <Badge key={productIndex} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
