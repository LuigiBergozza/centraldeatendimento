import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { NavBar } from "../components/navBar";

export function Location() {
  return (
    <div className="bg-priDark/95 text-white">
      <div className="flex w-full justify-center">
        <NavBar />
      </div>
      <form
        action="https://fabform.io/f/xxxxx"
        method="post"
        className="w-full p-4 md:p-10 flex flex-col justify-center items-center gap-12 lg:px-20 md:h-screen"
      >
        <div className="text-center">
            <h2 className="text-primary mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Localização estratégica
            </h2>
            <p className="mt-2 text-lg font-normal text-white lg:text-xl lg:leading-8">
              Otimizando os processos logísticos
            </p>
          </div>
        <div className="w-full">
          <div className="flex w-full flex-col items-center justify-center gap-12 lg:flex-row">
            <div className="w-full">
              <iframe
              className="rounded-4xl h-[calc(100vh-540px)] lg:h-[calc(100vh-340px)] w-full"
                src="https://www.google.com/maps?q=Brasilia,DF&output=embed"
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex w-full flex-col gap-2 md:w-150">
              <Link to="/cotacao" className="w-full">
                <Button>Faça sua cotação</Button>
              </Link>

              <Link to="/tracking" className="w-full">
                <Button>Rastreamento de cargas</Button>
              </Link>

              <Link to="/contato" className="w-full">
                <Button>Fale conosco</Button>
              </Link>

              <Button>Pesquisa de Satisfação</Button>
              <Button>Acesse nosso Website</Button>
              <Link to="/location" className="w-full">
                <Button>Nossa Localização</Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
