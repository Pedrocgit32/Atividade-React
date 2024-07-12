import React, { useContext } from "react";
import ThemeContext from "../context/TemaContext";

const Tema = () => {
    const { theme, alterTheme } = useContext(ThemeContext);

    return(        
        <div className={`container ${theme}`}>
            <h1>Componente tema</h1>
            <button onClick={alterTheme}>
                Altrerar tema
            </button>
        </div>
    );
}

export default Tema;