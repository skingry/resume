## Summary

Want to know what I've done and what I'm good at?  Well look no further, it's my resume in easily parsible JSON (sort of)!!!!

The current format of the raw data is [base64](https://en.wikipedia.org/wiki/Base64).  I chose to do this to protect my personal information from web crawlers (ie. my email address and telephone number). If you'd like a copy that isn't obfuscated, you can either look through the commit history and find a copy... or you can decode it yourself.

An example of how to do that would be:
  
  ```
  cat resume.base64 | base64 -D > resume.json
  ```


## Ok.. so I have it in JSON. Now how do I make it look "pretty"?

If you would like to see a single page rendering of the JSON data...

1. Install the [resume NPM package](https://jsonresume.org/):

   _Note: a prerequisite is that you have [Node.js](https://nodejs.org/en/) installed._


   ```
   npm install -g resume-cli
   ```

2. Do a little bit of this:

   ```
   if [ -f resume.json ]; then resume serve --theme slicker; else echo "Decode resume.base64 first."; fi
   ```

3. ????

   ```
   Et Voila! (Should open a browser where my resume is displayed.)
   ```

4. Profit!

   ![screenshot](https://media.giphy.com/media/9o67upvAnOqRy/giphy.gif)


## Wow, very nice! I'd like to put this in our HR system for review... how do I get a PDF of the resume?

Well, you could always print to PDF... or you could use [phantomjs](http://phantomjs.org/) to make a PDF using the rendered output from the steps above (ie. index.html).  

An example of how to do that would be:

  ```
  phantomjs rasterize.js index.html ~/Desktop/Seth_Kingry-resume.pdf
  ```

***
If you've gotten this far... give me a call or shoot me an email if you'd like pointers on making this simple resume web application "#webscale" :)
