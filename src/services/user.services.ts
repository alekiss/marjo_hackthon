import api from "./api";


export const logar = async (body: any): Promise<any> => {
    const response = await api.post('/api/token/', body)
   
    return response;
};

export const createUsuario = async (body: any): Promise<any> => {
    const response = await api.post('/create-user', body)
    if (response.status == 401) {
        navigate('/login')
        localStorage.clear()
        return;
    }
    return response;
};


export const getTransacaoList = async (): Promise<any> => {
    const response = await api.get('doacao/minhas-doacoes/');
    if (response.status == 401) {
        navigate('/login')
        localStorage.clear()
        return;
    }
    return response;

};

export const createNovaDoacao = async (body: any): Promise<any> => {
    const response = await api.post('doacao/doacoes/', body);
    if (response.status == 401) {
        navigate('/login')
        localStorage.clear()
        return;
    }
    return response;
};