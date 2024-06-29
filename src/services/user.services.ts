import axios, { AxiosResponse } from 'axios';


export const logar = async (body:any): Promise<AxiosResponse<any>> => {
    const response = await axios.post('/api/token', body)
    return response;
};

export const createUsuario = async (body: any): Promise<AxiosResponse<any>> => {
    const response = await axios.post('/create-user', body)
    return response;
};


export const getTransacaoListByIdUsuario = async (id: any): Promise<AxiosResponse<any>> => {
      const response = await axios.get('/transacao/'+id);
    return response;

};

export const createNovaDoacao = async (body: any): Promise<AxiosResponse<any>> => {
      const response = await axios.post('/doacoes', body);
    return response;
};