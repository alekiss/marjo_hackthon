import { AxiosResponse } from "axios";
import api from "./api";


export const logar = async (body:any): Promise<AxiosResponse<any>> => {
    const response = await api.post('/api/token/', body)
    return response;
};

export const createUsuario = async (body: any): Promise<AxiosResponse<any>> => {
    const response = await api.post('/create-user', body)
    return response;
};


export const getTransacaoList= async (): Promise<AxiosResponse<any>> => {
      const response = await api.get('/doacoes/');
    return response;

};

export const createNovaDoacao = async (body: any): Promise<AxiosResponse<any>> => {
      const response = await api.post('/doacoes', body);
    return response;
};