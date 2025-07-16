
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Larissa",
    text: "Meu cabelo nunca esteve tão lindo!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b112b4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Juliana",
    text: "O atendimento é impecável. Recomendo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Camila",
    text: "A Sil realmente entende de beleza.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];
type Testimonial = {
  name: string;
  text: string;
  image: string;
};

type TestimonialsProps = {
  currentTestimonial: number;
  setCurrentTestimonial: React.Dispatch<React.SetStateAction<number>>;
  testimonials: Testimonial[];
};

export function Testimonials({
  currentTestimonial,
  setCurrentTestimonial,
  testimonials,
}: TestimonialsProps) {

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [setCurrentTestimonial, testimonials.length]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Depoimentos</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">O que nossas clientes dizem sobre nós</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-8 text-center">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - Cliente satisfeita`} 
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-purple-200 dark:border-purple-700"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">{testimonial.name}</h4>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="hover:bg-purple-100 dark:hover:bg-purple-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="hover:bg-purple-100 dark:hover:bg-purple-900"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
