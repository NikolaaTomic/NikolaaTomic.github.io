import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import React from "react";
import Djete from "./djete.js";

function Raspored() {
  const br1 = {
    ime: "Airbus a320",
    tezina: "54,500 kg",
    cijena: "670$",
  };
  const br2 = {
    ime: "Boeing 747",
    tezina: "183,500 kg",
    cijena: "670$",
  };
  return (
    <div className="Raspored">
      <Header/>
      
      <h1>Raspored letova</h1>
      <Djete aa={br1} bb={br2}/>
      <Footer/>
    </div>
  );
}

export default Raspored;
