import { Component } from 'react';
import '../App.css';
import Header from "../Header.js";
import Mapa from "../slike/mapa.png";
import Footer from "../Footer.js";

export class Forma extends Component{  
    state={
      ime: "",
      prezime: "",
      gmail: "",
      odrediste: "",
    }
    onSubmit=e=>{e.preventDefault(); console.log("Forma je potvrdjena",this.state)}
    render(){
    return (
        <div className="Forma">
          <Header/>
          <h1>Aviokarte - pronađite najjeftinije Aviokarte</h1>
          <form className="forma1">
            <input type="radio" id="povratna" name="klasa"/>
            <label for="povratna">Povratna karta</label> <br/>
            <input type="radio" id="jedan" name="klasa"/>
            <label for="jedan">Karta u jednom smjeru</label>
            <br/> <br/>
            Razred:
            <select>
              <option>ekonomski</option>
              <option>premium ekonomski</option>
              <option>poslovni (business)</option>
              <option>prva</option>
            </select>
            <br/> <br/> 
            <button className="botun" onClick={e=>this.onSubmit(e)}>Potvrdi</button>
            </form>
            <form className="forma2">
            Ime:
            <input type="name" className="ime" placeholder="ime" value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/> <br/>
            Prezime:
            <input type="name" className="ime" placeholder="prezime" value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}/> <br/>
            gmail:   
            <input type="name" className="ime" placeholder="gmail" value={this.state.gmail} onChange={e=>this.setState({gmail: e.target.value})}/> <br/>
            Odredište:
            <input type="name" className="ime" placeholder="odrediste" value={this.state.odrediste} onChange={e=>this.setState({odrediste: e.target.value})}/>  
          </form>
          <br/><br/><br/><br/><br/><br/>
          <div className="ispis">
            <p><b>Provjera podataka</b></p>
            <p>Ime: {this.state.ime}</p>
            <p>Prezime: {this.state.prezime}</p>
            <p>Gmail: {this.state.gmail}</p>
            <p>Odredište: {this.state.odrediste}</p>
          </div>
          <hr className="formhr"/> 
          <h1>Letimo u sljedeće gradove!</h1>
          <img src={Mapa} className="mapa"/> <br/>
          <p align="center">Letimo u veliku količinu gradova! </p>
          <Footer/>
        </div>
      );
    }
}
  
export default Forma;
