let dateObj = new Date();
let urls = ['https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json', 'https://sandbox.dar.uga.edu/tanyac/gailconnector/givingweekdonorinfo.php']
let schools = ['aub', 'uga']

const getData = (school, jsonUrl) => {

    $.ajax({
        url: jsonUrl,
        dataType: 'json',
        type: 'GET',
    }).then((response) => {
        console.log(response);
        let count, countStu, date;

        count = response.DonorTotal;
        countStu = response.StudentTotal;
        date = response.LastUpdated;
        
        let timeArr = date.split(" ");
        time = timeArr[1];

        let day = dateObj.getDate(date);

        //clear DOM elements
        $(`.${school}CountTotal`).empty();
        $(`.${school}CountStu`).empty();
        $(`.${school}Date`).empty();
        $(`.${school}Time`).empty();

        //append data to DOM
        $(`.${school}CountTotal`).append(count);
        $(`.${school}CountStu`).append(countStu);
        $(`.${school}Date`).append(day);
        $(`.${school}Time`).append(time);

        // COUNTER
        let start // set on the first step to the timestamp provided
        const elements = Array.from(document.getElementsByClassName(`.${school}Count`)) // get the elements
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
    schools.forEach((school) => {
        let i = schools.indexOf(school);
        let url = urls[i];

        getData(school, url);
    })

    //set timer to update ugaData every minute
    // setInterval(()=> {
            // $('.ugaCount').innerHTML(ugaCount);
            // $('.ugaCountStu').innerHTML(ugaCountStu);
    //     getUgaData();
    // }, 10000);
})