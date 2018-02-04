Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

var interval;

function buttonCode()
{
        var addhour = new Date().addHours(1);
        alert("Hour started" + " " + addhour);
        interval = setInterval(function(){
            document.getElementById('xyz').play(); 
            }, 900000);
}


function buttonNext()
{
    clearInterval(interval);
    // document.getElementById('xyz').pause();
    alert("Stopped");
    interval = setInterval(function(){
        document.getElementById('xyz').play(); 
        }, 900000);
}

function buttonStopAll()
{
    clearInterval(interval)
    document.getElementById('xyz').pause();
    alert("Stopped");
}
