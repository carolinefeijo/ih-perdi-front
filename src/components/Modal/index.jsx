export default function Modal({ children, isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-full max-w-md min-h-[200px] bg-white p-6 rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-end">
          <button
            className="px-2 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
