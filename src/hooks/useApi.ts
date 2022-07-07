import axios from "axios";

const api = axios.create({
    baseURL: 'https://frontendproject.b2bit.company/account'
});

export const useAPI = () => ({
    validadeToken: async (token: string) => {
        const response = await api.post('/tokens', {token});  
        return response.data
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/tokens/', {email, password}); 
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/profile/'); 
        return response.data;
    }
})