const dateObj = new Date();
//let urls = ['https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json', 'https://sandbox.dar.uga.edu/tanyac/gailconnector/givingweekdonorinfo.php']
//let schools = ['aub', 'uga']
const schools = [
    {
        name: "uga",
        url: "https://sandbox.dar.uga.edu/tanyac/gailconnector/givingweekdonorinfo.php"
    },
    {
        name: "aub",
        url: "https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json"
    }
]


const getData = (name, jsonUrl) => {

    $.ajax({
        url: jsonUrl,
        dataType: 'json',
        type: 'GET',
    }).then((response) => {
        console.log(response);
        let count, countStu, date, time;

        if (name == "aub") {
            count = response.DonorTotal;
            countStu = response.StudentTotal;
            date = response.LastUpdated;
        } else if (name == "uga") {
            count = response.info.DonorGiftTotal;
            countStu = response.info.StudentGiftTotal;
            date = response.info.LastUpdated;
        }
        
        let timeArr = date.split(" ");
        time = timeArr[1];

        let day = dateObj.getDate(date);

        //clear DOM elements
        $(`.${name}CountTotal`).empty();
        $(`.${name}CountStu`).empty();
        $(`.${name}Date`).empty();
        $(`.${name}Time`).empty();

        //append data to DOM
        $(`.${name}CountTotal`).append(count);
        $(`.${name}CountStu`).append(countStu);
        $(`.${name}Date`).append(day);
        $(`.${name}Time`).append(time);

        // COUNTER
        let start // set on the first step to the timestamp provided
        const elements = Array.from(document.getElementsByClassName(`.${name}Count`)) // get the elements
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
        let name = school.name;
        let jsonUrl = school.url;

        getData(name, jsonUrl);
    })
})