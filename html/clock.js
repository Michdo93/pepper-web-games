window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    var timeDiv = document.getElementById('time');
    var refDate = new Date();
    var newDate = new Date()
    
    newDate.setFullYear(refDate.getFullYear()+12)
    newDate.setMonth(refDate.getMonth()+3)
    newDate.setHours(refDate.getHours()-11)
    newDate.setMinutes(refDate.getMinutes()+3)

    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    timeDiv.textContent = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}
