import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/section1.css";

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className="gap"></div>
    <div className="container">
    <h1 className="title-mobile">Witamy w serwisie Westerplatte</h1>
          <div className="text">
                <h1 className="title">Witamy w serwisie Westerplatte</h1>
                <p>
                    Witamy w serwisie poświęconym Wojskowej Składnicy Tranzytowej na Westerplatte. Nasza strona ma na celu przybliżenie historii tego wyjątkowego miejsca oraz jego roli w wydarzeniach września 1939 roku, a także przedstawienie sylwetki obrońców.
                </p>

          </div>
          <img alt="zdjecie" className="zdjęcie" src="/assets/pic/przed3.jpg" />
      </div></>

  
  );
}
