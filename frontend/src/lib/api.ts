import axiosInstance from './axios'

export interface LoginPayload {
  email: string
  password?: string
}

export interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
}

export interface CreateOrderPayload {
  items: Array<{
    productId: string
    quantity: number
    price: number
  }>
  totalAmount: number
}

export interface Product {
  id: string
  title: string
  category: string
  brand: string
  image: string
  rating: number
  price: number
  originalPrice: number
  badge?: { text: string; color: string } | null
}

export interface Order {
  id: string
  userId: string
  items: Array<{
    productId: string
    quantity: number
    price: number
  }>
  totalAmount: number
  status: string
  createdAt: string
}

// ✅ Auth APIs
export const authAPI = {
  register: (payload: RegisterPayload) =>
    axiosInstance.post('/auth/register', payload),
  login: (payload: LoginPayload) =>
    axiosInstance.post('/auth/login', payload),
  verifyOtp: (email: string, otp: string) =>
    axiosInstance.post('/auth/verify-otp', { email, otp }),
  sendOtp: (email: string) =>
    axiosInstance.post('/auth/send-otp', { email }),
  resendOtp: (email: string) =>
    axiosInstance.post('/auth/resend-otp', { email }),
}

// ✅ Product APIs
export const productAPI = {
  getAll: () => axiosInstance.get<Product[]>('/products'),
  getById: (id: string) => axiosInstance.get<Product>(`/products/${id}`),
  getByCategory: (category: string) =>
    axiosInstance.get<Product[]>(`/products/category/${category}`),
}

// ✅ Order APIs
export const orderAPI = {
  create: (payload: CreateOrderPayload) =>
    axiosInstance.post('/orders', payload),
  getById: (id: string) => axiosInstance.get<Order>(`/orders/${id}`),
  getMyOrders: () => axiosInstance.get<Order[]>('/orders/my-orders'),
}

// ✅ User APIs
export const userAPI = {
  getProfile: () => axiosInstance.get('/users/profile'),
  updateProfile: (payload: any) =>
    axiosInstance.put('/users/profile', payload),
}
