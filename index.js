// CLOCK HANDS ROTATION
setInterval(() => {
    d=new Date()
    hTime=d.getHours(); //get hour
    mTime=d.getMinutes(); //get minute
    sTime=d.getSeconds(); // get seconds
    // FORMULAS FOR ROTATION OF HANDS
    hRotation=30*hTime+mTime/2; 
    mRotation=6*mTime;
    sRotation=6*sTime;
    // ROTATING THE HANDS
    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;
}, 1000);
