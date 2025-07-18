
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "Tratamentos",
    questions: [
      {
        question: "Com que frequência devo cortar o cabelo?",
        answer: "Para cabelos saudáveis, recomenda-se cortar a cada 6-8 semanas. Para cabelos danificados, pode ser necessário cortar mais frequentemente, a cada 4-6 semanas. O corte regular remove as pontas duplas e mantém o cabelo com aparência saudável."
      },
      {
        question: "Quanto tempo dura uma progressiva?",
        answer: "Uma progressiva bem feita pode durar de 3 a 6 meses, dependendo do tipo de cabelo, cuidados pós-tratamento e produtos utilizados. Cabelos mais porosos tendem a perder o efeito mais rapidamente."
      },
      {
        question: "Posso fazer coloração no mesmo dia da química?",
        answer: "Não recomendamos. É melhor esperar pelo menos 15 dias entre procedimentos químicos para não danificar o cabelo. O ideal é fazer primeiro a coloração e depois aguardar para fazer a progressiva ou relaxamento."
      },
      {
        question: "Qual a diferença entre hidratação, nutrição e reconstrução?",
        answer: "Hidratação repõe água (para cabelos ressecados), nutrição repõe lipídios/gordura (para cabelos opacos), e reconstrução repõe proteínas (para cabelos elásticos/borrachosos). Cada uma atende uma necessidade específica do cabelo."
      }
    ]
  },
  {
    category: "Cuidados",
    questions: [
      {
        question: "Como sei se meu cabelo precisa de hidratação?",
        answer: "Sinais incluem: ressecamento, falta de brilho, pontas duplas, dificuldade para pentear, falta de elasticidade e aspecto áspero. O teste da porosidade também ajuda a identificar a necessidade."
      },
      {
        question: "Como manter a cor do cabelo por mais tempo?",
        answer: "Use produtos específicos para cabelos coloridos, evite água muito quente, use protetor solar capilar, faça hidratação semanal e mantenha visitas regulares ao salão para retoques."
      },
      {
        question: "Posso usar qualquer shampoo após química?",
        answer: "Não. Após procedimentos químicos, use sempre shampoos sem sal (sulfato), que são mais suaves e não removem o tratamento. Produtos com sal podem danificar e encurtar a durabilidade do procedimento."
      },
      {
        question: "Como evitar o frizz no cabelo?",
        answer: "Use produtos anti-frizz, evite escovar o cabelo seco, durma com fronha de cetim, use leave-in adequado ao seu tipo de cabelo e mantenha a hidratação em dia."
      }
    ]
  },
  {
    category: "Produtos",
    questions: [
      {
        question: "Qual a diferença entre ampola e máscara?",
        answer: "A ampola é um tratamento intensivo com alta concentração de ativos, usada esporadicamente. A máscara é um tratamento de manutenção, menos concentrada, usada semanalmente."
      },
      {
        question: "Devo usar condicionador todos os dias?",
        answer: "Depende do seu tipo de cabelo. Cabelos secos e cacheados se beneficiam do uso diário. Cabelos oleosos podem precisar apenas nas pontas ou em dias alternados."
      },
      {
        question: "Como escolher o leave-in ideal?",
        answer: "Para cabelos oleosos: leave-in leve e sem óleo. Para cabelos secos: leave-in nutritivo com óleos. Para cabelos coloridos: com proteção UV. Para cabelos cacheados: com definição e controle de frizz."
      }
    ]
  },
  {
    category: "Agendamento",
    questions: [
      {
        question: "Com quanto tempo de antecedência devo agendar?",
        answer: "Recomendamos agendar com pelo menos uma semana de antecedência, especialmente para finais de semana e procedimentos que demoram mais tempo, como coloração e progressiva."
      },
      {
        question: "Posso remarcar meu horário?",
        answer: "Sim, mas pedimos que seja feito com pelo menos 24 horas de antecedência para não prejudicar outros clientes. Remarcações de última hora podem estar sujeitas a taxas."
      },
      {
        question: "Quanto tempo duram os procedimentos?",
        answer: "Corte: 30-45 min, Coloração: 2-3h, Progressiva: 3-4h, Hidratação: 1h, Manicure: 45 min, Sobrancelha: 20 min. Os tempos podem variar conforme o comprimento e estado do cabelo."
      }
    ]
  }
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqData.map(item => item.category)))];

  const toggleExpanded = (itemKey: string) => {
    setExpandedItems(prev => 
      prev.includes(itemKey) 
        ? prev.filter(key => key !== itemKey)
        : [...prev, itemKey]
    );
  };

  const filteredFAQ = faqData.filter(category => {
    if (selectedCategory !== "Todos" && category.category !== selectedCategory) {
      return false;
    }
    
    if (searchTerm) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return true;
  }).map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      !searchTerm || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e cuidados capilares
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar por pergunta ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredFAQ.map((category) => (
              <div key={category.category}>
                {category.questions.length > 0 && (
                  <>
                    {selectedCategory === "Todos" && (
                      <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
                        <HelpCircle className="h-5 w-5 mr-2" />
                        {category.category}
                      </h3>
                    )}
                    
                    <div className="space-y-3">
                      {category.questions.map((faq, index) => {
                        const itemKey = `${category.category}-${index}`;
                        const isExpanded = expandedItems.includes(itemKey);
                        
                        return (
                          <Card key={itemKey} className="transition-all duration-300 hover:shadow-md">
                            <CardContent className="p-0">
                              <button
                                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                onClick={() => toggleExpanded(itemKey)}
                              >
                                <h4 className="font-semibold text-lg pr-4">{faq.question}</h4>
                                {isExpanded ? (
                                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                )}
                              </button>
                              
                              {isExpanded && (
                                <div className="px-6 pb-6 pt-0">
                                  <div className="border-t pt-4">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {filteredFAQ.every(category => category.questions.length === 0) && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Tente buscar com outros termos ou entre em contato conosco
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Não encontrou sua resposta?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              onClick={() => window.open('https://wa.me/5511965919937', '_blank')}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
