$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Agra&units=imperial&APPID=ea0a3c18b884f5601b41c50aea1e3d85",function(data){
  console.log(data);
  var icon1= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp1= Math.floor(data.main.temp);
  var humidity1=data.main.humidity;
  var weather1=data.weather[0].main;

  $('.icon1').attr('src', icon1);
  $('.weather1').append(weather1);
  $('.humidity1').append(humidity1);
  $('.temp1').append(temp1);
});
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Ayodhya&units=imperial&APPID=ea0a3c18b884f5601b41c50aea1e3d85",function(data){
  console.log(data);
  var icon2= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp2= Math.floor(data.main.temp);
  var weather2=data.weather[0].main;
  $('.icon2').attr('src', icon2);
  $('.weather2').append(weather2);
  $('.temp2').append(temp2);
});
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Lucknow&units=imperial&APPID=ea0a3c18b884f5601b41c50aea1e3d85",function(data){
  console.log(data);
  var icon3= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp3= Math.floor(data.main.temp);
  var weather3=data.weather[0].main;
  $('.icon3').attr('src', icon3);
  $('.weather3').append(weather3);
  $('.temp3').append(temp3);
});
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Varanasi&units=imperial&APPID=ea0a3c18b884f5601b41c50aea1e3d85",function(data){
  console.log(data);
  var icon4= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp4= Math.floor(data.main.temp);
  var weather4=data.weather[0].main;
  $('.icon4').attr('src', icon4);
  $('.weather4').append(weather4);
  $('.temp4').append(temp4);
});