import React from "react";
import '../styles/ButtonHome.css';
import { MdEmojiNature } from "react-icons/md";

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
