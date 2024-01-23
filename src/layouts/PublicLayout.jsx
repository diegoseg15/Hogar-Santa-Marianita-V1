import React from "react";
import { Header } from "../components/Header"; // importa el componente Sidebar desde "../components/Sidebar"
import { Footer } from "../components/Footer";
import { SocialSpeedDial } from "../components/SocialSpeedDial";

// define la función AdminLayout y recibe un objeto props
export function PublicLayout(props) {
  const { children } = props; // extrae la propiedad children del objeto props y la almacena en una variable constante

  // retorna una estructura de JSX
  return (
    <div className="overflow-hidden overscroll-none">
      <div className="absolute w-full z-30">
        <Header />
      </div>
      <div className="absolute w-full z-30">
        <SocialSpeedDial />
      </div>
      <div className="z-20 overflow-hidden">
        {children}
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
