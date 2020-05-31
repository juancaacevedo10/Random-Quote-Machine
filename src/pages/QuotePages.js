import React, { Component } from 'react'
import frases_Mocks from '../utils/mocks/frases-mocks';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteContenedor from '../components/QuoteContenedor'



class QuotePages extends Component {
    constructor(props) {
      super(props);
      this.state = {  
        frase: frases_Mocks.frases[0],
        colors: frases_Mocks.colors[0]
      }
    }

    dateRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      cambiarFrases(){
        const valor = this.dateRandom(0,11)
        this.setState({
          frase:  frases_Mocks.frases[valor],
          colors: frases_Mocks.colors[valor]
        })
        
      }
render(){
    return (
        <div className="Contenedor" style={{backgroundColor: this.state.colors, color:this.state.colors}}>
        
        <QuoteContenedor 
         cambiarFrase = {() => this.cambiarFrases()}
          frase = {this.state.frase}
          color = {this.state.colors}
         
        />
      </div>
  );
    }
}

export default QuotePages;
