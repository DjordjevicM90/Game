let rock=document.querySelector("#rock");
let shooter=document.querySelector("#shooter");
let bullet=document.querySelector("#bullet");
let score=document.querySelector("#score");
let time=document.querySelector("#time");
let btn_bullet=document.querySelector("#btn-bullet");

let showScore=0;
let seconds=60;
time.innerHTML="Vase preostalo time je: "+ seconds; 

let shooterLeft=20;
let shooterTop=400;

let rockLeft=20;
let rockTop=10;

let bulletLeft=40;
let bulletTop=370;

rock.style.left=rockLeft+"px";
rock.style.top=rockTop+"px";

shooter.style.left=shooterLeft+"px";
shooter.style.Top=shooterTop+"px";

bullet.style.left=bulletLeft+"px";
bullet.style.top=bulletTop+"px";

let intervalFall=setInterval(falling, 125);
let intervaltime=setInterval(tiktok, 1000);
let intervalbullet=setInterval(triger,100);
clearInterval(intervalbullet);

function tiktok(){
    seconds-=1;
    if(seconds==0){
        document.write("GAME OVER!!!<br> Osvojili ste: "+showScore+" showScore");
    }
    time.innerHTML="Vase preostalo time je: "+seconds;
    
}

function pause(){
    btn_bullet.setAttribute("disabled", "disabled");
    clearInterval(intervalFall);
    clearInterval(intervaltime);
    clearInterval(intervalbullet);
}

function start(){
    clearInterval(intervalFall);
    clearInterval(intervaltime);
    clearInterval(intervalbullet);
    intervalFall=setInterval(falling, 125);
    intervaltime=setInterval(tiktok, 1000);
    if(bulletTop<370){
        intervalbullet=setInterval(triger,100);
    }
    btn_bullet.removeAttribute("disabled");
    
}

function move(){
    if(event.keyCode!=37 && event.keyCode!=39){
        return false;
    }
    if(event.keyCode==37){
        shooterLeft-=10;
        bulletLeft-=10;

        bullet.style.left=bulletLeft+"px";
        shooter.style.left=shooterLeft+"px";
    }
    if(event.keyCode==39){
        shooterLeft+=10;
        bulletLeft+=10;
        
        bullet.style.left=bulletLeft+"px";
        shooter.style.left=shooterLeft+"px";
    }
    //Position bullet ONCLICK
    if(bulletTop<370 && event.keyCode==39){
        bulletLeft-=10;
        bullet.style.left=bulletLeft+"px";
    }
    if(bulletTop<370 && event.keyCode==37){
        bulletLeft+=10;
        bullet.style.left=bulletLeft+"px";
    }
}

function triger(){
    bullet.setAttribute("disabled", "disabled");
    
    bulletTop-=20;
    bullet.style.top=bulletTop+"px";

    clearInterval(intervalbullet);
    intervalbullet=setInterval(triger,100);       
}

function falling(){
    rockTop+=20;
    if(rockTop>480){
        rockTop=10;
        rockLeft=Math.floor(Math.random() * 500);
        showScore-=1;
        score.innerHTML="Score: "+showScore;
    }
    if(bulletTop<=10){
        bulletTop=370;
        bulletLeft=shooterLeft+20;
        btn_bullet.removeAttribute("disabled");
        clearInterval(intervalbullet);
    }
    if(shooterLeft>rockLeft-40 && shooterLeft<rockLeft+40 && shooterTop<rockTop-8){
        rockTop=10;
        rockLeft=Math.floor(Math.random() * 500);
        showScore+=1;
        score.innerHTML="Score: "+showScore;
    }
    if(bulletLeft>rockLeft-30 && bulletLeft<rockLeft+60 && bulletTop<rockTop-8){
        rockTop=10;
        rockLeft=Math.floor(Math.random() * 500);
        
        bulletTop=370;
        bulletLeft=shooterLeft+20;
        btn_bullet.removeAttribute("disabled");
        showScore+=1;
        score.innerHTML="Score: "+showScore;
        clearInterval(intervalbullet);
    }

    rock.style.top=rockTop+"px";
    rock.style.left=rockLeft+"px";  
    bullet.style.top=bulletTop+"px";
    bullet.style.left=bulletLeft+"px";
}


