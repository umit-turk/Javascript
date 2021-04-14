var name = prompt("Adınız nedir?")
document.getElementById("myName").innerHTML = name


let today = { weekday : "long"}

function add(value){
    var doString = value.toString()
    var length = doString.length
        if(length === 1){
            return 0 + doString
        } else {
            return doString
        }
}



function showTime(){
    let time    = new Date()
    let hours   = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    document.getElementById("myClock").innerHTML = add(hours) + ":" + add(minutes) + ":" + add(seconds) + " " + new Intl.DateTimeFormat('tr-TR', today).format(time)
    
}
setInterval(showTime, 1000);
console.log(typeof(today))


