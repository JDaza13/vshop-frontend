import { ENV_VAR } from './env_var';

export const APP_CONSTANTS = {
    API: {
        API_BASE_PATH: ENV_VAR.API_BASE_PATH,
        CATEGORIES_SERVICE: {
            GET_CATEGORIES: 'categories/get-categories'
        },
        PRODUCTS_SERVICE: {
            GET_PRODUCTS: 'products/get-products/:categoryId'
        }
    }
};
