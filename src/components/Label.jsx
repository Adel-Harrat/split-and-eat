export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="self-center"
    >
      {children}
    </label>
  );
}
