import { Button } from "../components/button";
import { House, ListTodo, MapPinCheck, MessageCircle, Map, } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const NavBarMobile = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    /* Add o ev de rolagem */
    const handleScroll = () => {
      /* Quando o user rola a página, a função handleScroll é chamada.*/
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Verifica se o usuário está próximo do final da página
      // Compara a posição do scroll com a altura da janela e a altura total da página
      // Se a soma dessas duas quantidades for maior ou igual a documentHeight - 100,
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 100;

      setIsVisible(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`2md:scale-[0.8] fixed bottom-5 z-10 flex gap-4 rounded-full bg-gray-500/50 p-4 backdrop-blur-xs  md:gap-6 lg:hidden ${
        !isVisible ? "opacity-0" : ""
      }`}
    >
      <Link to="/">
        <Button id="home" variant="Menu">
          <House />
        </Button>
      </Link>
      <Link to="/cotacao">
        <Button id="empresa" variant="Menu">
          < ListTodo />
        </Button>
      </Link>
      <Link to="/tracking">
        <Button id="carrinho" variant="Menu">
          <MapPinCheck />
        </Button>
      </Link>

      <Link to="/contato">
        <Button id="produto" variant="Menu">
          <MessageCircle />
        </Button>
      </Link>

      <Link to="/location">
        <Button id="contato" variant="Menu">
          <Map />
        </Button>
      </Link>
    </nav>
  );
};
