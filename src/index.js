let intervalID

function changeCity(event){

    //for inner HTML 
    let cityTime= document.querySelector("#cityTime");  
    let cityDate = document.querySelector("#cityDate");
    let cityName = document.querySelector("#cityName");

    //fetch it from select option 
    let selectedCity = event.target.value;    
    console.log(selectedCity);



    if (selectedCity == "current"){
        console.log("local")
        selectedCity = moment.tz.guess()
    }
    else if (selectedCity == 0){
        selectedCity = "Asia/Krasnoyarsk"
    }
 
    //send out info 
    cityName.innerHTML = selectedCity.split("/")[1];

     if (intervalID) {
        clearInterval(intervalID);
    }


    intervalID = setInterval(() => {
        console.log("interval")
        let currentDate = moment.tz(selectedCity).format("MMMM Do YYYY, h:mm:ss A ");
        let editedCurrentDate = currentDate.split(",")
        cityDate.innerHTML = editedCurrentDate[0];
        cityTime.innerHTML = editedCurrentDate[1];       
    }, 1);
}

window.onload = function(){
    //when page opens it immediatley calls the changeCity function wh
    changeCity ({target: {value:"Asia/Krasnoyarsk"}})
};


let selectCity = document.querySelector("#city")
selectCity.addEventListener("change", changeCity);

