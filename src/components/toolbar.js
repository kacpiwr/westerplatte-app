import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/toolbar_style.css";

export default function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toolbar-container">
    <h1 className="toolbar-title">Westerplatte</h1>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="toolbar-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-content">
          <DropdownMenu.Item className="dropdown-item"> <a href="../soilders.js">Zolnierze</a></DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Opcja 2</DropdownMenu.Item>
          <DropdownMenu.Item className="dropdown-item">Opcja 3</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
  
  );
}
