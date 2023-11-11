import {Tabela} from "./tabela.js"

export default function Principal (){
    return (
        <div>
            <h1>
                Nova Página
            </h1>
            <MariaPrea/>
            <JosePrea/>
            <Tabela/>
        </div>
    )
}

export function MariaPrea(){
    return(
        <h2>Morreu Maria Prea...</h2>
    )
}

export function JosePrea(){
    return(
        <h2>Viveu José Prea...</h2>
    )
}