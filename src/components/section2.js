import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/section2.css";

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className="gap"></div><>
    <div className="container-section2">
        <img alt="zdecie" className="zdjęcie1" src="/assets/westerplatte1.jpg" />
        <div className="text">
            <h1 className="title">Historia obrony Westerplatte</h1>

            <p>
                Przedstawiamy zarys historyczny bohaterskiej obrony Westerplatte, a także dalsze losy żołnierzy, którzy wzięli w niej udział. Na stronie znajdą Państwo opracowania poświęcone tym wydarzeniom, oparte na wiarygodnych źródłach i relacjach.
            </p>
            <img alt="zdecie" className="zdjęcie2" src="/assets/westerplatte1.jpg" />
        </div>
      </div></></>

  
  );
}
