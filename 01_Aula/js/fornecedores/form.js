const form = document.getElementById("form-fornecedor");

async function salvarFornecedor(){

    // criar o evento de 'submit' no formulário
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();

        // buscar os inputs e seu valores
        const nomeFantasia = document.getElementById("nomeFantasia").value;
        const cnpj = document.getElementById("cnpj").value;

        //adicionar validacoes
        if(!nomeFantasia || !cnpj){
            alert('Pro favor prenchar todos os campos obrigatórios!');
            return; // parar a execucao da funcao
        }

        // tentar enviar esse valores para minha API
        const fornecedorDados = {
            nomeFantasia : nomeFantasia,
            cnpj : cnpj
        };

        const url = `${API_BASE_URL}/fornecedores`;

        try{

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fornecedorDados)
            });

            if(!response.ok){
            throw new Error('Erro ao cadastrar o fornecedor.');
            }

        window.location.href = 'index.html'; // voltar para o index

        }catch(error){
            console.error('Erro ao salvar o fornecedor:', error);
        }

    })

}
salvarFornecedor();