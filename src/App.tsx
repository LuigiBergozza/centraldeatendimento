import { BrowserRouter, Routes, Route } from "react-router-dom";
//npm install react-router-dom  =  biblioteca de roteamento, Criar rotas e navegar entre elas
//npm install --save-dev @types/react-router-dom  =  pacote de declaração de tipo
import { Home } from "./pages/home";
import { Tracking } from "./pages/tracking";
import { Cotação } from "./pages/cotacao";
import { Contato } from "./pages/contato";
import { Location } from "./pages/location";

// 💡 Defina o nome do seu repositório aqui
const REPO_NAME = "centraldeatendimeto"; 

// O basename é "/" localmente (DEV) e "/nome-do-repositorio/" no deploy (PROD)
const BASE_NAME = 
  import.meta.env.DEV 
  //É uma variável booleana que o Vite injeta. Quando você roda dev e for true será "/" do contrario será o nome do repositório
    ? "/" 
    : `/${REPO_NAME}/`; // Agora aponta para /centraldeatendimeto/

const App = () => {
  return (
    // Adicione a propriedade 'basename' ao BrowserRouter
    <BrowserRouter basename={BASE_NAME}>
      <Routes>
        {/* As rotas internas permanecem com a barra ('/') */}
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/cotacao" element={<Cotação />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;