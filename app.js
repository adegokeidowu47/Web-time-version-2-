var displayTime = document.getElementById("time");

function showTime(){
    var date = new Date();
    var hour = date.getHours();
        mins = date.getMinutes();
        seconds = date.getSeconds();
        session = "AM";

    if(hour == 0){
        hour = 12;
    }    
    if(hour > 12){
        hour = hour-12;
        session="PM";
    }

    hour = (hour<10)?"0"+hour:hour;
    mins = (mins<10)?"0"+mins:mins;
    seconds = (seconds<10)?"0"+seconds:seconds;

    var Time = hour+":"+mins+":"+seconds+":"+session;
    displayTime.innerHTML=Time;
    
    setInterval(showTime,1000);
}

showTime();
console.log(time);
