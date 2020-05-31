import React from 'react'


const Autor = ({frase}) => {
   
    return ( 
        <div className="quote-author text-right">
                    <small id="author">-{frase.autor}</small>
                </div>
    );
}


 
export default Autor;