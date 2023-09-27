async function carregarTabela(link) {
    try {
        const response = await fetch(link);
        const data = await response.json();
        if (data && data.length > 0) {
            const tableHtml = criarTabela(data, ["id", "bank_name","account_number"],["Id","Nome do banco","Número da conta"]); // Especifique as colunas que você deseja exibir
            tabelaDiv.innerHTML = tableHtml;
        } else {
            tabelaDiv.innerHTML = "Nenhum dado encontrado.";
        }
    } catch (err) {
        tabelaDiv.innerHTML = "Erro ao carregar os dados.";
        console.error(err);
    }
}

function criarTabela(data, columns,titulos) {
    const titulosHtml = titulos.map(titulos => `<th>${titulos}</th>`).join("");
    const rowsHtml = data.map(item => {
        const rowHtml = columns.map(column => `<td>${item[column]}</td>`).join("");
        return `<tr>${rowHtml}</tr>`;
    }).join("");

    return `
        <table border="1" class="tabela1">
            <tr>${titulosHtml}</tr>
            ${rowsHtml}
        </table>
    `;
}