let start // set on the first step to the timestamp provided
const elements = Array.from(document.getElementsByClassName('count')) // get the elements

elements.forEach(el => {
    const final = parseInt(el.textContent, 10) // parse out the final number
    const duration = 2000 // duration in ms
    const step = ts => {
    if (!start) {
        start = ts
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration 

    el.textContent = Math.floor(progress * final) // set the text
    if (progress < 1) {
        // if we're not 100% complete, request another animation frame
        requestAnimationFrame(step) 
    }
    }

    // start the animation
    requestAnimationFrame(step)
})


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "150px";
    document.getElementById("logo").style.height = "250px";
    document.getElementById("logo").style.width = "250px";
  } else {
    document.getElementById("header").style.height = "250px";
    document.getElementById("logo").style.height = "500px";
    document.getElementById("logo").style.width = "500px";
  }
}