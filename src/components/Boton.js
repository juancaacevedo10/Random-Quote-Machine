import React from 'react';

const Boton = ({cambiarFrase, frase, color }) => {
    const twitter = `https://twitter.com/intent/tweet?text="${encodeURIComponent(frase.fs)}"-${encodeURIComponent(frase.autor)}`;
    const tumblr = `https://www.tumblr.com/`;
    return ( 
        <div className="buttons">
                    
            <a  type="button" href={twitter} id="tweet-quote"   className="btn"   rel="noopener noreferrer" target="_blank" style={{backgroundColor: color}}><i className="fab fa-twitter" style={{color: "white"}}></i></a>
            <a type="button"  href={tumblr} id="tumblr-quote"  className="btn"  rel="noopener noreferrer" target="_blank" style={{backgroundColor: color}}><i className="fab fa-tumblr " style={{color: "white"}}></i></a>
            <a href="/" onClick={(event) => event.preventDefault() || cambiarFrase()} id="new-quote" type="button" className="btn text-white" style={{backgroundColor: color}}>Nueva Frase</a>
        
        </div>
    );
}


 
export default Boton;