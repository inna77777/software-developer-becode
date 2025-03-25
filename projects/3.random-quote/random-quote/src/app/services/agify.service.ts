import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Injectable } from '@angular/core'; // Import Injectable decorator to make the service injectable into other components
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom to convert an Observable to a Promise

@Injectable({
  providedIn: 'root', // This service is available throughout the entire application
})
export class AgifyService {
  apiUrl = 'https://api.agify.io'; // The base URL for the Agify API

  // Constructor injects HttpClient to allow making HTTP requests
  constructor(private http: HttpClient) {}

  // The getAuthorAge method is an asynchronous function that fetches the age of the author
  getAuthorAge = async (name: string) => {
    // If no name is provided, return null immediately
    if (!name) return null;

    try {
      // Fetch the data from the Agify API using the provided name
      // firstValueFrom converts the Observable returned by HttpClient into a Promise
      const response = await firstValueFrom(
        this.http.get<any>(`${this.apiUrl}?name=${name}`)
      );

      // Return the 'age' property from the response, or 'Unknown' if not available
      return response.age || 'Unknown';
    } catch (error) {
      // If an error occurs during the request, log the error and return 'Unknown'
      console.error('Error fetching age:', error);
      return 'Unknown';
    }
  };
}
