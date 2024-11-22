// services/api.js
import axios from 'axios';

// Crie uma instância do Axios
const api = axios.create({
  baseURL: 'https://k4gztste63.execute-api.us-east-1.amazonaws.com/bruno',
  headers: {
    'Authorization': 'Basic QS2kwuiqo2R97u0iGKP3QdrJKv7POhfB',
    'Content-Type': 'application/json',
  }
});

// Interceptor para adicionar tokens de autenticação antes de cada requisição (opcional)
// api.interceptors.request.use(
//   (config) => {
//     const token = 'Basic QS2kwuiqo2R97u0iGKP3QdrJKv7POhfB'
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Interceptor para tratar respostas e erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tratamento de erros globais
    if (error.response) {
      // Erros da API (ex: 404, 500)
      console.error('Erro na resposta:', error.response);
    } else if (error.request) {
      // Erros de rede
      console.error('Erro na requisição:', error.request);
    } else {
      // Erros inesperados
      console.error('Erro inesperado:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
