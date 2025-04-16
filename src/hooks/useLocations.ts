import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api-client';
import { Location } from '@/types/database.types';

export function useLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await apiClient.getLocations();
        setLocations(data);
      } catch (err: any) {
        console.error('Error fetching locations:', err);
        setError(err.message || 'Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const addLocation = async (locationData: Omit<Location, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      setError(null);
      const newLocation = await apiClient.createLocation(locationData);
      setLocations((prev) => [...prev, newLocation]);
      return newLocation;
    } catch (err: any) {
      console.error('Error adding location:', err);
      setError(err.message || 'Failed to add location');
      throw err;
    }
  };

  const updateLocation = async (
    id: string,
    locationData: Partial<Omit<Location, 'id' | 'created_at' | 'updated_at'>>
  ) => {
    try {
      setError(null);
      const updatedLocation = await apiClient.updateLocation(id, locationData);
      setLocations((prev) =>
        prev.map((location) => (location.id === id ? updatedLocation : location))
      );
      return updatedLocation;
    } catch (err: any) {
      console.error('Error updating location:', err);
      setError(err.message || 'Failed to update location');
      throw err;
    }
  };

  const deleteLocation = async (id: string) => {
    try {
      setError(null);
      await apiClient.deleteLocation(id);
      setLocations((prev) => prev.filter((location) => location.id !== id));
    } catch (err: any) {
      console.error('Error deleting location:', err);
      setError(err.message || 'Failed to delete location');
      throw err;
    }
  };

  const refreshLocations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await apiClient.getLocations();
      setLocations(data);
    } catch (err: any) {
      console.error('Error refreshing locations:', err);
      setError(err.message || 'Failed to refresh locations');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    locations,
    loading,
    error,
    addLocation,
    updateLocation,
    deleteLocation,
    refreshLocations,
  };
} 