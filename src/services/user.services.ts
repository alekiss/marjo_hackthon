import api from "./api";


export const logar = async (body:any): Promise<AxiosResponse<any>> => {
    const response = await api.post('/api/token', body)
    return response;
};

export const createUsuario = async (body: any): Promise<AxiosResponse<any>> => {
    const response = await api.post('/create-user', body)
    return response;
};


export const getTransacaoListByIdUsuario = async (id: any): Promise<AxiosResponse<any>> => {
      const response = await api.get('/transacao/'+id);
    return response;

};

export const createNovaDoacao = async (body: any): Promise<AxiosResponse<any>> => {
      const response = await api.post('/doacoes', body);
    return response;
};