import { useState, useCallback } from 'react';
import { LinkedInFiltersAPI, LinkedInFilter } from '@/lib/linkedin-api';

export function useLinkedInFilters() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSuggestions = useCallback(async (
    query: string, 
    filterType: 'job_title' | 'company' | 'location'
  ): Promise<LinkedInFilter[]> => {
    if (!query.trim()) return [];

    setLoading(true);
    setError(null);

    try {
      let suggestions: LinkedInFilter[] = [];
      
      switch (filterType) {
        case 'job_title':
          suggestions = await LinkedInFiltersAPI.getJobTitleSuggestions(query);
          break;
        case 'company':
          suggestions = await LinkedInFiltersAPI.getCompanySuggestions(query);
          break;
        case 'location':
          suggestions = await LinkedInFiltersAPI.getLocationSuggestions(query);
          break;
        default:
          throw new Error(`Unsupported filter type: ${filterType}`);
      }

      return suggestions;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch suggestions';
      setError(errorMessage);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchSuggestions,
    loading,
    error,
    clearError: () => setError(null)
  };
}