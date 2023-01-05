(function createApp(){    
    function getThatDay (){
    const today = document.querySelector('.today');
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    if (month<10){
        month = `0${month}`
    }
    let day = d.getDate();
    if (day<10){
        day = `0${day}`
    }
    today.innerHTML = `${day}.${month}.${year}` ;
    }
    setInterval(getThatDay,0);   
    (function createTimer() {
        const timer = document.querySelector('.timer');
        let minutes = 5;
        if (minutes<10){
            minutes =`0${minutes}`
        }
        let seconds = 0;
        if (seconds<10){
            seconds =`0${seconds}`
        }
        timer.innerHTML = `${minutes}:${seconds}`;
    })()
})()