 

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

let navStats = Array.from(document.getElementsByClassName("nav-stats"));
let daysLeft = Array.from(document.getElementsByClassName("days-left"));

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "150px";
    document.getElementById("logo").style.height = "155px";
    document.getElementById("logo").style.width = "175px";
    navStats.forEach(stat => stat.style.display = "none");
    daysLeft.forEach(item => item.style.margin = "250px 0 0 0");
  } else {
    document.getElementById("header").style.height = "250px";
    document.getElementById("logo").style.height = "430px";
    document.getElementById("logo").style.width = "500px";
    navStats.forEach(stat => stat.style.display = "block");
    daysLeft.forEach(item => item.style.margin = "380px 0 0 0");
  }
}