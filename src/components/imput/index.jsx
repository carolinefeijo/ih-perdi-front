export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F27272]"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
