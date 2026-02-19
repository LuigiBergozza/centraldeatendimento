import { Button } from "../components/button";
import Footer from "../components/footer";
import { NavBar } from "../components/navBar";
import { NavBarMobile } from "../components/navBarMobile";

export const Cotação = () => {
  return (
    <div className="bg-priDark">
      {/* 2. Crie um div principal com 'flex', 'flex-col', e 'min-h-screen' para garantir a altura total e habilitar o Flexbox */}
      <div className="flex min-h-screen flex-col">
        <div className="flex w-full justify-center">
          <NavBar />
          <NavBarMobile />
        </div>

        {/* 3. Adicione 'flex-grow' ao main para que ele ocupe todo o espaço vertical restante e use 'justify-center' para centralizar o conteúdo verticalmente dentro dele. */}
        <main className="flex grow flex-col items-center justify-center gap-12 p-4 md:p-10 lg:px-20">
          <div className="mt-5 flex flex-col items-center justify-center gap-4 text-center text-white lg:flex-row">
            <h2 className="text-primary text-3xl font-bold sm:text-4xl lg:text-5xl">
              Solicite Sua Cotação de Frete{" "}
            </h2>

            <div className="flex flex-col items-center justify-center">
              <legend className="bg-primary/10 rounded-xl px-4 py-2">
                {" "}
                Dados do Solicitante
              </legend>
            </div>
          </div>
          <form
            className="mt-5 flex w-full flex-col items-center gap-5 text-white"
            action=""
          >
            <div className="flex w-full flex-row gap-5">
              <div className="flex w-full flex-col">
                <input
                  className="w-full rounded-2xl bg-white/10 p-2"
                  placeholder="Nome"
                  type="text"
                  id="nome"
                  name="nome"
                  required
                />
              </div>

              <div className="flex w-full flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-row gap-5">
              <div className="flex w-full flex-col">
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Telefone"
                  type="number"
                  id="telefone"
                  name="telefone"
                  required
                />
              </div>

              <div className="flex w-full flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="E-CNPJ"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              {" "}
              <input
                className="rounded-2xl bg-white/10 p-2"
                placeholder="Nome da Empresa"
                type="text"
                id="nomedaempresa"
                name="nomedaempresa"
                required
              />
            </div>

            <div className="flex w-full flex-col">
              {" "}
              <input
                className="rounded-2xl bg-white/10 p-2"
                placeholder="Pagador do Frete"
                type="text"
                id="pagador"
                name="pagador"
              />
            </div>

            <div className="flex w-full flex-row gap-5">
              <div className="flex w-full flex-col">
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Origem"
                  type="text"
                  id="origem"
                  name="origem"
                  required
                />
              </div>

              <div className="flex w-full flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Destino"
                  type="email"
                  id="destino"
                  name="destino"
                  required
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="flex w-full flex-row rounded-2xl bg-white/10 p-2">
                <input
                  className="w-full"
                  placeholder="Urgente"
                  type="text"
                  id="nome"
                  name="nome"
                  required
                />
                <input
                  className=""
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                
                />
              </div>

              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Tipo de mercadoria"
                  type="text"
                  id="mercadoria"
                  name="mercadoria"
                  required
                />
              </div>
              <div className="flex w-full flex-col">
                {" "}
                <input
                  className="rounded-2xl w-full bg-white/10 p-2"
                  placeholder="Tipo de embalagem"
                  type="text"
                  id="embalagem"
                  name="embalagem"
                  required
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-6">
              <div className="flex flex-col">
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Valore de carga"
                  type="text"
                  id="carga"
                  name="carga"
                  required
                />
              </div>

              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Volume"
                  type="text"
                  id="volume"
                  name="volume"
                  required
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Peso Real"
                  type="text"
                  id="peso"
                  name="peso"
                  required
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Comprimento"
                  type="text"
                  id="comprimento"
                  name="comprimento"
                  required
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Largura"
                  type="text"
                  id="largura"
                  name="largura"
                  required
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <input
                  className="rounded-2xl bg-white/10 p-2"
                  placeholder="Altura"
                  type="text"
                  id="altura"
                  name="altura"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <input
                className="rounded-2xl bg-white/10 p-9"
                placeholder="Observações:"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="w-full md:w-90">
              <Button type="submit">Solicitar Cotação</Button>
            </div>
          </form>

          <div className="w-full">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};
