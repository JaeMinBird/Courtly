import { Location, Court, User, CoachProfile, LessonPackage, CourtReservation, LessonBooking } from '@/types/database.types';

// Base API client
class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = '/api';
  }

  // Generic GET request
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch data');
    }
    
    return response.json() as Promise<T>;
  }

  // Generic POST request
  async post<T, U>(endpoint: string, data: T): Promise<U> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create data');
    }
    
    return response.json() as Promise<U>;
  }

  // Generic PUT request
  async put<T, U>(endpoint: string, data: T): Promise<U> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update data');
    }
    
    return response.json() as Promise<U>;
  }

  // Generic DELETE request
  async delete(endpoint: string): Promise<{ message: string }> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete data');
    }
    
    return response.json();
  }

  // Authentication
  async signIn(email: string, password: string) {
    return this.post('/auth', { email, password, action: 'signin' });
  }

  async signUp(email: string, password: string) {
    return this.post('/auth', { email, password, action: 'signup' });
  }

  async signOut() {
    return this.post('/auth', { action: 'signout' });
  }

  // Locations
  async getLocations(): Promise<Location[]> {
    return this.get('/locations');
  }

  async getLocation(id: string): Promise<Location> {
    return this.get(`/locations/${id}`);
  }

  async createLocation(data: Omit<Location, 'id' | 'created_at' | 'updated_at'>): Promise<Location> {
    return this.post('/locations', data);
  }

  async updateLocation(id: string, data: Partial<Omit<Location, 'id' | 'created_at' | 'updated_at'>>): Promise<Location> {
    return this.put(`/locations/${id}`, data);
  }

  async deleteLocation(id: string) {
    return this.delete(`/locations/${id}`);
  }

  // Courts
  async getCourts(locationId?: string): Promise<Court[]> {
    const endpoint = locationId ? `/courts?locationId=${locationId}` : '/courts';
    return this.get(endpoint);
  }

  async getCourt(id: string): Promise<Court> {
    return this.get(`/courts/${id}`);
  }

  async createCourt(data: Omit<Court, 'id' | 'created_at' | 'updated_at'>): Promise<Court> {
    return this.post('/courts', data);
  }

  async updateCourt(id: string, data: Partial<Omit<Court, 'id' | 'created_at' | 'updated_at'>>): Promise<Court> {
    return this.put(`/courts/${id}`, data);
  }

  async deleteCourt(id: string) {
    return this.delete(`/courts/${id}`);
  }

  // Court Reservations
  async getReservations(userId?: string, courtId?: string): Promise<CourtReservation[]> {
    let endpoint = '/reservations';
    
    if (userId) {
      endpoint += `?userId=${userId}`;
    }
    
    if (courtId) {
      endpoint += userId ? `&courtId=${courtId}` : `?courtId=${courtId}`;
    }
    
    return this.get(endpoint);
  }

  async createReservation(data: Omit<CourtReservation, 'id' | 'created_at' | 'updated_at'>): Promise<CourtReservation> {
    return this.post('/reservations', data);
  }

  async updateReservation(id: string, data: Partial<Omit<CourtReservation, 'id' | 'created_at' | 'updated_at'>>): Promise<CourtReservation> {
    return this.put(`/reservations/${id}`, data);
  }

  async cancelReservation(id: string) {
    return this.put(`/reservations/${id}`, { status: 'cancelled' });
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient(); 