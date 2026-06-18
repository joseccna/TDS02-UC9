async function carregarProdutos() {
    try {
        const response = await fetch(`${API_BASE_URL}/Produtos`, 
            {method: 'GET', headers: getHeaders()

            });
        
        
        if (response.status == 401){
            // redirecionar para o loing, remove o token
            alert("Sessão expirada! Por favor, faça login novamente!");
            localStorage.removeItem('token');
            window.location.href = '../../index.html';
            return;

        } else if (response.status == 403){
            // alerta em tela, "não autorizado", redireciona para o index
            alert("Sem acesso ao recurso!");
            window.location.href = '../../index.html';
            return;
            
        }

        const produtos = await response.json();
        
        const tbody = document.getElementById('tabela-produtos');
        tbody.innerHTML = '';

        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td class="actions">
                    <a href="detalhes.html?id=${produto.id}">Detalhes</a>
                    <a href="form.html?id=${produto.id}">Editar</a>
                    <a href="excluir.html?id=${produto.id}" style="color: var(--danger-color);">Excluir</a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
    }
}




carregarProdutos();