import {
  BoxIcon,
  DollarSign,
  DoorClosed,
  LocationEdit,
  Warehouse,
} from "lucide-react";
import { HeaderMobile } from "../components/headerMobile";
import { NavBar } from "../components/navBar";
export const Tracking = () => {
  return (
    <div className="bg-priDark flex flex-col">
      <HeaderMobile />
      <NavBar />
      <section className="bg-priDark flex items-center p-4 md:p-10 flex-col gap-12 lg:px-20 justify-center md:h-svh">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center flex flex-col gap-4">
            <p className="text-sm font-bold text-white uppercase">
              Pedido: #2569853
            </p>
            <h2 className="text-primary text-3xl font-bold sm:text-4xl lg:text-5xl">
              Sua encomenda no melhor caminho{" "}
            </h2>
            <p className="text-lg font-normal text-white lg:text-xl lg:leading-8">
              Última atualização em 30/06/2025 às 09:38{" "}
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 w-full lg:grid-cols-5">
            <li className="relative flex rounded-2xl w-full bg-green-500/10 p-4 lg:flex-col">
              <div className="flex items-center">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300/20 bg-gray-50/20">
                  <LocationEdit className="text-gray-500" />
                </div>
                <div className="m-3 hidden h-0 w-full border border-gray-300/20 lg:block"></div>
              </div>
              <div className="ml-6 text-white/20 lg:mt-10 lg:ml-0">
                <h3 className="text-xl font-bold">Pedido Recebido</h3>
                <h4 className="mt-2">
                  Use your own Notion databases or duplicate ours.
                </h4>
              </div>
            </li>
            <li className="relative flex rounded-2xl w-full bg-green-500/10 p-4 lg:flex-col">
              <div className="flex items-center">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300/20 bg-gray-50/20">
                  <DollarSign className="text-gray-500" />
                </div>
                <div className="m-3 hidden h-0 w-full border border-gray-300/20 lg:block"></div>
              </div>
              <div className="ml-6 text-white/20 lg:mt-10 lg:ml-0">
                <h3 className="text-xl font-bold">Pagamento Confirmado</h3>
                <h4 className="mt-2">
                  Use your own Notion databases or duplicate ours.
                </h4>
              </div>
            </li>
            <li className="relative flex rounded-2xl w-full bg-green-500 p-4 lg:flex-col">
              <div className="flex items-center">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50/20">
                  <BoxIcon className="text-white" />
                </div>
                <div className="m-3 hidden h-0 w-full border border-gray-300 lg:block"></div>
              </div>
              <div className="ml-6 text-white lg:mt-10 lg:ml-0">
                <h3 className="text-xl font-bold">Pronto para envio </h3>
                <h4 className="mt-2">
                  Use your own Notion databases or duplicate ours.
                </h4>
              </div>
            </li>
            <li className="relative flex rounded-2xl w-full bg-tertiary p-4 lg:flex-col">
              <div className="flex items-center">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50/20">
                  <Warehouse className="text-white" />
                </div>
                <div className="m-3 hidden h-0 w-full border border-gray-300 lg:block"></div>
              </div>
              <div className="ml-6 text-white lg:mt-10 lg:ml-0">
                <h3 className="text-xl font-bold">
                  Pedido com a transportadora
                </h3>
                <h4 className="mt-2">
                  Use your own Notion databases or duplicate ours.
                </h4>
              </div>
            </li>
            <li className="relative flex rounded-2xl w-full p-4 opacity-20 lg:flex-col">
              <div className="flex items-center">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50">
                  <DoorClosed className="text-gray-500" />
                </div>
                <div className="m-3 hidden h-0 w-full border border-gray-300 lg:block"></div>
              </div>
              <div className="ml-6 text-white lg:mt-10 lg:ml-0">
                <h3 className="text-xl font-bold">Pedido Entregue</h3>
                <h4 className="mt-2">
                  Use your own Notion databases or duplicate ours.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
