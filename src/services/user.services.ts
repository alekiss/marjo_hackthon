import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'localhost:8080',
});

export const logar = async (): Promise<AxiosResponse<any>> => {
    return api.post('/login');
};

export const createUsuario = async (body: any): Promise<AxiosResponse<any>> => {
    return api.post('/usuarios', body);
};

export const getTransacaoListByIdUsuario = async (id: any): Promise<AxiosResponse<any>> => {
    return api.get('/transacao/'+id);
};

export const createNovaDoacao = async (body: any): Promise<AxiosResponse<any>> => {
    return api.post('/doacao', body);
};