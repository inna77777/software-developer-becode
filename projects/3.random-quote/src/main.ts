import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { QuoteComponent } from './app/components/quote/quote.component';
import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(QuoteComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(QuoteComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
