$(document).ready(()=>{

    let aubCount, ugaCount, aubCountStu, ugaCountStu, aubDate, ugaDate;
    let school;
    let dateObj = new Date();

    const getAubData = () => {
        $.ajax({
            url:'https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json',
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            aubCount = response.DonorTotal;
            aubDate = response.LastUpdated;
            let aubDay = dateObj.getDate(aubDate);
            console.log(`${aubCount} donors as of September ${aubDay}, 2020.`);

            $('#aubCount').append(`${aubCount}`)
            $('#aubDate').append(`${aubDay}`)
        })
    }

    getAubData()
})