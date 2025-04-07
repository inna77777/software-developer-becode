import { TestBed } from '@angular/core/testing'; // Import TestBed, which is used to configure and initialize the testing environment for Angular components and services.
import { AgifyService } from './agify.service'; // Import the AgifyService, the service being tested.

describe('AgifyService', () => {
  // Begin the test suite for AgifyService. The string 'AgifyService' is a description of the service being tested.
  let service: AgifyService; // Declare a variable to hold the instance of AgifyService.

  beforeEach(() => {
    // beforeEach is a setup function that runs before each test in the suite.
    TestBed.configureTestingModule({}); // TestBed is configured here, but no special configuration is needed for the service in this case.
    service = TestBed.inject(AgifyService); // Create an instance of the AgifyService using TestBed's inject method.
  });

  it('should be created', () => {
    // Define an individual test. The string is a description of what this test is verifying.
    expect(service).toBeTruthy(); // Expect that the service instance is truthy (i.e., it should not be null or undefined). This verifies that the service was created successfully.
  });
});
