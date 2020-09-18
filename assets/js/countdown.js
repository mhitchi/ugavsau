const countdownDate = new Date("Sept 28, 2020 00:00:00").getTime();

//update the count down every 1 second
let x = setInterval(() => {
    //get todays date and time
    let now = new Date().getTime();

    //calc distance between now and count down date
    let distance = countdownDate - now;

    //time calc for days, hrs, min, secs
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result in the DOM
    document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    //if countdown expired
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "IT'S ON!"
    }
}, 1000)
