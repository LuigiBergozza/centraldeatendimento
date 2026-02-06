import { useState, useEffect } from "react";
import { Button } from "../components/button";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Arrow from "../assets/Vector 1.svg";
import { Link } from "react-router-dom";
import videoHome from "../assets/1.mp4";

export const Home = () => {
  // Estado para armazenar a classe de altura dinâmica para a seção.
  // Começa com a altura padrão 'h-99'.
  const [alturaSecaoDireita, setAlturaSecaoDireita] =
    useState("h-60 lg:h-full");

  // Hook useEffect para adicionar e remover o listener de evento de rolagem.
  useEffect(() => {
    // Função que verifica a posição da rolagem (scroll)
    const handleScroll = () => {
      // document.documentElement.scrollHeight: Altura total do conteúdo da página
      // window.innerHeight: Altura da viewport (área visível do navegador)
      // window.scrollY: Posição vertical atual da rolagem

      // Verifica se o usuário chegou ao fundo da página (com uma pequena margem de tolerância de 5 pixels).
      const estaNoFundo =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      // Atualiza a classe de altura com base na posição da rolagem.
      if (estaNoFundo) {
        setAlturaSecaoDireita(
          "h-190 lg:h-full transition-all ease-in-out duration-900",
        );
      } else {
        setAlturaSecaoDireita(
          "h-99 md:h-60 transition-all lg:h-full ease-in-out duration-900",
        );
      }
    };

    // Adiciona o listener de evento de rolagem ao objeto global 'window'.
    window.addEventListener("scroll", handleScroll);

    // Função de limpeza: Remove o listener quando o componente é desmontado,
    // prevenindo vazamentos de memória (memory leaks).
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array de dependências vazio: garante que o useEffect rode apenas uma vez (no montagem).

  return (
    <body className="bg-priDark/95 h-svh text-white">
      {/* 1. VÍDEO DE BACKGROUND: Fixado na tela com z-index negativo */}
      {/* 2. OVERLAY ESCURO */}
      <div className="fixed -z-10 flex h-svh w-full flex-col lg:flex-row">
        {/* Seção Esquerda (3/3 ou full) */}
        <div className="h-3/3 lg:h-full mix-blend-color lg:w-3/3">
          <video
            className="fixed -z-10 h-full w-full object-cover opacity-10"
            src={videoHome}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="from-primary/80 via-primary/10 h-full bg-linear-to-b"></div>
        </div>

        {/* Seção Direita (a que terá a altura dinâmica) */}
        {/* A classe de altura (h-99 ou h-130) é definida dinamicamente pelo estado. */}
        <div
          className={`${alturaSecaoDireita} rounded-t-4xl lg:h-full lg:w-1/3 lg:rounded-none`}
        >
          <div className="bg-tertiary h-full rounded-t-4xl lg:h-full lg:rounded-none"></div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between lg:h-svh">
        {/* CONTEÚDO PRINCIPAL: Centralizado no meio da tela */}
        <main className="flex h-svh w-full flex-col items-center justify-center gap-12 p-10 lg:h-full lg:flex-row lg:gap-20">
          {/* Bloco de Botões */}
          <div className="flex w-full flex-col items-start gap-2 lg:w-lg">
            <div className="text-secondary mb-5 flex flex-row text-3xl lg:my-0 lg:mb-10 lg:text-4xl">
              <i>
                <b>{`{ ; } class=`}</b>
              </i>
              <span className="text-primary">"hero"</span>
            </div>
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

          {/* Bloco de Informações e Vídeo Secundário */}
          <div className="relative flex flex-col items-start justify-center gap-3">
            <div className="ml-10 flex flex-col items-start">
              <p>Referencia em tranporte aereo</p>
              <ul>
                <li className="flex items-center justify-center text-xl font-bold">
                  <span className="text-tertiary mr-2 text-xl">•</span>
                  Área da saúde
                </li>
              </ul>
            </div>
            {/* Vídeo secundário (apenas no container) */}
            <video
              className="h-60 w-full rounded-4xl object-cover md:h-[calc(100vh-640px)] md:w-svw lg:h-90 lg:w-lg"
              src={videoHome}
              autoPlay
              loop
              muted
              playsInline
            />
            <img
              src={Arrow}
              alt="seta"
              className="absolute top-0 left-5 h-40"
            />
          </div>
          <div className="flex items-center gap-4 text-white lg:flex-col lg:mt-30">
            <FaFacebook className="hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaInstagram className="hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaTwitter className="hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaYoutube className="hover:text-secondary cursor-pointer text-3xl transition-all" />
          </div>
        </main>
        {/* Seção de rodapé que garante a rolagem */}
        <div className="lg:from-primary/90 lg:via-primary/0 flex h-55 w-full flex-col items-center justify-center gap-4 p-10 lg:h-30 lg:w-280 lg:bg-linear-to-r">
          <p className="text-center">
            Gostaria de receber nosso contato para um diagnóstico de melhorias
            em sua logística?
          </p>

          <div className="flex w-full flex-col gap-4 text-white lg:w-170 lg:flex-row">
            <input
              className="w-full rounded-2xl bg-priDark/50 text-white p-2"
              placeholder="E-mail corporativo"
              type="text"
              id="E-mail corporativo"
              name="E-mail corporativo"
              required
            />

            <input
              className="w-full rounded-2xl bg-priDark/50 text-white p-2"
              placeholder="Whatsapp"
              type="tel"
              id="Whatsapp"
              name="Whatsapp"
              required
            />
          </div>
        </div>
      </div>
    </body>
  );
};
