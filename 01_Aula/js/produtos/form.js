const form = document.getElementById("form-produto");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
async function salvarProduto() {
    if(id) {
        // vou tentar atualizar um produto existente
        document.getElementById('titulo-pagina').innerText = "Editar Produto";
        try {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
            if(!response.ok) throw new Error('Erro ao carregar produto!');
            const produto = await response.json();
            document.getElementById('nome').value = produto.nome;
            document.getElementById('preco').value = produto.preco;
            document.getElementById('quantidadedestoque').value = produto.quantidadeEstoque;
            document.getElementById('fornecedorid').value = produto.fornecedorId;
        } catch (error) {
            console.log("Erro ao carregar produto: ", error);
            alert('Erro ao carregar dados do produto');
        }
    }

    // capturar o evento 'click' em botaoSalvar de 'submit' no formulário
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
        id : id ? parseInt(id) : 0,
        nome : nome,
        preco : preco,
        quantidadeEstoque : quantidadeEstoque,
        fornecedorId : fornecedorId
    } // objeto com os dados do produto

    const method = id ? 'PUT' : 'POST';// se tiver um id, atualizar, se nao, cadastrar
    const url = id ? `${API_BASE_URL}/produtos/${id}` : `${API_BASE_URL}/produtos`;// se tiver um id, atualizar, se nao, cadastrar

    try{
        const response = await fetch(url, {
            method: method,
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
