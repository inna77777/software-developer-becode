import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import necessary testing utilities from Angular testing module
import { QuoteComponent } from './quote.component'; // Import the component you want to test

// Define a test suite for the QuoteComponent using Jasmine's describe function
describe('QuoteComponent', () => {
  let component: QuoteComponent; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<QuoteComponent>; // Declare a variable to hold the fixture (wrapper) of the component

  // Before each test, set up the environment asynchronously
  beforeEach(async () => {
    // Configure the testing module with necessary imports and components
    await TestBed.configureTestingModule({
      imports: [QuoteComponent], // Include the QuoteComponent in the test module
    }).compileComponents(); // Compile the component's templates and stylesheets (if any)

    // Create a fixture (wrapper) for the QuoteComponent and detect changes
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance; // Get the component instance from the fixture
    fixture.detectChanges(); // Trigger change detection to sync component and template
  });

  // Define a test case (spec) to verify that the component is created correctly
  it('should create', () => {
    // Check if the component was successfully created
    expect(component).toBeTruthy(); // The test will pass if the component is truthy (not null or undefined)
  });
});
