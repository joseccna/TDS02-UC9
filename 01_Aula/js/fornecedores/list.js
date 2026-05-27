
async function carregarFornecedores() {
    try{
        //Toda a logica vai aqui
        const resposta = await fetch(`${API_BASE_URL}/Fornecedores`);

        const fornecedores = await resposta.json();
        
        const tbody = document.getElementById("tabela-fornecedores")
        tbody.innerHTML = ''; // Limpa a tabela

            fornecedores.forEach(fornecedor => {
            const novaLinhaDaTabela = document.createElement('tr')
            novaLinhaDaTabela.innerHTML = `
                <td>${fornecedor.id}</td>
                <td>${fornecedor.nomeFantasia}</td>
                <td>${fornecedor.cnpj}</td>
            `;
            tbody.appendChild(novaLinhaDaTabela)
        });

        console.log(fornecedores);
    } catch (error) {
        console.error('Erro ao carregar os fornecedores:', error);
    }

}

carregarFornecedores();