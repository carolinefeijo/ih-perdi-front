import Input from "../../../../../components/imput";
import Modal from "../../../../../components/Modal";

export default function NewProduct({ isOpen, onCloseModal }) {
  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <h2 className="text-xl font-medium mb-4 text-[#404040]">Novo produto</h2>
      <Input
        label="Nome"
        placeholder="ex: Blusa amarela"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
      />
    </Modal>
  );
}
