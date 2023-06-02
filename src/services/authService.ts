import api from "./api";

export interface User {
   email: string;
   password: string;
}

export async function login(email: string, password: string): Promise<User> {
   const requestData = {
      email: email,
      password: password,
   };

   const response = await api.post("/auth/login", requestData);
   return response.data;
}
