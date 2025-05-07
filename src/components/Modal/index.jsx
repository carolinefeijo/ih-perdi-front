export default function Modal({ setIsModalOpen, title }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={() => setIsModalOpen(false)}
          >
            X
          </button>
        </div>
        <h2 className="text-xl font-medium mb-4 text-[#404040]">{title}</h2>
      </div>
    </div>
  );
}
