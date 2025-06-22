import { DynamicIcon } from "lucide-react/dynamic";

export function MenuBadge({ text, type }) {
  if (!text) return null;
  return (
    <span className={`badge badge-xs ml-2 badge-${type || "info"}`}>
      {text}
    </span>
  );
}

export function MenuIcon({ icon }) {
  // Ganti dengan komponen icon sesuai kebutuhan project Anda
  return <DynamicIcon name={icon} color="black" size={18} />;
}
