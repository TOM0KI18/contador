
import { useState } from 'react';
export const Contador = () => {
    const [contador, setContador] = useState(0);
   
    //TODO crear una funcion para incrementar
    const handleIncrement = () => {
        setContador(contador + 1);
    }

    const handleDecrement = () => {
        if (contador > 0) 
      setContador(contador - 1);
    }

    const handleReset = () => {
        setContador(0);
    }

    return (
        <div style={{ padding: '20px', textAling: 'center', fontFamily: 'sans-serif'}}>
            <h2>Contador iteractivo</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{contador}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={handleDecrement} style={btnStyle} >- restar</button>
                <button onClick={handleIncrement} style={btnStyle}>+ sumar</button>
                <button onClick={handleReset} style={btnStyle}>Reset</button>
            </div>
        </div>
    )
}


export default Contador

const btnStyle = {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    bordwerRadius: '5px',
    cursor: 'pointer',
}