var APIKey = "c241e584f19cb878d9abf3b10c21674b";
var cityName = "san francisco"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +cityName+ "&units=imperial&appid=" +APIKey;
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#city-name").append(response.city.name);
    $("#temp").append(response.list[0].main.feels_like + " °F");
    $("#humid").append(response.list[0].main.humidity);
    $("#wind").append(response.list[0].wind.speed);
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
});


