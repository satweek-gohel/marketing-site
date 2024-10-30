import { GET_PRODUCT_LIST, GET_SERVICES_LIST } from './ApiRoutes';
import { nonAuthData } from './service';

// export const getServices = async () => {
//     const response = await nonAuthData.get(API_ROUTES.GET_SERVICES);
//     return response.data;
// };

export const getProductsList = async () => {
    const response = await nonAuthData.get(GET_PRODUCT_LIST);
    return response;
};

export const getServiceList = async () => {
    const response = await nonAuthData.get(GET_SERVICES_LIST);
    return response;
};