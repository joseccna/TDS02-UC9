//const API_BASE_URL = 'http://10.24.90.15:5143/api';

const API_BASE_URL = 'https://localhost:7135/api';

//localhost:7135

// Funão para montar cabeçalhos padrão
function getHeaders() {
    const headers = {
        'content-type': 'application/json'
    }

    // tentar carregar o token do local storage
    const token = localStorage.getItem('token');

    if (token){
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
}
