
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  show: boolean;
  onClick: () => void;
}

export function BackToTop({ show, onClick }: BackToTopProps) {
  if (!show) return null;

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white shadow-lg rounded-full p-3 transition-all duration-300"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
