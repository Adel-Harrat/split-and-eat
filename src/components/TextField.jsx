export default function TextField({
  id,
  type = "text",
  value,
  onChange = () => null,
  placeholder,
  isNumber,
  disabled = false,
}) {
  return (
    <input
      id={id}
      type={type}
      className={`w-full shadow-sm ring-1 ring-zinc-950/10 focus:outline-dashed focus:outline-2 focus:outline-amber-500 transition duration-300 rounded-lg px-5 py-2 text-center disabled:bg-neutral-200`}
      value={value}
      placeholder={placeholder}
      onChange={(e) =>
        isNumber ? onChange(Number(e.target.value)) : onChange(e.target.value)
      }
      disabled={disabled}
    />
  );
}
