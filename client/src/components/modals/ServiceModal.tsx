
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Heart, Share2, Calendar } from "lucide-react";

interface ServiceModalProps {
  service: any;
  isOpen: boolean;
  onClose: () => void;
  likedServices: string[];
  onToggleLike: (serviceId: string) => void;
  onShare: (service: any) => void;
}

export function ServiceModal({
  service,
  isOpen,
  onClose,
  likedServices,
  onToggleLike,
  onShare
}: ServiceModalProps) {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.name}
    >
      <div className="text-gray-600 dark:text-gray-300 mb-6">
        {service.details}
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onToggleLike(service.id)}
            className="flex items-center space-x-2"
          >
            <Heart 
              className={`h-4 w-4 ${likedServices.includes(service.id) 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400'
              }`} 
            />
            <span>{likedServices.includes(service.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(service)}
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
  );
}
