import axios from 'axios'
import { toast } from 'react-toastify';
import '../app/toastStyles.css'
export function setupApi() {

    const api = axios.create({
        baseURL: 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/',
        headers: {
            'dev-email-address': 'anthonysareis11@gmail.com',
        },
        timeout: 5000, // Tempo limite de 5 segundos para a resposta da API
    });

    // Interceptando erros na resposta da API
    api.interceptors.response.use(
        response => response,
        error => {
            const { response } = error;
            const status = response ? response.status : null;

            if ([500, 502, 503, 504, 507, 508, 509].includes(status)) {
                // Erros 500, 502, 503, 504, 507, 508, 509 - Servidor falhou em responder
                toast.error('O servidor falhou em responder, tente recarregar a página');
            } else {
                // Outros erros da API
                toast.warn('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
            }


            return Promise.reject(error);
        }
    );

    return api;
}

