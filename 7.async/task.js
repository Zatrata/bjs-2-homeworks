class AlarmClock {
    constructor (){
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, callback, id){
        if (!id){
            throw new Error('error text');
        }
        if (this.alarmCollection.some(alarm => alarm.id === id)){
            console.error('Будильник уже существует');
            return;
        }
        this. alarmCollection.push({id, time, callback});
    }
    removeClock (id){
        const lenghtAlarmCollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
        return lenghtAlarmCollection !== this.alarmCollection;
    }
    getCurrentFormattedTime (){
        const date = new Date();
        const hh = date.getHours().toString();
        const mm = date.getMinutes().toString();
        return '${hh}:${mm}';
    }
    start (){
        const checkClock = alarm => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        };
        if (!this.timerId){
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock)
            });
        }
    }
    stop (){
        if (this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms (){
        this.alarmCollection.forEach(alarm => {
            console.log(`id:${alarm.id}, time:${alarm.time}`);
        });
    }
    clearAlarms (){
        this.stop();
        this.alarmCollection = [];
    }
}
function testCase(){
    const clock = new AlarmClock;
    clock.addClock('01:00', () => console.log('первый'), 1);
    clock.addClock('01:01', () => {console.log('второй'), removeClock()}, 2);
    clock.addClock('01:02', () => console.log('третий'), 3);
    clock.printAlarms();
}
testCase();