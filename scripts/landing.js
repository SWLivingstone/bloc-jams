var points = document.getElementsByClassName('point');

var revealpoint = function (arrayOfPoints) {
for (var point = 0; point < arrayOfPoints.length; point++) {
  arrayOfPoints[point].style.opacity = 1;
  arrayOfPoints[point].style.transform = "scaleX(1) translateY(0)";
  arrayOfPoints[point].style.msTransform = "scaleX(1) translateY(0)";
  arrayOfPoints[point].style.WebkitTransform = "scaleX(1) translateY(0)";
}
};


// I orginially wrote this code with a for (var point in arrayOfPoints) loop.
// However, when I ran the the program I would get an error at the end
// (the animation still functioned as desired) because the point variable
// in the for loop would return the string 'length' during the last cycle of
// the loop.  I was able to eleminate the error by inserting a conditional
// statement to check if the point varriable was a number /^\d+$/.test(point).
// I converted to a more traditional javascript for loop to make the code
// cleaner.  Why did my first for loop return the string "length"?  I prefer
// the sytanx of my fisrt for loop for its readability.


//I just watched the solution video to compare my code to it.  Is the code
// in the solution video better than mine?  What is the value of calling a
// for loop outside of the function?
