const form = document.getElementById("form-produto");
async function salvarProduto() {

    // caíirar p evemtp de 'click' em botaoSalvar
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();

    // buscar os inputs e seu valores
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidadeEstoque = parseInt(document.getElementById("quantidadedestoque").value);
    const fornecedorId = parseInt(document.getElementById("fornecedorid").value);

    //adicionar validacoes
    if(!nome || !preco || !quantidadeEstoque || !fornecedorId){
        alert('Pro favor prenchar todos os campos obrigatórios!');
        return; // parar a execucao da funcao
    }

    if(preco < 0){
        alert('O preço nao pode ser negativo!');
        return; // parar a execucao da funcao
    }





    // tentar enviar esse valores para minha API
    const produtoDados = {
        nome : nome,
        preco : preco,
        quantidadeEstoque : quantidadeEstoque,
        fornecedorId : fornecedorId
    } // objeto com os dados do produto

    const url = `${API_BASE_URL}/produtos`;

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(produtoDados) // transforma o objeto de c# em uma string json
        });

        if(!response.ok){
            throw new Error('Erro ao cadastrar o produto');
        }

        window.location.href = 'indesx.html'; // voltar para o index

    }catch(error){

        console.error("Erro ao salvar produto:", error);

    }

    // cadastrando com sucesso, retornar para o index de produtos

    })

}
salvarProduto()
