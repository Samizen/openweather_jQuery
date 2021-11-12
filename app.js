$(document).ready(function() {
    $("#form-sub").submit(function(event) { 
        performSearch(event); });
  });

  function performSearch(event) {
    var request;
    event.preventDefault();
    // $("#city-name").text("Searching ...");
    // $("#city-temp").text("");
    // $("img").attr('src', "");
    // $("#city-weather").text("");
  
    // Send the request
    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: { q: $("#city").val(), 
                appid: '5a06e83b80efa524f2ae2db351486e3f', // put your appid
                units: 'metric'}
    });
  
    // // Callback handler for success
    // request.done(function (response){
    //     formatSearchResults(response);
    // });
    
    // // Callback handler for failure
    // request.fail(function (){
    //     $("#city-name").text("Please try again, incorrect input!");
    //     $("#city-temp").text("");
    //     $("img").attr('src', "");
    //     $("#city-weather").text("");
    // });
  
  }

  function formatSearchResults(jsonObject) {
    
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    $("#city-name").text(city_name);
    $("#weather-desc").text(city_weather);
    $("#city-temp").text(city_temp+" Celsius");  
  }