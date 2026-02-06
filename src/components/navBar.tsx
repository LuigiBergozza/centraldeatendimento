import { Info, House, MessageCircle, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="bg-primary text-pridark text-secondary hidden w-full items-center justify-between gap-4 px-8 py-3 lg:flex">
      <Link to="/">
        <div className="text-2xl">
          <i>
            <b>{`{ ; } class=`}</b>
          </i>
          <span className="text-priDark">"hero"</span>
        </div>
      </Link>

      <div className="flex items-center justify-center gap-5">
        <Link
          to="/"
          className="hover:text-priDark flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all"
        >
          <MessageCircle className="size-[21px]" />
          <span className="font-semibold">Home</span>
        </Link>
        <Link
          to="/cotacao"
          className="hover:text-priDark flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 brightness-150 transition-all"
        >
          <House className="size-[21px]" />
          <span className="font-semibold">Cotação</span>
        </Link>
        <Link
          to="/tracking"
          className="hover:text-priDark flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 brightness-150 transition-all"
        >
          <House className="size-[21px]" />
          <span className="font-semibold">Rastreamento</span>
        </Link>
        <Link
          to="/contato"
          className="hover:text-priDark flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all"
        >
          <Info className="size-[21px]" />
          <span className="font-semibold">Contato</span>
        </Link>
          <Link
          to="/location"
          className="hover:text-priDark flex cursor-pointer items-center gap-2 rounded-sm px-3 py-3 transition-all"
        >
          <Map className="size-[21px]" />
          <span className="font-semibold">Localização</span>
        </Link>
      </div>
      <Link to="/cart">
        <div className="flex text-xl text-secondary items-center gap-4">
            <FaFacebook className="hover:text-priDark cursor-pointer transition-all" />
            <FaInstagram className="hover:text-priDark cursor-pointer transition-all" />
            <FaTwitter className="hover:text-priDark cursor-pointer transition-all" />
            <FaYoutube className="hover:text-priDark cursor-pointer transition-all" />
          </div>
      </Link>
    </nav>
  );
};
