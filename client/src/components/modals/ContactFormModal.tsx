
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setContactForm({ name: "", email: "", message: "" });
      onClose();
    }, 1000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Enviar Mensagem"
    >
      <form onSubmit={handleContactSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nome
          </label>
          <Input
            id="name"
            type="text"
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={contactForm.email}
            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
            placeholder="seu@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Mensagem
          </label>
          <Textarea
            id="message"
            value={contactForm.message}
            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
            placeholder="Sua mensagem..."
            rows={4}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          <Mail className="mr-2 h-4 w-4" />
          Enviar Mensagem
        </Button>
      </form>
    </Modal>
  );
}
