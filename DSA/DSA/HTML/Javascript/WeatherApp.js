
const apiKey1= "8a47febd0f636d10e9261833aebc07d3"; 
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const apiKey2= "AIzaSyCLy2NwTlHaXpb6KdRnSp56aYeeGsI0Ho4"; 
//
const  darkTheme = document.querySelector(".darkTheme"); 
const button= darkTheme.querySelector("button"); 
const weatherImg= document.getElementById("weatherImg"); 
//
const html = document.querySelector("html "); 
const img = button.querySelector("img"); 
const content = document.querySelector(".content"); 
const input1 = document.querySelector(".input"); 
const input = input1.querySelector("input");  
const number1 = document.getElementById("number1"); 
const number2 = document.getElementById("number2"); 
const city1 = document.getElementById("city1"); 
const temperature = document.getElementById("temperature"); 
const searchbtn= document.querySelector(".search", "button"); 
//
const text1= document.getElementById("text1");
const text2= document.getElementById("text2");
const text3= document.getElementById("text3");
const text4= document.getElementById("text4");
const text5= document.getElementById("text5");
const text6= document.getElementById("text6");

//
button.addEventListener("click", changeBColor); 
//
let state= "off"; 
//
function changeBColor(event1 ){
    if (state=="off"){
        html.style.backgroundColor= "rgba(0, 0, 0, 0.900)";
        img.src= "../Images/night-mode.png";
        //
        content.style.backgroundColor= "rgba(0, 0, 0, 0.800)" ; 
        content.style.borderColor="rgba(0, 0, 0, 0.800)";  
        //
        input.style.backgroundColor= "black"; 
        input.style.borderColor= "black";
        input.style.color= "white"; 
        //
        text1.style.color= "white"; 
        text2.style.color= "white"; 
        text3.style.color= "white"; 
        text4.style.color= "white"; 
        text5.style.color= "white"; 
        text6.style.color= "white"; 
        //
        content.style.boxShadow= "1px 1px 4px white "


        state= "on"; 
        
    }

    else{
        html.style.backgroundColor= "rgba(192, 192, 192, 0.63)";
        img.src= "../Images/moon.png"; 
        //
        content.style.backgroundColor= "rgb(192, 192, 192)"; 
        content.style.borderColor="rgb(192, 192, 192)"; 
        //
        input.style.backgroundColor="white";  
        input.style.borderColor= "white";
        input.style.color= "black";
        input.style.color= "black"; 
        text1.style.color= "black"; 
        text2.style.color= "black"; 
        text3.style.color= "black"; 
        text4.style.color= "black"; 
        text5.style.color= "black"; 
        text6.style.color= "black"; 
        //
        content.style.boxShadow= "6px 6px 7px rgba(0, 0, 0, 0.600) "
        
        state= "off";
    }

}


searchbtn.addEventListener("click", updatingWeather); 

async function updatingWeather(event2) { 
    let cityName= input.value; 
    let response= await fetch(apiUrl + cityName + "&appid="+ apiKey1);     ` hi there i am here. `
    let data = await response.json(); 
    console.log(data); 
    //
    city1.innerHTML=data.name ;
    temperature.innerHTML= Math.round(data.main.temp) + "ºC"; 
    number1.innerHTML= data.main.humidity + ""; 
    number2.innerHTML= data.wind.speed; 
    //
    const sky= data.weather[0].main; 
    
    if (sky=="Clouds"){
        weatherImg.src= "../Images/clouds.png";
    }
    else if (sky=="Clear"){
        weatherImg.src= "../Images/clear.png";
    }
    else if  (sky=="Drizzle"){
        weatherImg.src= "../Images/drizzle.png";
    }
    else if  (sky=="Haze"){
        weatherImg.src= "../Images/haze.png";
    }
    else if (sky=="Snow"){
        weatherImg.src= "../Images/snow.png";
    }
    else if (sky=="Rain"){
        weatherImg.src= "../Images/rain.png"
    }
    
    


}









