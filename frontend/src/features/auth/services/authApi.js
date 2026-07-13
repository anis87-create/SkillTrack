import {baseApi} from '../../../redux/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register:  builder.mutation({
            query: (user) => ({
                url:'/users/register',
                method:'POST',
                data: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:'/users/login',
                method:'POST',
                data: user
            })
        }),
        authMe: builder.query({
            query:() => ({
                url:'/users/me',
                method:'GET'
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation, useAuthMeQuery } = authApi;

export default authApi;
