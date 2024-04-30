// var e1= document.querySelector("#e1")
// var e1img= document.querySelector("#e1 img")

// e1.addEventListener("mousemove", function(hi){
//     e1img.style.left = hi.x+ "px"
//     e1img.style.top = hi.y+ "px"
// })
// e1.addEventListener("mouseenter", function(hi){
//     e1img.style.opacity = 1;
// })
// e1.addEventListener("mouseleave", function(hi){
//     e1img.style.opacity = 0;
// })
// only for one Image

let elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
         val.childNodes[3].style.opacity = 1;
  });
     val.addEventListener("mouseleave", function () {
         val.childNodes[3].style.opacity = 0;
  });
     val.addEventListener("mousemove", function (dets) {
         val.childNodes[3].style.left = dets.x + "px";
    // val.childNodes[3].style.top = dets.y + "px";
  });
});


