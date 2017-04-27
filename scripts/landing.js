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

window.onload = function() {
  if (window.innerHeight > 950) {
    animatePoints();
}
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener("scroll", function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        animatePoints();
    }
  });
};
