// Props: label, onClick, variant ("primary" | "ghost"), type, disabled
export default function Button({ label, onClick, variant = "primary", type = "button", disabled = false }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
