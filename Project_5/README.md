## Website Performance Optimization portfolio project


### Getting started

#### Open https://developers.google.com/speed/pagespeed/insights/

#### Enter http://rc2851.github.io/ in PageSpeed Insights web site and click analyze button

    I am gettin 90/100 Speed on PageSpeed Insights.
    pizza size change is now less than 5ms.
    Average time to generate last 10 frames is now generally less than 3ms.

#### The code being used on http://rc2851.github.io/ is the same code in the dist folder.
	
#### Here is a list of things I have done to improve website performance.

    1. The images have been compressed
    2. Set Analytics.js to async
    3. CSS is now in the HTML files to prevent render blocking
    4. Main.js is minified
    5. Added media="print" to print.css references
    6. Removed href for fonts
    7. Reduced sliding pizza count from 200 to 60
    8. Moved pizzaDiv variable declaration outside for loop  
    9. Created var dbScrollTop = document.body.scrollTop to get value outside of for loop
       var pizzasDiv = document.getElementById("randomPizzas");
    10.Moved the following outside of for loop
       var pizzaCount = document.querySelectorAll(".randomPizzaContainer").length;     
       var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[1], size);     
       var newwidth = (document.querySelectorAll(".randomPizzaContainer")[1].offsetWidth + dx) + 'px';
    11.Changed querySelectorAll to getElementsByClassName where setting the new width  
       document.getElementsByClassName("randomPizzaContainer")[i].style.width = newwidth; 
	


