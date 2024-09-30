let gameSeq=[];
let userseq=[];
let btns=["one","two","three","four"];
let started=false;
let level=0;

let h4=document.querySelector("h4");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelUp()
{
    userseq=[];
    level++;
    h4.innerText=`Level: ${level}`;
    let ranidx=Math.floor(Math.random()*3);
    let randcolor=btns[ranidx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    let randbtn=document.querySelector(`.${randcolor}`);
    btnFlash(randbtn);
}
function checkAns(idx)
{
    //console.log("cue level",level);
    
    if(userseq[idx]===gameSeq[idx])
    {
        if(userseq.length==gameSeq.length)
        {
           setTimeout( levelUp,1000);
        }
        
    }
    else{
        h4.innerHTML=`Game over: Your score was ${level} <br>Press any key to start`;
       let body=document.querySelector("body");
       body.style.backgroundColor="red";
       setTimeout(function(){
        body.style.backgroundColor="white";
       },150)
        reset();
    }
}
function btnPress()
{
    console.log("button is pressed");
    let btn=this;
    //console.log(this);
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    
    started=false;
    userseq=[];
    gameSeq=[];
    level=0;
}