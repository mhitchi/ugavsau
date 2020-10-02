const schools = [
    {
        name: "aub",
        url: "https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json"
    },
    {
        name: "uga",
        url: "./UGAData.json"
    }
]

const doCount = (name) => {
    // COUNTER
    let start // set on the first step to the timestamp provided
    const elements = Array.from(document.getElementsByClassName(`${name}Count`)) // get the elements
    // console.log(elements);

    elements.forEach(el => {
        const finalNum = parseInt(el.innerHTML, 10) // parse out the final number
        //console.log(finalNum);
        const duration = 1000 // duration in ms
        const step = ts => {
            if (!start) {
                start = ts
            }
            // get the time passed as a fraction of total duration
            let progress = (ts - start) / duration 

            el.textContent = Math.floor(progress * finalNum) // set the text
            if (progress < 1) {
                // if we're not 100% complete, request another animation frame
                requestAnimationFrame(step) 
                // console.log(finalNum)
            } else {
                el.textContent = finalNum;
                // console.log(finalNum)
            }
        }

        // start the animation
        requestAnimationFrame(step)
    })
}


const getData = (name, jsonUrl) => {

    $.ajax({
        url: jsonUrl,
        dataType: 'json',
        type: 'GET',
    }).then((response) => {
        //console.log(response);
        let count, countStu, date, time, day;

        if (name == "aub") {
            count = response.DonorTotal;
            countStu = response.StudentTotal;
            date = response.LastUpdated;
            let dateArr = date.split('/');
            let dayArr = dateArr[1].split("");
            day = dayArr[1];
        } else if (name == "uga") {
            count = response.info.DonorGiftTotal;
            countStu = response.info.StudentGiftTotal;
            date = response.info.LastUpdated;
            let dateArr = date.split('-');
            day = dateArr[1];
        }
        
        let timeArr = date.split(" ");
        time = timeArr[1];

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

        doCount(name);
    })
}


$(document).ready(()=>{
    schools.forEach((school) => {
        let name = school.name;
        let jsonUrl = school.url;

        getData(name, jsonUrl);
    })
})
