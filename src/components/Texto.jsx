import React, {useState} from "react";

function Texto() {
    const [texto, setTexto] = useState("Hello word!");

    const acrencentar = () => {
        setTexto("How are you?");
    };

    return (
        <div>
            <p>Contador: {texto}</p>
            <button onClick={acrencentar}>acrencentar texto</button>
        </div>
    )
}

export default Texto;