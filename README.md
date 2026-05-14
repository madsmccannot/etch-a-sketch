# etch-a-sketch
One of The Odin Project's certification projects of Fundamentals course made in order to do a Etch-a-Sketch playable on browser.

Project Flow>
/ Select .container and .grid-btn
/ Make a createGrid(size) function where
  > you start with an empty .container

  > assign square size to 640 / size

  > thru .js file create a for loop that iterates 256 times and each time creates a div assigned to const square with a class="square", assign dinamically that square width and height is square size thru template literals + px, finally at the end, with an event listener make the hover paint the backgroundColor of each *square* everytime the "mouseenter" is triggered

  > append square to container outside the loop, inside the function
  
/ add a event listener to the button so when its clicked teh uer gets prompted to add a number between 0 and 100 stored in userInput
/ userInput should be assigned to a Number(userInput)
/ If both userInput is more than 0 and equal or less than 100 then call createGrid(userInput)
/ Then at the very bottom of the file call createGrid(16), since this is the default grid shown when loading the page, this one will be deleted when the user clicks the button and selects a number that is prompted for them to create a custom grid.