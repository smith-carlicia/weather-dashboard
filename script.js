console.log("hello-world");
$(document).ready(function() {
      console.log("ready");
      $("#searchbtn").on("click", function(event){
        //   localStorage.getItem("#city-list" + currentCityName);
        event.preventDefault();
        var currentCityName = "";
        console.log(currentCityName);
        searchBar(currentCityName);
            function searchBar(currentCityName){
                var currentCityName = $("#search-input").val();
                var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
                currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                console.log(currentWeatherURL);
    
                // var currentDay = moment().format();
                // var date = moment().format("L");
                // $(".cityandcurrentdate").text(date);
                // $(".cityandcurrentdate").text(moment().format("L"));
        
                $.ajax({
                    url: currentWeatherURL,
                    method:"GET"
                }).then(function(response){
                    console.log(response);
                    // var todayWeather = response.data;
                    event.stopPropagation();
                    var currentWeatherCard = $(".currentweather");
    

                    var currentWeather = $(".cityandcurrentdate").text(response.name);
                    console.log(response.name + response.date + response.icon);
                    // console.log("testing");
                    var icon = $(".icon").attr("http://openweathermap.org/img/wn" + response.weather.icon + "@2x.png");
                    var temperature = $(".tempF").text("Temperature: " + response.main.temp + "F");
                    console.log("Temperature" + response.main.temp);
    
                    var humidity = $(".humidity").text("Humidity: " + response.main.humidity + "%");
                    console.log("Humidity: " + response.main.humidity);
    
                    var wind = $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
                    console.log("Wind Speed: " + response.wind.speed);
    
                    currentWeatherCard.append(currentWeather, temperature, humidity, wind, uv);
                    $("body").append(currentWeatherCard);
    
                    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                    $(".temp").text("Temperature (K) " + response.main.temp);
                    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

                    $(currentWeatherCard).append(body);

                    var lat = response.city.coord.lat;
                    var lon = response.city.coord.lon;

                    var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                    console.log(unIndexURL);
                    $.ajax({
                        url: uvIndexURL, 
                        method: "GET",
                    }).then(function(responseUV){
                        var uvIndex = responseUV.value;
                        var uvIndexDiv = $(".uv").text("UV Index" + uvIndex);
                        $(uvIndexDiv).append("#currentweather")
                    })
                    });
            
                // Five day forecast card forms
                cards(currentCityName);
                function cards(currentCityName){
                
                var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + 
                currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                console.log(forecastURL);
                
                $.ajax({
                    url: forecastURL,
                    method: "GET",
                }).then(function(response) {
                    console.log(forecastURL);
                    console.log(response);
                    $('#date-1').html(response.list[0].dt_txt.slice(0,-9));
                    $('#date-2').html(response.list[8].dt_txt.slice(0,-9));
                    $('#date-3').html(response.list[16].dt_txt.slice(0,-9));
                    $('#date-4').html(response.list[24].dt_txt.slice(0,-9));
                    $('#date-5').html(response.list[32].dt_txt.slice(0,-9));

                    $('#icon-1').html(response.weather.list.icon);
                    $('#icon-2').html(response.weather.icon);
                    $('#icon-3').html(respons.weather.icon);
                    $('#icon-4').html(response.weather.icon);
                    $('#icon-5').html(response.weather.icon);

                    $('#temperature-1').html(parsint(((response.main.temp - 273) * 1.8) + 32));
                    $('#temperature-2').html(parsint(((response.main.temp - 273) * 1.8) + 32));
                    $('#temperature-3').html(parsint(((response.main.temp - 273) * 1.8) + 32));
                    $('#temperature-4').html(parsint(((response.main.temp - 273) * 1.8) + 32));
                    $('#temperature-5').html(parsint(((response.main.temp - 273) * 1.8) + 32));

                    $("#humidity-1").html(response.main.humidity);
                    $('#humidity-2').html(response.main.humidity);
                    $('#humidity-3').html(response.main.humidity);
                    $('#humidity-4').html(response.main.humidity);
                    $('#humidity-5').html(response.main.humidity);
                }
                )}
            }
      });
                // Render search 
               renderSearch();
               function renderSearch(searchInput){
                var cities = document.querySelector("#city-list");
                var searchInput = document.querySelector("#searchbtn").value;
                console.log("#city-list");
                   searchInput.innerHTML = "";
                   for (var i = 0; i < cities.length; i++){
                       var cities = cities[i];
                       
                       var li = document.createElement("li");
                       li.textContent = cities;
                       cities.appendChild(li);
                       $("<ul>").append(cities);
                   }
               }
        
            
       // Submission

               searchHistory(currentCityName);
                function searchHistory(currentCityName){
                    var searchHistory = $("#search-engine");
                    var searchHistorybtn = $("searchbtn").text(currentCityName).addClass("city-button");
                    searchHistory.prepend(searchHistorybtn);
                    $("search-input").val("");
                }

                 var searchHistory = document.querySelector("#search-engine");
               searchHistory.addEventListener("submit", function(event){
                   event.preventDefault();
                   var searchText = searchInput.value.trim();
                   if (searchText === "") {
                       return;
                     }
                     
                   currentCityName.push(searchText);
                   searchInput.value = "";
                     
                   renderSearch();
               })
            //    
               
      }
      )
      
        
      