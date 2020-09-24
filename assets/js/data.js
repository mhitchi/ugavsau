let aubCount, ugaCount, aubCountStu, ugaCountStu, aubDate, ugaDate, aubTime, ugaTime;
let dateObj = new Date();

const getAubData = () => {

    $.ajax({
        url:'https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json',
        dataType: 'json',
        type: 'GET',
    }).then((response) => {
        console.log(response);
        aubCount = response.DonorTotal;
        aubCountStu = response.StudentTotal;
        aubDate = response.LastUpdated;
        
        let aubTimeArr = aubDate.split(" ");
        aubTime = aubTimeArr[1];

        let aubDay = dateObj.getDate(aubDate);

        //clear DOM elements
        $('.aubCount').empty();
        $('.aubCountStu').empty();
        $('.aubDate').empty();
        $('.aubTime').empty();

        //append data to DOM
        $('.aubCount').append(aubCount);
        $('.aubCountStu').append(aubCountStu);
        $('.aubDate').append(aubDay);
        $('.aubTime').append(aubTime);

        // COUNTER
        let start // set on the first step to the timestamp provided
        const elements = Array.from(document.getElementsByClassName('aubCount')) // get the elements
        console.log(elements);

        elements.forEach(el => {
            const final = parseInt(el.textContent, 10) // parse out the final number
            console.log(final);
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
    })
}

const getUgaData = () => {

    $.ajax({
        url:'https://sandbox.dar.uga.edu/tanyac/gailconnector/givingweekdonorinfo.php',
        dataType: 'json',
        type: 'GET',
    }).then((response) => {
        console.log(response);
        ugaCount = response.info.DonorGiftTotal;
        ugaCountStu = response.info.StudentGiftTotal;
        ugaDate = response.info.LastUpdated;
        
        let ugaTimeArr = ugaDate.split(" ");
        ugaTime = ugaTimeArr[1];

        let ugaDay = dateObj.getDate(ugaDate);
        console.log(`${ugaCount} donors as of ${ugaTime} EDT on September ${ugaDay}`);

        //clear DOM elements
        $('.ugaCount').empty();
        $('.ugaCountStu').empty();
        $('.ugaDate').empty();
        $('.ugaTime').empty();

        //append data to DOM
        $('.ugaCount').append(ugaCount);
        $('.ugaCountStu').append(ugaCountStu);
        $('.ugaDate').append(ugaDay);
        $('.ugaTime').append(ugaTime);

        // COUNTER
        let start // set on the first step to the timestamp provided
        const elements = Array.from(document.getElementsByClassName('ugaCount')) // get the elements
        console.log(elements);

        elements.forEach(el => {
            const final = parseInt(el.textContent, 10) // parse out the final number
            console.log(final);
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
    })
}

$(document).ready(()=>{

    getUgaData();
    getAubData();

    //set timer to update ugaData every minute
    // setInterval(()=> {
            // $('.ugaCount').innerHTML(ugaCount);
            // $('.ugaCountStu').innerHTML(ugaCountStu);
    //     getUgaData();
    // }, 10000);
})