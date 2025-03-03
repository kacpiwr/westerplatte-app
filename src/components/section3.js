import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "../styles/section1.css";

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className="gap"></div><>
    <div className="container">
    <h1 className="title-mobile">Materiały i świadectwa</h1>
          <div className="text">
                <h1 className="title">Materiały i świadectwa</h1>

                <p>
                    Większość prezentowanych materiałów została zgromadzona przez Stanisławę Górnikiewicz-Kurowską, znawczynię i popularyzatorkę wiedzy o WST Westerplatte. Udostępniamy również filmy oraz wywiady z żołnierzami, którzy walczyli na Westerplatte.
                </p>
          </div>
          <img alt="zdecie" className="zdjęcie" src="/assets/westerplatte2.jpg" />
      </div></></>

  
  );
}
