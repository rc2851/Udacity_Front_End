## Website Performance Optimization portfolio project


### Getting started

#### Open https://developers.google.com/speed/pagespeed/insights/

#### Enter http://rc2851.github.io/ in PageSpeed Insights web site and click analyze button

    I am gettin 90/100 Speed on PageSpeed Insights.

#### The code being used on http://rc2851.github.io/ is the same code in the prod folder.
    1. The images have been compressed
    2. Set Analytics.js to async
    3. CSS is now in the HTML files to prevent render blocking
    4. Main.js is minified
    5. Added media="print" to print.css references
    6. Removed href for fonts
    7. Reduced sliding pizza count from 200 to 60
	


