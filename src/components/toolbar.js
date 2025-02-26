import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/toolbar_style.css";

import { Link } from "react-router-dom";

export default function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toolbar-container">
      <h1 className="toolbar-title">Westerplatte</h1>

      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button className="toolbar-button">
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="dropdown-content">
            <DropdownMenu.Item className="dropdown-item">
              <Link to="/">Dom</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">
              <Link to="/soilders">Żołnierz</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">
              <Link to="/stories">Historia</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
