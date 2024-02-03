Friday, February 2, 2024

I created this using bootstrap, Primarily to style the button.  It does what I want.  I'm wondering if there is a more
efficient way to mark up the spans for each letter, or to create all the query Selectors.  Maybe using class?  

Not really as exciting as I thought it would be.  Colors are kind of pastel looking.  I wonder if I could redefine the random colors function to 
make them more intense.  Could add another button to access these more intense colors.  

Saturday, February 3, 2024

Experimented with new randomly generating color functions.  The rainbow() function works pretty well.  Used comment notation to put each span
on a new line for each letter of "Random Colors" without a space being added in.  A line break in html causes a space.  

My next goal is to be able to add a class to any span or div that will randomly color each letter in the string.  Maybe a good excerice to 
try and do in React.  Not sure if a React component can be as small as a single digit.  

Add another button to compare rainbow() to getRandomColor().

Maybe a timeout function to automate the color changing.  