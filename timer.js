export default class Timer {
    constructor(object){
        console.log(object)
        object.innerHTML=Timer.getHTML();
    }
    static getHTML(){
        return `
        <span class="timer_minutes">00</span>:<span class="timer_seconds">00</span> 
        `
    }
}