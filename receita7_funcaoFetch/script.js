let cervejas =[]

//cs é um array de cervejas
const carregarDiv = cs =>{
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map(({id,bank_name,account_number}) =>`
        <tr>
            <td>
                ${id}
            </td>
            <td>
                ${bank_name}  
            </td>
            <td>
                ${account_number}  
            </td>
        </tr>`
    )
    div.innerHTML = `

    <table border="1" class = "tabela1">
        <tr>                
                <th>Id</th>                    
                <th>Nome do Banco</th>
                <th>Número da Conta</th>    
            ${itensHtml.join("\n")}
        </tr>
    </table>`  
    
}

async function carregarCervejas (link){
    try{
        let res = await fetch(link)
        cervejas = await res.json()
        carregarDiv(cervejas)
    }catch(err){
        document.getElementById("cervejasDiv").innerHTML = "Lascouu Bahia..."
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas("https://random-data-api.com/api/v2/banks?size=3"))
