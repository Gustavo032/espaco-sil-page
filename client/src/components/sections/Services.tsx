
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Scissors, 
  Sparkles, 
  Leaf, 
  Palette, 
  Clock, 
  Eye, 
  Hand,
  Search,
  Filter,
  Heart,
  Share2
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

interface ServicesProps {
  onServiceSelect: (service: typeof services[0]) => void;
}

export function Services({ onServiceSelect }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [likedServices, setLikedServices] = useState<string[]>([]);
  const { toast } = useToast();

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

  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || service.id === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
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
              onClick={() => onServiceSelect(service)}
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
  );
}
