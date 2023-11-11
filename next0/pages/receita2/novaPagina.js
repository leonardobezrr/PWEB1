import {Tabela} from "./tabela.js"

export default function Principal (){
    return (
        <div>
            <h1>
                Nova Página
            </h1>
            <MariaPrea/>
            <Tabela/>
        </div>
    )
}

export function MariaPrea(){
    return(
        <h2>Morreu Maria Prea...</h2>
    )
}