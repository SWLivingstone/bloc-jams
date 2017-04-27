var points = document.getElementsByClassName('point');

var animatePoints = function() {

  var revealPoint = function (arrayOfPoints) {
  for (var point = 0; point < arrayOfPoints.length; point++) {
    arrayOfPoints[point].style.opacity = 1;
    arrayOfPoints[point].style.transform = "scaleX(1) translateY(0)";
    arrayOfPoints[point].style.msTransform = "scaleX(1) translateY(0)";
    arrayOfPoints[point].style.WebkitTransform = "scaleX(1) translateY(0)";
  }
  };
  revealPoint(points);
};
