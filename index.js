let hours = 0;
let minutes = 0;
let seconds = 0;
let displayhours = 0;
let displayminutes = 0;
let displayseconds = 0;
let status = "stopped";
let time = 0;
let finaltime = {};

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++
        };
    };
    if(seconds<10){
        displayseconds = "0"+seconds.toString();
    }
    else{
        displayseconds = seconds;
    }
    if(minutes<10){
        displayminutes = "0"+minutes.toString();
    }
    else{
        displayminutes = minutes;
    }
    if(hours<10){
        displayhours = "0"+ hours.toString();
    }
    else{
        displayhours = hours;
    }

    totaltime = displayhours + " : " + displayminutes + " : " + displayseconds
    finaltime.saved = totaltime;
    document.getElementById("screen").innerHTML = totaltime;


};

function start(){
console.log(finaltime.saved)
if(finaltime.saved != undefined){

    }

    else if(finaltime.saved == undefined){
        time = window.setInterval(stopwatch, 1000);

    }

    else if(document.getElementById("timertostopwatch").innerHTML == "Pomodoro"){
        document.getElementById("title").innerHTML = "Pomodoro Technique";
        timee = window.setInterval( pomodoromachine,1000);
    }
    else if(status === "stopped"){
        time = window.setInterval(stopwatch, 1000);
        document.getElementById("saveorview").innerHTML = "SAVE";
    };
};

function stop(){
    clearInterval(time);
};

function reset(){
    if(document.getElementById("timertostopwatch").innerHTML == "Pomodoro"){
        document.getElementById("screen").innerHTML = "00 : 25 : 00"
        clearInterval(timee);
        minutess = 24;
        secondss = 60;
        document.getElementById("title").innerHTML = "Pomodoro Technique";
        document.getElementById("title").style.fontSize = "7vw"
    }
    else{
    clearInterval(time);
    document.getElementById("screen").innerHTML = "00 : 00 : 00"
    document.getElementById("saveorview").innerHTML = "VIEW";
    seconds = 0;
    minutes = 0;
    hours = 0;
    finaltime.saved = undefined;
    }
}

function get_date(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
    return today
}
datee = get_date();

function get_day(){
let d = new Date();
let dayy = d.getDay();
let dayofweek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    
};
let dayyy = dayofweek[dayy]
    return dayyy
};
dayy = get_day();

function roundToTwoDecimals(x){
    let numberwithzero =  Number.parseFloat(x).toFixed(2);
    let legitnumber = numberwithzero.toString().substring(1);
    return legitnumber
};

function turntimeintohumanlanguage(){
    let numberwithnocolontest = finaltime.saved.replaceAll(":","").replaceAll(/\s/g , '');
    let numberwithnocolon = Number(numberwithnocolontest);
    if(numberwithnocolon.toString() == "1"){
        finaltime.saved = "1 second"
    }
    else if(numberwithnocolon.toString().length <= 2){
        finaltime.saved = numberwithnocolon + " seconds"
    }
    else if(numberwithnocolon.toString().length == 3){
        let secondsInMinuteForm = Number((numberwithnocolon.toString()[1] + numberwithnocolon.toString()[2])/60);
        finaltime.saved = numberwithnocolon.toString()[0]  + roundToTwoDecimals(secondsInMinuteForm) + " minutes";
    }
    else if(numberwithnocolon.toString().length == 4){    
        let secondsInMinuteForm = Number((numberwithnocolon.toString()[2] + numberwithnocolon.toString()[3])/60);
        finaltime.saved = numberwithnocolon.toString()[0] + numberwithnocolon.toString()[1] + roundToTwoDecimals(secondsInMinuteForm) + " minutes";
    }
    else if(numberwithnocolon.toString().length == 5){
        let minutesInHourForm = Number((numberwithnocolon.toString()[1] + numberwithnocolon.toString()[2])/60);
        finaltime.saved = numberwithnocolon.toString()[0]  + roundToTwoDecimals(minutesInHourForm) + " hours";
    }
    else if(numberwithnocolon.toString().length == 6){
        let minutesInHourForm = Number((numberwithnocolon.toString()[2] + numberwithnocolon.toString()[3])/60);
        finaltime.saved = numberwithnocolon.toString()[0] + numberwithnocolon.toString()[1] + roundToTwoDecimals(minutesInHourForm) + " hours";
    }
};

function savee(){
    if(document.getElementById("title").innerHTML=="Productivity Stopwatch"){
        document.getElementById("saveorview").href="#tabletitle"
        
    }
    else{
        document.getElementById("saveorview").href="#tabletitlepomodoro"
        

    };
    if(finaltime.saved == undefined){
    }
    else{
    turntimeintohumanlanguage();
    document.getElementById("saveorview").innerHTML = "VIEW";
    let table = document.getElementById('stopwatchlogtable').insertRow(2);
    let date = table.insertCell(0);
    let day = table.insertCell(1);
    let project = table.insertCell(2);
    let time = table.insertCell(3);
    date.innerHTML= datee;
    day.innerHTML= dayy;
    project.innerHTML = 0;
    time.innerHTML = finaltime.saved;
    reset();

    };
};
