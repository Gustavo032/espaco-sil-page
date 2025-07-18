
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Localização</h2>

         <Card className="shadow-lg bg-white dark:bg-gray-900 dark:border-gray-700 flex flex-col md:flex-row items-center shadow-x">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3539548654317!2d-46.925860524670114!3d-23.555727878803726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06ea14cbde33%3A0xd3a1eb23a186ec6f!2sR.%20Doze%20de%20Setembro%2C%20328%20-%20Jardim%20Bela%20Vista%2C%20Itapevi%20-%20SP%2C%2006656-210!5e0!3m2!1spt-BR!2sbr!4v1752862417913!5m2!1spt-BR!2sbr"
				className="w-full md:w-[300px] h-[250px]"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>

			<CardContent className="p-8 w-full">
				<div className="flex items-center justify-center mb-6">
				<MapPin className="text-purple-600 text-3xl mr-3" />
				<div className="text-left">
					<h3 className="text-xl font-semibold text-gray-800 dark:text-white">Endereço</h3>
					<p className="text-gray-600 dark:text-gray-300">
					R. Doze de Setembro, 328 - Jardim Bela Vista, Itapevi - SP
					</p>
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
