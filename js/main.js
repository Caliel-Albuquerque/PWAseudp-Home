//TIME HOME 
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeString = hours + ":" + minutes;
    document.getElementById("clockContent").innerHTML = timeString;
}

// setInterval(updateTime, 1000);

//DATE HOME

function updateDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    var dateString = day + "/" + month + "/" + year;
    document.getElementById("dateContent").innerHTML = dateString;
}

window.onload = function () {
    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
    setInterval(updateDate, 86400000); // atualiza a data a cada 24 horas
};