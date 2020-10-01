var APIKey = "c241e584f19cb878d9abf3b10c21674b";
var cityName = "san francisco"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +cityName+ "&units=imperial&appid=" +APIKey;
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#city-name").append(response.city.name + " " + response.list[0].dt_txt);
    $("#temp").append(response.list[0].main.feels_like + " °F");
    $("#humid").append(response.list[0].main.humidity);
    $("#wind").append(response.list[0].wind.speed);
    $("#dayOne").text(response.list[5].dt_txt);
    $("#dayTwo").text(response.list[13].dt_txt);
    $("#dayThree").text(response.list[21].dt_txt);
    $("#dayFour").text(response.list[29].dt_txt);
    $("#dayFive").text(response.list[37].dt_txt);
});


