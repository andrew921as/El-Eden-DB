import React from "react";
import '../styles/ButtonHome.css';

function Buttons({texto, icono}){

    return(
        <div>
            <button>           
             {icono}{texto}
            </button>

        </div>
    );
}

export default Buttons;
