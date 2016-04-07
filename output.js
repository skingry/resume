// Shamelessly copied from:
// https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js
//
// ...with a few changes to viewport size and removed everything that
// wasn't explicitly needed to generate a PDF of my resume.

"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, output, size;

address = "index.html";
output = system.args[1];

page.viewportSize = { width: 1280, height: 1280 };
page.open(address, function (status) {
  if (status !== 'success') {
    console.log('Unable to open index.html! Have you rendered the JSON file to single page output yet?');
    phantom.exit(1);
  } else {
    window.setTimeout(function () {
      page.render(output);
      phantom.exit();
    }, 200);
  }
});
