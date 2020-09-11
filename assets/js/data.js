$(document).ready(()=>{

    let aubCount, ugaCount, aubCountStu, ugaCountStu, aubDate, ugaDate;
    let dateObj = new Date();

    const getAubData = () => {
    
        $.ajax({
            url:'https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json',
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            console.log(response);
            aubCount = response.DonorTotal;
            aubDate = response.LastUpdated;
            let aubDay = dateObj.getDate(aubDate);
            console.log(`${aubCount} donors as of September ${aubDay}, 2020.`);
            
            //ERROR:
                //typeof aubCount = number
                //parseInt() in main.js throwing NaN
                    //placing aubCount in template literals doesn't work
                    //getting value from textContent, which is the string "100"
                    //Number() instead of parseInt() returns 0;
                    //adding + to el.textContent returns 0;
                    //typeof(NaN) = number
                    //encodeURIComponent(aubCount) returns 100
                    //tried aubCount.toString(), .length returned as 3
            $('.aubCount').append(aubCount)
            $('.aubDate').append(aubDay)

            // COUNTER
            let start // set on the first step to the timestamp provided
            const elements = Array.from(document.getElementsByClassName('count')) // get the elements
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

    getAubData()

})