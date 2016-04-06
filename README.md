## Summary

Want to know what I've done and what I'm good at?  Well look no further, it's my resume in easily parsible JSON!!!!


## How do I make it look "pretty"?

If you would like to see a single page rendering of the JSON data...

1. Install the [resume NPM package](https://jsonresume.org/):

   ```
   npm install -g resume-cli
   ```

2. Clone this repo:

   ```
   git clone https://github.com/skingry/resume.git
   ```

3. Do a little bit of this:

   ```
   resume serve --theme slicker
   ```

4. ????

   ```
   Et Voila! (Should open a browser where my resume is displayed.)
   ```

5. Profit!

   ![screenshot](https://media.giphy.com/media/9o67upvAnOqRy/giphy.gif)


## How do I get a PDF of the resume?

Well, you could always print to PDF... or you could use [phantomjs](http://phantomjs.org/) to make a PDF using the rendered output from the steps above (ie. index.html).  

An example of how to do that would be:

  ```
  phantomjs rasterize.js index.html ~/Desktop/Seth_Kingry-resume.pdf
  ```

***
Give me a call or shoot me an email if you'd like pointers on making this simple resume web application "#webscale" :)
