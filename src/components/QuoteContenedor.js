import React from 'react'
import Boton from './Boton'
import Quotes from './Quotes';
import Autor from './Autor';



const QuoteContenedor = ({cambiarFrase,frase,color, }) => {
    return (  

        <div id="wrapper"  className="container">
            <div id="quote-box">

                <Quotes
                frase={frase}></Quotes>
                
                <Autor 
                frase={frase}></Autor><br/>

                <Boton 
                cambiarFrase={cambiarFrase}
                frase= {frase}
                color = {color}
                />
                                
            </div>
            <p className="footer text-white">By Juan Camilo Acevedo</p>

        </div>
        

    );
}

export default QuoteContenedor