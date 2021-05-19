import '../App.css';
import Header from "../Header.js";
import Slika from "../slike/airbus.jpg";
import Slika2 from "../slike/boeing.jpg";
import Footer from "../Footer.js";


function Flota() {
  
  
  return (
    <div className="flota">
      <Header/>
      
      <h1>Lista Zrakoplova</h1>
      <p className="podnaslov">Imamo široku listu zrakoplova. Neki od naših najpoznatijih su Airbus a320 i Boeing 747!</p>
      <div className="tekst2">
        <h2>Airbus a320</h2>
        <img src={Slika} className="slika1"/>
        <p>Airbus A-320 je moderni uskotrupni putnički zrakoplov srednjeg doleta. Poznat je i kao prvi linijski putnički zrakoplov u koji je ugrađena napredna "fly-by-wire" tehnologija uz pomoću koje se zrakoplovom upravlja putem elektronskih impulsa. 
        Upravljanje se vrši preko "Joysticka" koji je pilotu s lijeve a kopilotu s desne strane. Prvi let bio je 22. veljače 1987. godine.
        Nakon početnog uspjeha A300, Airbus je počeo razvijati novi model koji bi trebao zamijeniti jedan od najpopularnijih zrakoplova tog vremena, Boeing 727. Planiran je avion iste veličine ali ekonomičniji i s inačicama koje bi prevozile različiti broj putnika.
        Digitalna tehnologija A320 za dvije generacije nadmašuje staru, analognu tehnologiju ugrađenu u B727. Naprednim dizajn uključuje: "fly-by-wire" upravljanje zrakoplovom, izradu primarnih dijelova konstrukcije od kompozitnih materijala, kontrolu centra težišta pomoću razmještaja goriva, "Glass cockpit" pilotska kabina s EFIS sustavom i dvočlana posada pilotske kabine. S navedenom modernizacijom A320 troši i do 50% manje goriva od B727.
        Dijelovi zrakoplova proizvedeni u više Airbusovih tvornica prevoze se na završno sklapanje u Hamburg Finkenwerder (A318, A319, A321) ili u Toulouse Blagnac (A320). Dijelovi se prevoze posebnim transportnim zrakoplovom A300-600ST "Beluga".
        A320 i njegove inačice su najproizvođeniji komercijalni avioni. Kako bi kompanija održala zadane rokove planira se proizvodnja od 30 zrakoplova mjesečno krajem 2006., 32 početkom 2007. 34 od ožujaka 2008., 36 od prosinca 2008. do čak 40 sredinom 2009. godine. A319 je kraća inačica A320 s doletom od 7200 km. U dvije klase može smjestiti 124 putnika. Zajedno s A320 najpopularnije su inačice ove skupine zrakoplova. 2003. godine easyJet kompanija preuzela je A319 zrakoplove s manjim prostorom kabinske kuhinje što je omogućilo povećanje broja sjedišta na 156. Radi sigurnosnih zahtjeva na te zrakoplove su iznad krila ugrađeni dodatni izlazi u slučaju opasnosti. EasyJet-ova narudžba od 120 aviona A319s plus još 120 aviona u planu, najveći je zaključeni prodajni ugovor aviona tijekom tog vremena.</p>
      </div>
      <div className="tekst2">
        <h2>Boeing 747</h2>
        <img src={Slika2} className="slika2"/>
        <p>Boeing 747, često zvan Jumbo Jet, je četveromotorni širokotrupni linijski putnički zrakoplov. Jedan je od najvećih komercijalnih putničkih zrakoplova trenutačno u upotrebi. Dulje od tri desetljeća bio je najveći putnički zrakoplov u upotrebi, sve do uvođenja Airbus A380 u redovni promet 25. listopada 2007.
        Četveromotorni 747, proizvod tvrtke Boeing, ima dvokatnu putničku kabinu u kojoj su na kraćem gornjem katu obično smješteni putnici poslovne klase. U najčešćoj konfiguraciji s prvom, poslovnom i ekonomskom klasom zrakoplov prima oko 400 putnika, a u konfiguraciji s jednom klasom do 600. Karakteristična grba gornjeg kata kabine učinila je 747 iznimno prepoznatljivim simbolom zračnog prijevoza, te najprepoznatlivijim putničkim zrakoplovom današnjice..
        747 leti visokim podzvučnim brzinama (oko 0,85 macha, tj. 490 čvorova ili 909 km/h) i ima interkontinentalni dolet (7330 nm ili 13.570 km) što mu u nekim konfiguracijama omogućuje izravan let od New Yorka do Hong Konga – trećinu puta oko Zemljine kugle. Godine 1989. Boeing 747-400 tvrtke Qantas obavio je bez slijetanja let od Londona do Sydneya dug 18.000 km za 20 sati i 9 minuta, ali radilo se o isporuci zrakoplova bez putnika i tereta. Do siječnja 2015. proizvedena su ili naručena 1502 zrakoplova različitih inačica i konfiguracija; 747 je među profitabilnijim programima tvrtke Boeing.
        747 je zamišljen u 1960.-im u doba povećanja zračnog prijevoza. U tom razdoblju raste komercijalni prijevoz s mlaznim avionima što dovodi do ogromne popularnosti Boeinga 707 i Douglasa DC-8, zrakoplova namijenjenih za prijevoz na velike udaljenosti. Čak i prije nego je izgubio CX-HLS ugovor, Boeing je pritisnut od predsjednika Pan American World Airwaysa ( Pan Am-a) kao najvažnije aviokompanije kupca, da izgraditi putnički avion više od dva puta veći od 707. Zračne luke postale su zagušene sa sve većim brojem putnika koje su prevozili mali zrakoplovi, te je tadašnji predsjednik Pan Am-a je Juan Trippe jedino rješenje vidio u izradi novog, velikog putničkog aviona.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Flota;
