import { ArrowLeft, MessageCircleQuestionMark } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const HeaderMobile = () => {
  return (
    <header className="flex justify-between items-center backdrop-blur-xs bg-gray-500/50 gap-4 p-4 lg:hidden">
      <Link to="/">
        <Button variant="Menu">
          <ArrowLeft size={20} />
        </Button>
      </Link>
      <h2 className="text-xl leading-tight text-secondary font-light italic">
        Rastreamento
      </h2>
      <Link to="/contato">
      <Button variant="Menu">
        <MessageCircleQuestionMark />
      </Button>
      </Link>
    </header>
  );
};
