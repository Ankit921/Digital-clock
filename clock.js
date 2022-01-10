function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const mins=now.getMinutes();
    const hour=now.getHours();

    var d=new Date();
    document.getElementById('digital').innerHTML=d.toLocaleTimeString();
}

setInterval(setDate,1000);
setDate();
