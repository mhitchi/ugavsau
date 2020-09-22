$(document).ready(()=>{

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
            aubDate = response.LastUpdated;
            
            let aubTimeArr = aubDate.split(" ");
            aubTime = aubTimeArr[1];

            let aubDay = dateObj.getDate(aubDate);
            console.log(`${aubCount} donors as of ${aubTime} EDT on September ${aubDay}`);

            $('.aubCount').append(aubCount)
            $('.aubDate').append(aubDay)
            $('.aubTime').append(aubTime)

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

    const getUgaData = () => {
    
        $.ajax({
            url:'https://sandbox.dar.uga.edu/tanyac/gailconnector/givingweekdonorinfo.php',
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            console.log(response);
            ugaCount = response.DonorTotal;
            ugaDate = response.LastUpdated;
            
            let ugaTimeArr = ugaDate.split(" ");
            ugaTime = ugaTimeArr[1];

            let ugaDay = dateObj.getDate(ugaDate);
            console.log(`${ugaCount} donors as of ${ugaTime} EDT on September ${ugaDay}`);

            $('.ugaCount').append(ugaCount)
            $('.ugaDate').append(ugaDay)
            $('.ugaTime').append(ugaTime)

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

    getAubData();
    getUgaData();

})