let cervejas =[]

//cs é um array de cervejas, testando se o git prestou no novo computador
const carregarDiv = cs =>{
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map(({name,alcohol,malts,style}) =>`
        <tr>
            <td>
                ${name}
            </td>
            <td>
                ${alcohol}  
            </td>
            <td>
                ${malts}  
            </td>
            <td>
                ${style}  
            </td>
        </tr>`
    )
    div.innerHTML = `

    <table border="1" class = "tabela1">
        <tr>                
                <th>Nome</th>                    
                <th>Teor Alcóolico</th>
                <th>Malte</th>    
                <th>Estilo</th>
            ${itensHtml.join("\n")}
        </tr>
    </table>`  
    
}

async function carregarCervejas (){
    try{
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)
    }catch(err){
        document.getElementById("cervejasDiv").innerHTML = "Lascouu Bahia..."
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())
