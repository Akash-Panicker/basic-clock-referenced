setInterval(clock,1000);
function clock(){
    const currentdate =  new Date();
    const secondratio = currentdate.getSeconds()/60;
    const minuteratio = (secondratio+currentdate.getMinutes())/60;
    const hourratio = (minuteratio+currentdate.getHours())/12;
    setrotation(secondhand,secondratio);
    setrotation(minutehand,minuteratio);
    setrotation(hourhand,hourratio);

}

const hourhand = document.querySelector('[data-hour-hand]');
const minutehand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]');
function setrotation(element,rotationratio){
    element.style.setProperty('--rotation',rotationratio * 360);

}
clock();