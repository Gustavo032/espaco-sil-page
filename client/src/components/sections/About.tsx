
import { Award } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Profissional cabeleireira trabalhando" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Sobre o Espaço Sil</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Com anos de experiência no universo da beleza, Sil criou um espaço único onde cada cliente 
              é tratado com carinho e profissionalismo. Especializamos em técnicas modernas e produtos 
              de alta qualidade para garantir os melhores resultados.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nosso diferencial está na atenção personalizada e no cuidado com cada detalhe, 
              sempre buscando realçar a beleza natural de cada pessoa.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="text-purple-600 text-2xl" />
              <span className="text-gray-700 dark:text-gray-300">Profissional certificada com mais de 5 anos de experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
