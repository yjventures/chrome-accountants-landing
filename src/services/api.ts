// Centralized API service for Chrome Accountants
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
}

interface User {
  _id: string;
  email: string;
  name: string;
  type: 'admin' | 'client';
  is_active: boolean;
  is_invited: boolean;
  email_verified: boolean;
  phone_number?: string;
  address?: string;
  company_id?: string | { _id: string; name: string };
  company_name?: string;
  createdAt: string;
  updatedAt: string;
}

interface Company {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  abn?: string;
  createdAt: string;
  updatedAt: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

interface SignupRequest {
  email: string;
  password: string;
  name: string;
  type?: 'admin' | 'client';
  phone_number?: string;
  address?: string;
  company_id?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T = any>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response & { jsonSafe?: () => Promise<T | null> }> {
    const url = `${this.baseURL}${endpoint}`;
    
    // Get token from localStorage
    const token = localStorage.getItem('token');
    
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(options.headers || {}),
      },
      credentials: 'include',
      ...options,
    });

    // Add jsonSafe method for safe JSON parsing
    (res as any).jsonSafe = async () => {
      try {
        return (await res.json()) as T;
      } catch {
        return null;
      }
    };

    return res as any;
  }

  // Auth endpoints
  async login(credentials: LoginRequest): Promise<Response & { jsonSafe?: () => Promise<LoginResponse | null> }> {
    return this.request<LoginResponse>('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async signup(userData: SignupRequest): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<User> | null> }> {
    return this.request<ApiResponse<User>>('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }


  async verifyEmail(token: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>(`/api/users/verify-email?token=${token}`, {
      method: 'GET',
    });
  }

  async updatePasswordInitial(email: string, currentPassword: string, newPassword: string, profileData?: any): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/users/update-password-initial', {
      method: 'POST',
      body: JSON.stringify({ 
        email, 
        currentPassword, 
        newPassword,
        ...profileData
      }),
    });
  }

  async updatePassword(currentPassword: string, newPassword: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/users/update-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  async forgotPassword(email: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/users/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, newPassword: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/users/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    });
  }

  async verifyLoginCode(email: string, code: string): Promise<Response & { jsonSafe?: () => Promise<LoginResponse | null> }> {
    return this.request<LoginResponse>('/api/users/verify-login-code', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    });
  }

  async getCurrentUser(): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<User> | null> }> {
    return this.request<ApiResponse<User>>('/api/users/me', {
      method: 'GET',
    });
  }

  async updateProfile(userData: Partial<User>): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<User> | null> }> {
    return this.request<ApiResponse<User>>('/api/users/me', {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<void> {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  async getUsers(): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<User[]> | null> }> {
    return this.request<ApiResponse<User[]>>('/api/users', {
      method: 'GET',
    });
  }

  // Company endpoints
  async getCompanies(): Promise<Response & { jsonSafe?: () => Promise<Company[] | null> }> {
    return this.request<Company[]>('/api/companies', {
      method: 'GET',
    });
  }

  async getCompany(id: string): Promise<Response & { jsonSafe?: () => Promise<Company | null> }> {
    return this.request<Company>(`/api/companies/${id}`, {
      method: 'GET',
    });
  }

  async createCompany(companyData: Omit<Company, '_id' | 'createdAt' | 'updatedAt'>): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<Company> | null> }> {
    return this.request<ApiResponse<Company>>('/api/companies', {
      method: 'POST',
      body: JSON.stringify(companyData),
    });
  }

  async updateCompany(id: string, companyData: Partial<Company>): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<Company> | null> }> {
    return this.request<ApiResponse<Company>>(`/api/companies/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(companyData),
    });
  }

  async deleteCompany(id: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>(`/api/companies/${id}`, {
      method: 'DELETE',
    });
  }

  async deleteUser(id: string): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>(`/api/users/${id}`, {
      method: 'DELETE',
    });
  }

  async updateUser(id: string, userData: Partial<User>): Promise<Response & { jsonSafe?: () => Promise<ApiResponse<User> | null> }> {
    return this.request<ApiResponse<User>>(`/api/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  // Invitation endpoint
  async inviteUser(email: string, role: 'client' | 'admin'): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/users/invite', {
      method: 'POST',
      body: JSON.stringify({ email, role }),
    });
  }

  // Form submission endpoint
  async submitContactForm(formData: any): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/forms/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Health check
  async healthCheck(): Promise<Response & { jsonSafe?: () => Promise<ApiResponse | null> }> {
    return this.request<ApiResponse>('/api/health', {
      method: 'GET',
    });
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;

// Export types for use in components
export type { User, Company, LoginRequest, LoginResponse, SignupRequest, ApiResponse };
