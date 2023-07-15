export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 font-tw-display px-5 py-2 rounded-md uppercase text-amber-950 active:bg-amber-400"
    >
      {children}
    </button>
  );
}
