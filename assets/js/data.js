$(document).ready(()=>{

    let aubCount, ugaCount, aubCountStu, ugaCountStu, aubDate, ugaDate;
    let school;

    const getData = (school) => {
        $.ajax({
            url:'https://raw.githubusercontent.com/RAdrianKing/AUbeatweek/master/auburn.json',
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            console.log(response);
        })
    }

    getData("uga")
})