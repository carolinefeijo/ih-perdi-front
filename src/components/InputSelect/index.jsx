export default function InputSelect({ label, value, onChange, options = [] }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <select
        className={`w-full px-4 py-2 border  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F27272] ${
          value === "" ? "text-[#626467]" : "text-[#404040] font-medium"
        }`}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {options?.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}
