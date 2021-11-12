// 1. Setting eventListener to the submit button
// 2. Writing function to send the call to the API (i.e. send the data entered in the search bar to the API for corresponding city name)
// 3. Recieving data from server in JSON format (temperature and current weather)

$(document).ready(function() {
    // Add action listener to the submit button:
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
})

function performSearch(event) {
    var request;
    
    event.preventDefault();

    // Store the AJAX reply to a variable:
    request = $.ajax({
        url: 'api.openweathermap.org/data/2.5/weather',
        type: "GET", 
        data: {
            q:$("#city").val(),
            appid: '5a06e83b80efa524f2ae2db351486e3f'
        }
    });

    request.done(function(response) {
        formatSearch(response);
    })

    function formatSearch(jsonObject) {
        var city_name = jsonObject.name;
        var city_weather = jsonObject.weather[0].main;
        var city_temp = jsonObject.main.temp;

        $("#city-name").text(city_name);
        $("#city-temp").text(city_temp);
        $("#weather-desc").text(city_weather);
    }
}

// Accu Weather API Key -  	TmixvTdeOLafomiw1Ie5cgbrBYP0duCW 
// URL: http://dataservice.accuweather.com/locations/v1/cities/search


// url: 'api.openweathermap.org/data/2.5/weather',
//         type: "GET", 
//         data: {
//             q:$("#city").val(),
//             appid: '5a06e83b80efa524f2ae2db351486e3f'
//         }
