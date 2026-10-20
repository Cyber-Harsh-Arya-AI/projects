import { useState } from "react";
import Button from "./Button";

// Props: title, links [{label, href}]. State: menu open/closed (mobile).
export default function Header({ title, links }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button label={open ? "Close" : "Menu"} variant="ghost" onClick={() => setOpen(!open)} />
      <nav className={open ? "nav open" : "nav"}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
