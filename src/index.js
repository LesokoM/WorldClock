let intervalID

function changeCity(event){
    console.log("inside");
    //for inner HTML 
 
    let cityTime= document.querySelector("#cityTime");  
    let cityDate = document.querySelector("#cityDate");
    let cityName = document.querySelector("#cityName");

    //fetch it from select option 
    let selectedCity = event.target.value;    
    console.log(selectedCity);



    if (selectedCity.length == 0){
    
        selectedCity = "America/Jamaica"
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
    changeCity ({target: {value:"America/Jamaica"}})
};


let selectCity = document.querySelector("#city")
selectCity.addEventListener("change", changeCity);

