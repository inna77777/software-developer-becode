import { CommonModule } from '@angular/common'; // Import CommonModule for using common directives like *ngIf
import { AgifyService } from '../../services/agify.service'; // Import the Agify service for age estimation
import { QuoteService } from './../../services/quote.service'; // Import the Quote service for fetching random quotes
import { Component, OnInit } from '@angular/core'; // Import Component and OnInit for lifecycle hooks
import { provideHttpClient } from '@angular/common/http'; // Import the HttpClient provider to enable HTTP requests

@Component({
  selector: 'app-quote', // The selector for this component in HTML (used to add it to a template)
  templateUrl: './quote.component.html', // The path to the component's HTML template
  styleUrl: './quote.component.css', // The path to the component's CSS styles
  standalone: true, // This component is standalone, so no need to add it to an NgModule
  imports: [CommonModule], // Import the CommonModule, which contains common Angular directives like *ngIf
  providers: [QuoteService, AgifyService], // Providers are injected into this component (services for quote fetching and age estimation)
})
export class QuoteComponent implements OnInit {
  // Declare the component's properties
  quote: string = ''; // The quote text
  author: string = ''; // The author of the quote
  age: string | null = null; // The estimated age of the author
  image: string = ''; // The URL of the author's photo
  loading = false; // A flag to indicate whether data is being fetched
  errorMessage: string | null = null; // An error message if fetching data fails

  // Constructor injects the QuoteService and AgifyService into the component
  constructor(
    private quoteService: QuoteService,
    private agifyService: AgifyService
  ) {}

  // ngOnInit is a lifecycle hook that runs when the component is initialized
  ngOnInit(): void {
    this.fetchQuote(); // Call fetchQuote to get the data when the component is initialized
  }

  // fetchQuote is an asynchronous method to fetch the quote, author's age, and photo
  fetchQuote = async () => {
    this.loading = true; // Set loading flag to true when fetching starts
    this.errorMessage = null; // Clear any previous error messages

    try {
      // Fetch the random quote using QuoteService
      const data = await this.quoteService.getRandomQuote();
      this.quote = data.quote; // Set the quote text
      this.author = data.author; // Set the author's name
      this.image = data.photo || ''; // Set the author's photo (if available)

      // If the author exists, fetch the estimated age using AgifyService
      if (this.author) {
        this.age = await this.agifyService.getAuthorAge(this.author);
      }
    } catch (error) {
      // Handle errors if the fetch fails
      this.errorMessage = 'Failed to fetch quote. Please try again.';
    } finally {
      // Set loading flag to false once the fetch operation finishes
      this.loading = false;
    }
  };
}
