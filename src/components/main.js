import '../App.css';
import React from "react";
import Header from "../Header.js";
import Footer from "../Footer.js";

function Main() {
  return (
    <div className="Main">
        
        <Header/>
        
        <h1>Saznajte više o Croatia Airlines</h1>
        <div className="tekst">
          <h2>Croatia Airlines</h2> 
          <p>Hrvatski nacionalni avio-prijevoznik osnovan je 1989. godine pod imenom Zagal (Zagreb Airlines) i najprije je počeo kao mala avio-kompanija koja je prevozila pošiljke jednim Cessna 402C zrakoplovom. Tijekom 1991. ime je promijenjeno u Croatia Airlines i kompanija se proširuje na putnički transport.
          Regionalni član saveza Star Alliance postaje 2004. godine, a šest godina kasnije i punopravni član. Naredne godine potpisan je i ugovor sa slovenskim prijevoznikom Adria Airways, nakon čega je poletio prvi zrakoplov između Splita i Zagreba.
          Danas Croatia Airlines, sa sjedištem i bazom u Zračnoj luci Franjo Tuđman u Zagrebu i glavnim zračnim lukama u Splitu i Zadru, povezuje lokacije na Hrvatskom primorju sa gradovima u regiji i širom Europe, do više od 30 destinacija, uz dodatne čarter letove u ljetnjoj sezoni. Konekcije ka glavnim čvorištima saveza Star Alliance kao što su Frankfurt, Munchen, Beč i Zürich su jako dobre. 
          Godišnje ova kompanija preveze oko milijun putnika.</p> <hr/>
        </div>
        <div className="tekst">
          <h2>Prtljaga</h2>
          <p>Croatia Airlines dozvoljava besplatno unošenje ručne prtljage u avion tijekom leta samo ako je u okviru propisanih dimenzija i težine. U kabinu možete unijeti još jedan komad prtljage, koji se smatra osobnim –žensku torbicu ili torbu za laptop.
          Putnici biznis klase mogu unijeti dva komada ručne prtljage, uz ličnu prtljagu. Imajte na umu da u nekim slučajevima putnicima biznis klase može biti uskraćen dodatni komad ručne prtljage, u skladu s tipom zrakoplova i posljedičnim restrikcijama u ukupnoj težini prtljage.  
          Predana prtljaga, koja mora biti u okviru propisanih dimenzija i težine, doplaćuje se ovisno o putničkoj klasi i destinaciji. Doplatu možete obaviti ili dopuniti i preko stranice kompanije, ali ne kasnije od 2 sata pred polazak.
          Prije nego što pođete na put, obavezno provjerite pravila o pakiranju tekućina i popis zabranjenih predmeta i spakirajte se u skladu s njima. </p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Putničke klase</h2>
          <p>Prilikom rezervacije karte, birate jednu od dvije opcije, ekonomsku ili biznis klasu.
          Ekonomska klasa uključuje tri tarife:</p>
          <ul>
            <li>FlyEasy, tarifu prilagođenu putnicima koji putuju samo s ručnom prtljagom,</li>
            <li>FlyOpti, tarifu sa izmjenom datuma putovanja uz nižu doplatu,</li>
            <li>FlyFlexi, koja omogućuje refundaciju karte uz doplatu razlike u cijenama karata</li>
          </ul>
          <p>Biznis klasa pruža veći komfor, razmak među sjedalima i raznovrsniji catering. Objedinjene usluge za poslovne putnike pod nazivom Biznis centar pružaju pogodnosti kao što su rezervacija hotela, popusti prilikom najma automobila i korištenje poslovnog salona u Zračnoj luci u Zagrebu.</p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Check-in online</h2>
          <p>Check-in online je mogući preko internet stranice kompanije Croatia Airlines. Jednostavna procedura vodit će vas kroz čitav check-in.
          Možete odraditi check-in i na odgovarajućem aerodromskom šalteru, uz poštovanje dozvoljenog vremena za prijavu na let. Potrebno je doći nekih 2 sata ranije na aerodrom jer je dozvoljeno vrijeme za prijavu na let do 60 minuta prije zakazanog leta, osim ako nije drugačije navedeno.
          Imajte na umu da gužve na aerodromima mogu biti veće zbog obavezne sigurnosne kontrole. </p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Flota</h2>
          <p>Flota se sastoji od više od 10 zrakoplova, tipova Airbus A319 i Airbus A320 za srednjolinijske destinacije i turboelisni Bombardier Dash 8-Q400 za kraće domaće i regionalne destinacije. Godine 2014. dodijeljeno joj je sedam zvijezdica u području sigurnosti zrakoplova. Među najsigurnijim je kompanijama u svijetu. </p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Obroci i osvježenje</h2>
          <p>Posluženje avio-prijevoznika Croatia Airlines razlikuje se u odnosu na dužinu leta. 
          U ekonomskoj klasi putnicima se bez naknade služi obrok odnosno osvježenje, u skladu s dužinom leta. Kada je u pitanju promet unutar Hrvatske, uključuje tradicionalni kolač uz vodu ili topli napitak. U međunarodnom transportu na letovima do sat i pol vremena služi se sendvič, odnosno na dužim letovima hladan obrok. Omogućen je servis bezalkoholnih pića kao i toplih napitaka.
          U biznis klasi na kraćim destinacijama (letovi do jednog sata) catering uključuje grickalicu, na dužim letovima topli ili hladni obrok. Posluženje alkoholnih i bezalkoholnih pića je uključeno u cijenu karte.
          Djeci se služe 2 vrste obroka prema uzrastu: do 2 godine i do 6 godina.
          Specijalni obroci svih vrsta (vegetarijanski, košer, halal, za putnike sa alergijom) mogu se naručiti prilikom kupovine karte i najkasnije do 24 h prije leta. Ove obroke prethodno mora odobriti sama kompanija. </p>
        </div>
        <Footer/>
        
    </div>
  );
}
export default Main;
