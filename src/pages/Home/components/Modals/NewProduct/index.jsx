import { useState } from "react";
import Input from "../../../../../components/imput";
import Modal from "../../../../../components/Modal";
import InputSelect from "../../../../../components/InputSelect";

export default function NewProduct({ isOpen, onCloseModal }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const options = [
    { label: "Roupas", value: "Roupas" },
    { label: "Calçados", value: "Calçados" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <h2 className="text-xl font-medium mb-4 text-[#404040]">Novo produto</h2>
      <div className="flex flex-row gap-4">
        <Input
          label="Nome"
          placeholder="ex: Blusa amarela"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputSelect
          label="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={options}
        />
      </div>
    </Modal>
  );
}
