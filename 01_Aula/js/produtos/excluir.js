const urlParams = new URLSearchParams(window.location.search); // Obtem os parâmetros da URL
const id = urlParams.get('id');

// Buscar os detalhes do produto
async function buscarDetalhes() {

    try{

   const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
   if(!response) throw new Error('Erro ao carregar produto.');

   const produto = await response.json();





   document.getElementById('dados-produto').innerHTML = 
   `<h3>${produto.nome}</h3>
   <p><strong>Preço:</strong> ${produto.preco}</p>
    <p><strong> Quantidade em Estoque</strong>: ${produto.quantidadeEstoque}</p>
    <p><strong> ID do Fornecedor</strong>: ${produto.fornecedorId}</p>
   `;
    }catch(error){
        console.error("Erro ao carregar os detalhes do produto:", error);
        document.getElementById('dados-produto').innerHTML = '<p>Erro ao carregar os detalhes do produto.</p>';
    }

}

document.getElementById('btn-excluir').addEventListener('click', async () => {
    try{
        await fetch(`${API_BASE_URL}/produtos/${id}`, {method: 'DELETE'})

        

        window.location.href = 'indesx.html';


    }catch(error){
        console.log("Erro ao excluir o produto:", error);
        alert('Erro ao excluir o produto. Tente novamente.');
    }
});

buscarDetalhes();