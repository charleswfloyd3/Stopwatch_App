function pomodoro(){
    if(document.getElementById("timertostopwatch").innerHTML == "Stopwatch"){
    document.getElementById("screen").innerHTML = "00 : 25 : 00";
    document.getElementById("title").innerHTML = "Pomodoro Technique";
    document.getElementById("timertostopwatch").innerHTML = "Pomodoro";
    document.getElementById("saveorview").innerHTML = "VIEW";

    clearInterval(time)
    finaltime.saved = undefined;
    hours = 0;
    minutes = 0;
    seconds = 0;

    }
    else if(document.getElementById("timertostopwatch").innerHTML == "Pomodoro"){
        document.getElementById("screen").innerHTML = "00 : 00 : 00"
    document.getElementById("timertostopwatch").innerHTML = "Stopwatch"
    document.getElementById("title").innerHTML = "Productivity Stopwatch"

    clearInterval(timee)

    secondss = 60;
    minutess = 24;
    };
};
let minutess = 24;
let secondss = 59;
let displayminutess = 0;
let displaysecondss = 0;
function pomodoromachine(){
    secondss--
    if (secondss == 0){
        minutess--;
        secondss = 60;
    }
    if(secondss >=10){
        displaysecondss = secondss;
    }
    else if (secondss <= 10){
        displaysecondss = "0" + secondss.toString()
    };
    if(minutess>= 10){
        displayminutess = minutess;
    }
    else if (minutess <= 10){
        displayminutess = "0" + minutess.toString()
    }
    document.getElementById("screen").innerHTML = "00 : " + displayminutess + " : " + displaysecondss
    
    if(minutess == "00" && secondss=="01"){
        clearInterval(timee)
        document.getElementById("screen").innerHTML = "00 : 25 : 00";
        document.getElementById("title").style.fontSize = "4vw"
        document.getElementById("title").innerHTML = "&nbsp&nbsp&nbspYOU COMPLETED 1 POMODORO!<br>Scores Add Up Below(HINT: click View)"
        minutess = 24;
        secondss = 59;
        let table = document.getElementById('stopwatchlogtable2').insertRow(2);
        let date = table.insertCell(0);
        let day = table.insertCell(1);
        let project = table.insertCell(2);
        let time = table.insertCell(3);
        date.innerHTML= datee;
        day.innerHTML= dayy;
        project.innerHTML = 0;
        time.innerHTML += 1;
        reset();
    }
    

};