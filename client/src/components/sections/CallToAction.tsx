
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function CallToAction() {
  return (
    <section id="agendamento" className="py-20 primary-gradient text-white">
      <div className="container mx-auto px-4 text-center fade-in">
        <h2 className="text-4xl font-bold mb-6">Pronta para transformar sua beleza?</h2>
        <p className="text-xl mb-8 opacity-90">Agende seu horário agora mesmo e descubra o seu melhor visual</p>
        <Button 
          asChild
          className="bg-white text-purple-800 hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <a href="https://agenda.codematch.com.br/dashboard" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Agora
          </a>
        </Button>
      </div>
    </section>
  );
}
