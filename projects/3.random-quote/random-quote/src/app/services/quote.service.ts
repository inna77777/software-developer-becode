import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { Injectable } from '@angular/core'; // Import Injectable decorator to make this service injectable into other components
import { firstValueFrom } from 'rxjs'; // Import firstValueFrom to convert an Observable to a Promise

@Injectable({
  providedIn: 'root', // This service is available globally throughout the application
})
export class QuoteService {
  private apiUrl = 'https://thatsthespir.it/api'; // The API URL to fetch random quotes from

  // Constructor injects HttpClient to make HTTP requests
  constructor(private http: HttpClient) {}

  // The getRandomQuote method is an asynchronous function that fetches a random quote
  getRandomQuote = async () => {
    try {
      // Fetch the data from the API using the HttpClient's GET method
      // firstValueFrom converts the Observable returned by HttpClient into a Promise
      const response = await firstValueFrom(this.http.get<any>(this.apiUrl));

      // Return the response from the API (which should contain the random quote)
      return response;
    } catch (error) {
      // If an error occurs during the request, log the error and throw it to be handled by the caller
      console.error('Error fetching quote:', error);
      throw error;
    }
  };
}
