
import { Card, CardContent } from "@/components/ui/card";

export function BusinessHours() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Horários de Atendimento</h2>

          <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Segunda-feira</span>
                  <span className="text-gray-500 dark:text-gray-400">Fechado</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Terça-feira</span>
                  <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Quarta-feira</span>
                  <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Quinta-feira</span>
                  <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Sexta-feira</span>
                  <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Sábado</span>
                  <span className="text-purple-600 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Domingo</span>
                  <span className="text-purple-600 font-semibold">13:00 - 16:30</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
