import React, {useState} from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    const acrencentar = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={acrencentar}>acrencentar + 1</button>
        </div>
    )
}

export default Contador;