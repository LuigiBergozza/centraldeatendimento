import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { MessageCircleQuestionIcon } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full">
      <div className="w-full lg:p-0">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-gray-500 pb-14 sm:flex-row">
          <div className="text-secondary text-3xl">
            <i>
              <b>{`{ ; } class=`}</b>
            </i>
            <span className="text-primary">"hero"</span>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebook className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaInstagram className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaTwitter className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
            <FaYoutube className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 border-b border-gray-500 py-14 lg:flex-row">
          <div className="flex w-full flex-col gap-6 max-lg:items-center max-lg:justify-between sm:flex-row md:gap-12 lg:gap-24">
            <div className="">
              <h6 className="text-primary mb-7 text-lg font-medium max-lg:text-center">
                Class="hero"
              </h6>
              <ul className="flex flex-col gap-3 max-lg:items-center md:gap-6">
                <Link
                  to="/"
                  className="text-secondary focus-within:text-primary hover:text-primary text-base font-normal whitespace-nowrap transition-all duration-300 focus-within:outline-0 max-lg:text-center"
                >
                  <span className="font-semibold">Home</span>
                </Link>
                <Link
                  to="/cotacao"
                  className="text-secondary focus-within:text-primary hover:text-primary text-base font-normal whitespace-nowrap transition-all duration-300 focus-within:outline-0 max-lg:text-center"
                >
                  <span className="font-semibold">Cotação</span>
                </Link>
                <Link
                  to="/tracking"
                  className="text-secondary focus-within:text-primary hover:text-primary text-base font-normal whitespace-nowrap transition-all duration-300 focus-within:outline-0 max-lg:text-center"
                >
                  <span className="font-semibold">Rastreamento</span>
                </Link>
                <Link
                  to="/contato"
                  className="text-secondary focus-within:text-primary hover:text-primary text-base font-normal whitespace-nowrap transition-all duration-300 focus-within:outline-0 max-lg:text-center"
                >
                  <span className="font-semibold">Contato</span>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-primary text-lg font-medium max-lg:text-center">
                Gostaria de receber nosso contato
              </h6>
              <ul className="flex flex-col gap-3 max-lg:items-center md:gap-6">
                <li>
                  <a
                    href="javascript:;"
                    className="text-secondary text-center focus-within:text-primary hover:text-primary font-normal transition-all duration-300 focus-within:outline-0"
                  >
                    Tenha um diagnóstico completo e aprofundado de melhorias em
                    sua logística, identificando gargalos, otimizando fluxos de
                    trabalho e reduzindo custos operacionais para garantir que a
                    sua cadeia de suprimentos atinja a máxima eficiência e
                    performance no mercado atual.{" "}
                  </a>
                </li>
              </ul>
              <div className="relative text-gray-500 focus-within:text-gray-900">
                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center pl-3">
                  <MessageCircleQuestionIcon className="size-[21px]" />
                </div>
                <button
                  type="button"
                  id="default-search"
                  className="border-primary text-secondary placeholder-secondary block w-full rounded-full border bg-transparent py-3 pr-12 pl-6 text-base leading-relaxed font-normal shadow-xs transition-all duration-500 focus:outline-none lg:min-w-md"
                >
                  Alguma dúvida? Fale conosco
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-lg:mx-auto lg:max-w-md">
            <h6 className="text-primary mb-7 text-lg font-medium">
              Newsletter
            </h6>
            <div className="bg-primary/15 rounded-3xl p-5">
              <form action="#" className="flex flex-col gap-5">
                <div className="relative">
                  <label className="text-secondary mb-2 flex items-center text-base font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="default-search"
                    className="border-secondary text-secondary placeholder-secondary block w-full rounded-full border bg-transparent px-5 py-3 text-lg leading-relaxed font-normal shadow-xs focus-within:border-gray-300 focus:outline-none"
                    placeholder="name@classhero.com"
                    required={true}
                  />
                </div>
                <div className="flex flex-col items-center justify-between gap-3 min-[540px]:flex-row md:gap-6">
                  <div className="black flex items-start">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="checked:border-secondary checked:bg-primary/15 hover:border-secondary mr-2 aspect-square h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-600 bg-transparent checked:bg-center checked:bg-no-repeat hover:bg-gray-900"
                      checked={true}
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="text-secondary cursor-pointer text-sm font-normal"
                    >
                      I agree with{" "}
                      <a href="javascript:;" className="text-primary">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="javascript:;" className="text-primary">
                        Terms of Condition
                      </a>
                    </label>
                  </div>
                  <Button>Enviar</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-5 pt-7 sm:flex-row">
          <span className="text-secondary text-sm font-normal">
            <Link to="/">
              <span>
                {" "}
                © <b>{`{ ; } class=`}</b>"hero" |
              </span>
              <span> 2026, All rights reserved.</span>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
