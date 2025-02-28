let count = 0;
let intervalId = setInterval(() => {
    console.log('Sakira repeating', ++count);
    if (count === 5) {
        clearInterval(intervalId);  
        console.log('Interval stopped');
    }
}, 1000);
