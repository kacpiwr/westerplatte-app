import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/section1.css";

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className="gap"></div><>
    <div className="container">
          <div className="text">
                <h1 className="title">Witamy w serwisie Westerplatte</h1>

                <p>
                    Witamy w serwisie poświęconym Wojskowej Składnicy Tranzytowej na Westerplatte. Nasza strona ma na celu przybliżenie historii tego wyjątkowego miejsca oraz jego roli w wydarzeniach 1939 roku.
                </p>

          </div>
          <img alt="zdecie" className="zdjęcie" src="/assets/westerplatte_zolnierze_pomnik.jpg" />
      </div></></>

  
  );
}
