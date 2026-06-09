const urlParams = new URLSearchParams(window.location.search); // Obtem os parâmetros da URL
const id = urlParams.get('id');

// Buscar os detalhes do produto
async function buscarDetalhes() {

    try{

   const response = await fetch(`${API_BASE_URL}/fornecedores/${id}`);
   if(!response) throw new Error('Erro ao carregar fornecedor.');

   const fornecedor = await response.json();





   document.getElementById('dados-fornecedor').innerHTML = 
   `<h3>${fornecedor.nomeFantasia}</h3>
   <p><strong>CNPJ:</strong> ${fornecedor.cnpj}</p>
   <p><strong>Nome Fantasia:</strong> ${fornecedor.nomeFantasia}</p>
   `;
    }catch(error){
        console.error("Erro ao carregar os detalhes do fornecedor:", error);
        document.getElementById('dados-fornecedor').innerHTML = '<p>Erro ao carregar os detalhes do fornecedor.</p>';
    }

}

document.getElementById('btn-excluir').addEventListener('click', async () => {
    try{
        await fetch(`${API_BASE_URL}/fornecedores/${id}`, {method: 'DELETE'})

        

        window.location.href = 'index.html';

    }catch(error){
        console.log("Erro ao excluir o fornecedor:", error);
        alert('Erro ao excluir o fornecedor . Tente novamente.');
    }
});

buscarDetalhes();