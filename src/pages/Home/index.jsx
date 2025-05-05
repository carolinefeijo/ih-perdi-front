import Table from "../../components/table";

export default function Home() {
  return (
    <div className="bg-white flex flex-col mt-4 mx-2 rounded-md shadow">
      <div className="mb-2">
        <h1 className="text-2xl font-medium text-left mt-4 mx-7 text-[#F27272]">
          Seja bem vindo(a) !
        </h1>
        <p className="text-2x2 font-normal text-left mt-2 mx-7 text-gray-500">
          Aqui você gerencia todo o seu estoque de roupas de forma prática e
          eficiente, mantendo sua loja sempre organizada e no controle.
        </p>
      </div>
      {/* //imput de busca */}
      <div className="flex items-center gap-3 mx-7 mt-4">
        {/* Campo de busca com ícone */}
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F27272]"
          />
        </div>

        {/* // novo item */}
        <button className="bg-[#F27272] text-white px-4 py-2 rounded-lg hover:bg-[#e05d5d] transition">
          Novo item
        </button>
      </div>

      <Table />
    </div>
  );
}
