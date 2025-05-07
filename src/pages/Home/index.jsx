import { useState } from "react";
import Table from "../../components/table";
import NewProduct from "./components/Modals/NewProduct";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const onCloseModal = () => setIsModalOpen(false);

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

      <div className="flex items-center gap-3 mx-7 mt-4">
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="O que você procura ?"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F27272]"
          />
        </div>

        <button
          className="bg-[#F27272] text-white px-4 py-2 rounded-lg hover:bg-[#e05d5d] transition"
          onClick={() => setIsModalOpen(true)}
        >
          Novo item
        </button>
      </div>

      <Table />
      <NewProduct isOpen={isModalOpen} onCloseModal={onCloseModal} />
    </div>
  );
}
