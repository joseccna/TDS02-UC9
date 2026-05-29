const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');

async function buscarDetalhes(){

    try{
        const response = await fetch(`${API_BASE_URL}/fornecedores/${id}`);
        const fornecedor = await response.json();

        document.getElementById('dados-fornecedor').innerHTML = `
            <p><strong> ID</strong> : ${fornecedor.id}</p>
            <p><strong> Nome</strong>: ${fornecedor.nomeFantasia}</p>
            <p><strong> CNPJ</strong>: ${fornecedor.cnpj}</p>
        `;
    }catch(error){
        console.getElementById('Erro ao buscar detalhes do fornecedor:').innerHTML = 'Erro ao buscar detalhes do fornecedor.';

    }
}
buscarDetalhes();