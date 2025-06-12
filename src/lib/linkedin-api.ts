export interface LinkedInFilter {
  id: string;
  name: string;
  type: string;
}

export interface ApiResponse {
  success: boolean;
  data: LinkedInFilter[];
  query: string;
  error?: string;
}

export class LinkedInFiltersAPI {
  private static baseUrl = '/api/linkedin-filters';
  
  static async getJobTitleSuggestions(query: string): Promise<LinkedInFilter[]> {
    try {
      const response = await fetch(`${this.baseUrl}/job-title`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const result: ApiResponse = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to fetch job title suggestions');
      }
      
      return result.data || [];
    } catch (error) {
      console.error('Job title API error:', error);
      throw error;
    }
  }
  
  static async getCompanySuggestions(query: string): Promise<LinkedInFilter[]> {
    try {
      const response = await fetch(`${this.baseUrl}/company`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const result: ApiResponse = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to fetch company suggestions');
      }
      
      return result.data || [];
    } catch (error) {
      console.error('Company API error:', error);
      throw error;
    }
  }
  
  static async getLocationSuggestions(query: string): Promise<LinkedInFilter[]> {
    try {
      const response = await fetch(`${this.baseUrl}/location`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const result: ApiResponse = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to fetch location suggestions');
      }
      
      return result.data || [];
    } catch (error) {
      console.error('Location API error:', error);
      throw error;
    }
  }
}
