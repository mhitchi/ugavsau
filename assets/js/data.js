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
        })
    }

    getAubData()

})