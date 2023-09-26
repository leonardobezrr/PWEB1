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

