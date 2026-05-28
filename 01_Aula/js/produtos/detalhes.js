const urlParams = new URLSearchParams(window.location.search); // Obtem os parâmetros da URL

const id = urlParams.get('id');


async function buscarDetalhes() {

    try{
        const response = await fetch(`http://10.24.90.15:5143/api/produtos/${id}`);
        const produto = await response.json();

        document.getElementById('dados-produto').innerHTML = `
            <p><strong> ID</strong> : ${produto.id}</p>
            <p><strong> Nome</strong>: ${produto.nome}</p>
            <p><strong> Preço</strong>: ${produto.preco}</p>
            <p><strong> Quantidade em Estoque</strong>: ${produto.quantidadeEstoque}</p>
            <p><strong> ID do Fornecedor</strong>: ${produto.fornecedorId}</p>
            <p><strong> Data de Vencimento</strong>: ${produto.dataVencimento || 'Não Cadastrado'}</p>
            `

    }catch(error){
        document.getElementById('dados-produto').innerHTML = '<p>Erro ao carregar os detalhes do produto.</p>';
    }
}

buscarDetalhes();

