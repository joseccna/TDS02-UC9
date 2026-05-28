
async function carregarPrpodutos() {

    try{
        const resposta = await fetch(`${API_BASE_URL}/Produtos`);

        const produtos = await resposta.json();

            
        const tbody = document.getElementById("tabela-produtos")
        tbody.innerHTML = ''; // Limpa a tabela

            produtos.forEach(produto => {
            const novaLinhaDaTabela = document.createElement('tr')
            novaLinhaDaTabela.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco}</td>
                <td>${produto.quantidadeEstoque}</td>
                <td>${produto.fornecedorId}</td>
                <td>
                    <a href="./detalhes.html?id=${produto.id}">Detalhes</a>
                    <a href='#'>Editar</a>
                    <a href='#'>Excluir</a>
                    
                
                </td>

            `;
            tbody.appendChild(novaLinhaDaTabela)
        });

        console.log(produtos);

    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    
    
    }

}

carregarPrpodutos();