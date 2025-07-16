
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function Location() {
  return (
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
  );
}
