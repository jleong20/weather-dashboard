var APIKey = "e6ed66e2161fbded007c85d013a1bf39";
var cityName = "san francisco"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" +APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#city-name").text(response.name);
    $("#temp").append(response.main.temp);
    $("#humid").append(response.main.humidity);
    $("#wind").append(response.wind.speed);
    
  });


