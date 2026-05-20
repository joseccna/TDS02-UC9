async function carregarFornecedores() {
    try{
        //Toda a logica vai aqui
        const resposta = await fetch("https://localhost:7004/api/Fornecedores");

        const fornecedores = await resposta.json();

        console.log(fornecedores);
    } catch (error) {
        console.error('Erro ao carregar os fornecedores:', error);
    }

}

carregarFornecedores();