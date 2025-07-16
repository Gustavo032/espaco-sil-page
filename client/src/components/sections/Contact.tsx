
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Instagram, Mail, MessageSquare } from "lucide-react";

interface ContactProps {
  onShowContactForm: () => void;
}

export function Contact({ onShowContactForm }: ContactProps) {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contato</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Entre em contato conosco</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <Card className="bg-green-50 dark:bg-green-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Phone className="text-5xl text-green-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Fale conosco pelo WhatsApp para agendamentos e dúvidas</p>
                <Button 
                  asChild
                  className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-full"
                >
                  <a href="https://wa.me/5511965919937" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    (11) 96591-9937
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Instagram */}
            <Card className="bg-pink-50 dark:bg-pink-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Instagram className="text-5xl text-pink-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Instagram</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Acompanhe nossos trabalhos e novidades no Instagram</p>
                <Button 
                  asChild
                  className="bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-full"
                >
                  <a href="https://instagram.com/guusta.r" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    @guusta.r
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Email Contact */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 shadow-lg fade-in hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Mail className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Envie-nos uma mensagem por email</p>
                <Button 
                  onClick={onShowContactForm}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Clientes satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-gray-600 dark:text-gray-300">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
