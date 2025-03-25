# Exercise: consume a web service using async/await

-   Time necessary : **1 day**
-   Work mode : **Solo**
-   Repository: `random-quote-using-async-await`
-   Deployment stragegy : GitHub Page

## Learning Objectives

-   Make an asynchronous request to a remote server via javascript using async/await and try/catch.
-   DOM manipulation : modify the DOM according to the result of the request.
-   Don't forget HTML semantics (blockquote..)

## Mission

Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: https://thatsthespir.it

The web service sits at this URL: https://thatsthespir.it/api. It is called **the endpoint**".

## Steps

-   Send a request to a remote server via javascript using async/await and try/catch.
-   Treat the answer :
    -   If the request failed, show an error message to the user.
    -   if the request succeed, transform a JSON response into Html, injected in the DOM.
-   Make a button to generate another random quote.
-   Make it look good via CSS ([inspiration](https://www.google.be/search?q=beautiful+web+typography&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjJrbmozOvYAhUE9WMKHXTmDrQQsAQIJg&biw=1440&bih=780)).
-   Publish it as a GitHub Page
-   When it works, share the link on your startup's discord channel.

### Bonus

-   Use the agify API to guess the age of the authors
-   Implement loader wihle the request is pending
