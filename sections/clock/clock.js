const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")
const date = document.getElementById("date")

// Get date object and save hours, minutes and seconds in separate values
var d = new Date()
var min = d.getMinutes();
var sec = d.getSeconds();
var h = d.getHours()
// Add date on clock
date.innerText = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`

// For every second, increment 6 degrees (360deg / 60sec = 6)
let sdeg = 6 * sec
// Set the initial rotate value to the current value
// 'translateX' centers the clock tongue
second.style.transform = `translateX(-50%) rotate(${sdeg}deg)`

// Seconds interval
// Every second, increment 6 degrees
setInterval(() => {
    second.style.transform = `translateX(-50%) rotate(${sdeg}deg)`

    sdeg += 6
}, 1000)

// For every minute, increment 6 degrees, plus 0.1 degrees for seconds
// (360deg / 60min = 6) (6deg / 60sec = 0.1)
mdeg = (6 * min) + (0.1 * sec)
minute.style.transform = `translateX(-50%) rotate(${mdeg}deg)`

// Minutes interval
// every 10 seconds increment by 1
// after 60 seconds, the minute clock tongue moves 6 deg
setInterval(() => {
    minute.style.transform = `translateX(-50%) rotate(${mdeg}deg)`

    mdeg += 1
}, 10000)

// For every hour, increment 30deg + 0.5 deg for each minute
// (360deg / 12hours = 30deg) (30deg / 60min = 0.5)
hdeg = (30 * h) + (0.5 * min)
hour.style.transform = `translateX(-50%) rotate(${hdeg}deg)`

// 3.600.000 miliseconds in an hour
// 30deg every 3.600.000 ms => 30/60 every 3.600.000/60 = 0.5deg every 60.000ms (1 min)
// every 60 seconds, the hour tongue moves 0.5deg
setInterval(() => {
    hour.style.transform = `translateX(-50%) rotate(${hdeg}deg)`
    hdeg += 0.5
}, 60000)
