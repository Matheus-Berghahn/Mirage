import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios'

export async function usePost(data: any): Promise<any> {
    try {
        const response = await axios.post('http://localhost:5000/postTest', data);
        return response.data;
      } catch (error: any) {
        console.error(error);
    
        if (axios.isAxiosError(error)) {
          throw {
            status: error.response?.status || 500,
            message: error.message,
          };
        } else {
          throw {
            status: 500,
            message: 'Internal Server Error',
          };
        }
      }
}