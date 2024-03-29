// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');
const date = document.getElementById('date');
// console.log(clock);

setInterval(function(){
    const date_time = new Date();
    // console.log(date_time.toLocaleTimeString());
    clock.innerHTML = `${date_time.toLocaleTimeString()}`
    date.innerHTML = `${date_time.toDateString()}`
}, 1000);

/**
 * setInterval(function(){}, <interval>)
 * this is used to run a particular code written inside the function after an specified interval continously.
 * the interval is mentioned in 'ms'
 */