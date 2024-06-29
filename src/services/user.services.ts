import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

export const logar = async (): Promise<AxiosResponse<any>> => {
    const response = await api.post('/login')
    console.log(response)
    return response.data;
};

export const createUsuario = async (body: any): Promise<AxiosResponse<any>> => {
    const response = api.post('/create-user/', body)
    console.log(response)
    return response;
};


export const getTransacaoListByIdUsuario = async (id: any): Promise<AxiosResponse<any>> => {
    const response = api.get('/transacao/'+id);
    console.log(response)
    return response;

};

export const createNovaDoacao = async (body: any): Promise<AxiosResponse<any>> => {
      const response = api.post('/doacao', body);
    console.log(response)
    return response;
};