import {baseApi} from '../../../redux/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register:  builder.mutation({
            query: (user) => ({
                url:'/auth/register',
                method:'POST',
                data: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:'/auth/login',
                method:'POST',
                data: user
            })
        }),
        authMe: builder.query({
            query:() => ({
                url:'/auth/me',
                method:'GET'
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation, useAuthMeQuery } = authApi;

export default authApi;
