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
    $("#temp1").append(response.list[5].main.feels_like + " °F");
    $("#temp2").append(response.list[13].main.feels_like + " °F");
    $("#temp3").append(response.list[21].main.feels_like + " °F");
    $("#temp4").append(response.list[29].main.feels_like + " °F");
    $("#temp5").append(response.list[37].main.feels_like + " °F");
    $("#humid1").append(response.list[5].main.humidity);
    $("#humid2").append(response.list[13].main.humidity);
    $("#humid3").append(response.list[21].main.humidity);
    $("#humid4").append(response.list[29].main.humidity);
    $("#humid5").append(response.list[37].main.humidity);
    $("#dayTwo").text(response.list[13].dt_txt);
    $("#dayThree").text(response.list[21].dt_txt);
    $("#dayFour").text(response.list[29].dt_txt);
    $("#dayFive").text(response.list[37].dt_txt);
});
$("#search").on("click",function(){
  //alert("works");
  var citySearch = $("#citySearch").value;
  alert(citySearch);
});

