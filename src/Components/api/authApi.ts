import axios from 'axios';

import { GenericResponse, ILoginResponse, IUserResponse } from './types';

const BASE_URL = 'https://localhost:7049/api/v1/';
export const authApi = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<any>('vehicle/menu');
  console.log(response,"response")
  return response.data;
};
export const GetProductsListHome = async () => {
  const response = await authApi.get<any>('content/home');
  console.log(response,"response")
  return response.data;
};
// authApi.interceptors.request.use(function (config:any) {
//   // const token = store.getState().session.token;
//   config.headers = config.headers ?? {};
//   config.headers.accessToken =  "";
//    console.log(config,"config")
//   return config;
// });

// authApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     console.log(error,"err")
//     const errMessage = error.response.data.message as string;
//     if (error.response.status===401) {
//       originalRequest._retry = true;
//       await refreshAccessTokenFn();
//       return authApi(originalRequest);
//     }
//     if (error.response.data.message.includes('not refresh')) {
//       document.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// export const signUpUserFn = async (user: RegisterInput) => {
//   const response = await authApi.post<GenericResponse>('auth/register', user);
//   return response.data;
// };


// const AuthStr = 'Bearer '.concat(token);
export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`
  );
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout');
  return response.data;
};

export const getMeFn = async () => {
  const response = await authApi.get<IUserResponse>('/v1/Dashboard/applicationCounts?count_for=segment_activation');
  return response.data;
};
