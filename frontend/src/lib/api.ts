import axiosInstance from './axios';
import { LoginPayload, RegisterPayload, CreateOrderPayload, Product, Order } from '@/types';

// Auth APIs
export const authAPI = {
  register: (payload: RegisterPayload) =>
    axiosInstance.post('/auth/register', payload),
  login: (payload: LoginPayload) =>
    axiosInstance.post('/auth/login', payload),
  verifyOtp: (email: string, otp: string) =>
    axiosInstance.post('/auth/verify-otp', { email, otp }),
  resendOtp: (email: string) =>
    axiosInstance.post('/auth/resend-otp', { email }),
};

// Product APIs
export const productAPI = {
  getAll: () => axiosInstance.get<Product[]>('/products'),
  getById: (id: string) => axiosInstance.get<Product>(`/products/${id}`),
  getByCategory: (category: string) =>
    axiosInstance.get<Product[]>(`/products/category/${category}`),
};

// Order APIs
export const orderAPI = {
  create: (payload: CreateOrderPayload) =>
    axiosInstance.post('/orders', payload),
  getById: (id: string) => axiosInstance.get<Order>(`/orders/${id}`),
  getMyOrders: () => axiosInstance.get<Order[]>('/orders'),
};
