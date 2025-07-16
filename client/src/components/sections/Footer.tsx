
import { Scissors, MapPin, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
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
  );
}
