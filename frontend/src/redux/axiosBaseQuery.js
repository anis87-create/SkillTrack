import axiosInstance from '../api/api';

const axiosBaseQuery = () => async ({ url, method, data, params } = {}) => {
    try {
        const res = await axiosInstance({
            url,
            method,
            data, 
            params
        });

        return { data: res.data };
    } catch (error) {
        return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
}

export default axiosBaseQuery;
