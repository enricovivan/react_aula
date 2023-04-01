import React, {useState} from "react";

function BtnAndUpdate(){

    const [count, setCount] = useState(0);

    return (

        <>
            <div>
                <button type="button" onClick={()=> setCount(count + 1)}>Aperte Aqui</button>
                <p>Quantas vezes você clicou: {count}</p>
            </div>
        </>

    );

};

export default BtnAndUpdate