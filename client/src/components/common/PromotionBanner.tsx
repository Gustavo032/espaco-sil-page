
import { Gift } from "lucide-react";

interface PromotionBannerProps {
  show: boolean;
  onClose: () => void;
}

export function PromotionBanner({ show, onClose }: PromotionBannerProps) {
  if (!show) return null;

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 text-center relative">
      <div className="flex items-center justify-center space-x-2">
        <Gift className="h-4 w-4" />
        <span className="text-sm font-medium">Primeira consulta GRÁTIS! Agende agora.</span>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
}
