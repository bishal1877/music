alert('gaana bajana h kya');
let si=2;
let ae=new Audio('song/2.mp3');
let bar=document.getElementById('fg');
let mp=document.getElementById('mplay');
let prog=document.getElementById('myprog');
let gf=document.getElementById('gf');
mp.addEventListener('click' ,()=>{
    if(ae.paused||ae.currentTime==0)
    {
        const chil=document.getElementById(si);
        document.getElementById('fg').innerText=chil.parentElement.textContent;
        ae.play();
        bar.style.opacity=1;
        mp.classList.remove('fa-play-circle');
        mp.classList.add('fa-pause-circle');
    }
    else
    {
        ae.pause();
        Array.from(document.getElementsByClassName('splay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        });
        bar.style.opacity=0;
        mp.classList.remove('fa-pause-circle');
        mp.classList.add('fa-play-circle');
    }
});
ae.addEventListener('timeupdate',()=>{
    prog.value=parseInt((ae.currentTime/ae.duration)*10000);
})
prog.addEventListener('change',()=>{
    ae.currentTime=prog.value*ae.duration/10000;
})
const makeplays= ()=>{
    Array.from(document.getElementsByClassName('splay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}
Array.from(document.getElementsByClassName('splay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeplays();
     si=(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
ae.pause();
ae.src = `song/${si}.mp3`;
ae.currentTime=0;
gf.style.opacity=1;
const chil=document.getElementById(si);
document.getElementById('fg').innerText=chil.parentElement.textContent;
ae.play();
bar.style.opacity=1;
mp.classList.remove('fa-play-circle');
mp.classList.add('fa-pause-circle');
    })
});
document.getElementById('back').addEventListener('click',()=>{
    if(si==0)
        si=3;
    else
    si=si-1;
    ae.pause();
    const chil=document.getElementById(si);
    document.getElementById('fg').innerText=chil.parentElement.textContent;
    ae.src = `song/${si}.mp3`;
    ae.currentTime=0;
    ae.play();
    bar.style.opacity=1;
    mp.classList.remove('fa-play-circle');
    mp.classList.add('fa-pause-circle');
});

document.getElementById('forw').addEventListener('click',()=>{
    if(si==3)
        si=0;
    else
    si=si+1;
    ae.pause();
    ae.src = `song/${si}.mp3`;
    const chil=document.getElementById(si);
    document.getElementById('fg').innerText=chil.parentElement.textContent;
    ae.currentTime=0;
    ae.play();
    bar.style.opacity=1;
    mp.classList.remove('fa-play-circle');
    mp.classList.add('fa-pause-circle');
});
