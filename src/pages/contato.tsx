import { Button } from "../components/button";
import { NavBar } from "../components/navBar";
import { NavBarMobile } from "../components/navBarMobile";
import { LocalizacaoUsuario } from "../components/localizacao";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { LocationEdit, MailCheckIcon, Phone } from "lucide-react";
import Footer from "../components/footer";

export function Contato() {
  return (
    <div className="bg-priDark/95 text-white">
      <div className="flex h-full flex-col items-center">
        <div className="flex w-full justify-center">
          <NavBarMobile />
          <NavBar />
        </div>
        <main className="flex grow flex-col items-center justify-center gap-12 p-4 md:p-10 lg:px-20">
          <div className="flex h-full w-full flex-col gap-12 items-center justify-center lg:h-screen lg:flex-row lg:gap-20">
            <div className="flex flex-col w-full md:w-fit items-center justify-center gap-10 lg:flex-row lg:gap-20">
              <div className="mt-8 flex items-center gap-4 lg:mt-0 lg:flex-col">
                <FaFacebook className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
                <FaInstagram className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
                <FaTwitter className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
                <FaYoutube className="text-primary hover:text-secondary cursor-pointer text-3xl transition-all" />
              </div>
              <div className="flex flex-col w-full md:w-fit md:flex-row md:items-center md:gap-25 lg:flex-col lg:gap-0">
                <div className="flex flex-col">
                  <h2 className="text-secondary mb-6 text-4xl font-bold">
                    Entre em contato
                  </h2>
                  <p className="text-secundary mb-8 text-xl">
                    Alguma pergunta?
                    <br />
                    Estamos aqui para ajudar
                  </p>
                </div>
                <div className="space-y-6 ">
                  <div className="flex items-center gap-6">
                    <LocationEdit className="text-primary h-6 w-6" />
                    <div>
                      <h3 className="mb-1 text-2xl font-bold">Localização</h3>
                      <p className="text-secundary">
                        {" "}
                        <LocalizacaoUsuario />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Phone className="text-primary h-6 w-6" />
                    <div>
                      <h3 className="mb-1 text-2xl font-bold">Fone</h3>
                      <p className="text-secundary">(00) 00000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <MailCheckIcon className="text-primary h-6 w-6" />
                    <div>
                      <h3 className="mb-1 text-2xl font-bold">Email</h3>
                      <p className="text-secundary">
                        nomesobrenome@classhero.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-priDark flex w-full flex-col gap-4 rounded-xl md:p-8 lg:w-3/5 ">
              <h3 className="mb-6 text-2xl font-bold">Envie sua mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-md mb-1 block font-medium"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-md mb-1 block font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-md mb-1 block font-medium"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="focus:ring-primary w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 focus:ring-2 focus:outline-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
          <div className="w-full">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
