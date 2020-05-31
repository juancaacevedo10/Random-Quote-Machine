import React from 'react'


const Quotes = ({frase}) => {
  
    return ( 
        <div className="quote-text text-center">
        <p id="text"><i className="fas fa-quote-left"></i> {frase.fs}</p>
    </div>
    );
}


 
export default Quotes;