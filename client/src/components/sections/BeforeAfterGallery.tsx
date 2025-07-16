
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Eye, Calendar, ArrowRight, Sparkles } from "lucide-react";

const beforeAfterGallery = [
  {
    id: "progressiva-1",
    service: "Progressiva",
    before: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Transformação completa com progressiva",
    duration: "4 horas",
    client: "Maria S.",
    date: "2024-01-15"
  },
  {
    id: "coloracao-1",
    service: "Coloração",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Mudança radical de cor - tons dourados",
    duration: "3 horas",
    client: "Ana L.",
    date: "2024-01-20"
  },
  {
    id: "corte-1",
    service: "Corte",
    before: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    description: "Corte moderno long bob com camadas",
    duration: "45 min",
    client: "Carla R.",
    date: "2024-01-10"
  },
  {
    id: "luzes-1",
    service: "Luzes",
    before: "https://images.unsplash.com/photo-1594824985091-f6c0c8ce1bcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Luzes californianas com balayage",
    duration: "4 horas",
    client: "Júlia M.",
    date: "2024-01-25"
  },
  {
    id: "botox-1",
    service: "Botox Capilar",
    before: "https://images.unsplash.com/photo-1616683693867-8fa0e472faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Reconstrução e hidratação profunda",
    duration: "2 horas",
    client: "Letícia P.",
    date: "2024-01-12"
  },
  {
    id: "cachos-1",
    service: "Definição de Cachos",
    before: "https://images.unsplash.com/photo-1605980607089-67de6f5e8b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    description: "Finalização profissional para cachos",
    duration: "1.5 horas",
    client: "Beatriz S.",
    date: "2024-01-18"
  }
];

export function BeforeAfterGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof beforeAfterGallery[0] | null>(null);
  const [selectedService, setSelectedService] = useState("Todos");
  const [viewMode, setViewMode] = useState<'before' | 'after' | 'split'>('split');

  const services = ["Todos", ...Array.from(new Set(beforeAfterGallery.map(item => item.service)))];

  const filteredGallery = selectedService === "Todos" 
    ? beforeAfterGallery 
    : beforeAfterGallery.filter(item => item.service === selectedService);

  const openModal = (item: typeof beforeAfterGallery[0]) => {
    setSelectedItem(item);
    setViewMode('split');
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Galeria Antes & Depois
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Veja as incríveis transformações realizadas no Espaço Sil
          </p>
        </div>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map(service => (
            <Button
              key={service}
              variant={selectedService === service ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedService(service)}
              className="text-sm"
            >
              {service}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGallery.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 interactive-hover"
              onClick={() => openModal(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {/* Before/After Images Side by Side */}
                  <div className="flex h-64">
                    <div className="w-1/2 relative">
                      <img 
                        src={item.before} 
                        alt="Antes"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 text-white text-xs">ANTES</Badge>
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={item.after} 
                        alt="Depois"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-500 text-white text-xs">DEPOIS</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Ver Detalhes</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.service}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{item.description}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>Cliente: {item.client}</span>
                    <span>Duração: {item.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Últimas Transformações</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {beforeAfterGallery.slice(0, 4).map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer" onClick={() => openModal(item)}>
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="flex h-48">
                          <div className="w-1/2 relative">
                            <img 
                              src={item.before} 
                              alt="Antes"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-red-500 text-white text-xs">ANTES</Badge>
                            </div>
                          </div>
                          <div className="w-1/2 relative">
                            <img 
                              src={item.after} 
                              alt="Depois"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-green-500 text-white text-xs">DEPOIS</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-3">
                        <Badge variant="outline" className="text-xs mb-1">
                          {item.service}
                        </Badge>
                        <p className="text-sm font-medium">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Modal */}
        <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>{selectedItem.description}</span>
                    <Badge>{selectedItem.service}</Badge>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* View Mode Toggle */}
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant={viewMode === 'before' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('before')}
                    >
                      Antes
                    </Button>
                    <Button
                      variant={viewMode === 'split' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('split')}
                    >
                      Antes & Depois
                    </Button>
                    <Button
                      variant={viewMode === 'after' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('after')}
                    >
                      Depois
                    </Button>
                  </div>

                  {/* Image Display */}
                  <div className="relative rounded-lg overflow-hidden">
                    {viewMode === 'split' && (
                      <div className="flex h-96">
                        <div className="w-1/2 relative">
                          <img 
                            src={selectedItem.before} 
                            alt="Antes"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-500 text-white">ANTES</Badge>
                          </div>
                        </div>
                        <div className="w-1/2 relative">
                          <img 
                            src={selectedItem.after} 
                            alt="Depois"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-500 text-white">DEPOIS</Badge>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <ArrowRight className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-1" />
                        </div>
                      </div>
                    )}
                    
                    {viewMode === 'before' && (
                      <div className="h-96 relative">
                        <img 
                          src={selectedItem.before} 
                          alt="Antes"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-500 text-white">ANTES</Badge>
                        </div>
                      </div>
                    )}
                    
                    {viewMode === 'after' && (
                      <div className="h-96 relative">
                        <img 
                          src={selectedItem.after} 
                          alt="Depois"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500 text-white">DEPOIS</Badge>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400">SERVIÇO</h4>
                      <p className="font-bold text-lg">{selectedItem.service}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400">DURAÇÃO</h4>
                      <p className="font-bold text-lg">{selectedItem.duration}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400">DATA</h4>
                      <p className="font-bold text-lg">
                        {new Date(selectedItem.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Gostou do resultado?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Agende seu horário e faça sua transformação também!
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      onClick={() => window.open('https://agenda.codematch.com.br/dashboard', '_blank')}
                    >
                      Agendar Agora
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
