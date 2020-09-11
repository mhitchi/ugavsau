 

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

let navStats = Array.from(document.getElementsByClassName("nav-stats"));

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "150px";
    document.getElementById("logo").style.height = "155px";
    document.getElementById("logo").style.width = "175px";
    navStats.forEach(stat => stat.style.display = "none");
  } else {
    document.getElementById("header").style.height = "250px";
    document.getElementById("logo").style.height = "430px";
    document.getElementById("logo").style.width = "500px";
    navStats.forEach(stat => stat.style.display = "block");
  }
}