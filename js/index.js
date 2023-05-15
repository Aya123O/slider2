var listimg=Array.from(document.querySelectorAll('.item img'));
var lightbackgroundcontainer=document.getElementById('lightbackgroundcontainer');
var background=document.getElementById('background');
var current_pos;
var close=document.getElementById('btn');
for(var i=0;i<listimg.length;i++){
    listimg[i].addEventListener('click',function(x){
        lightbackgroundcontainer.style.display='flex';
        var myimg=x.target.getAttribute('src');
        current_pos=listimg.indexOf(x.target);
        console.log(current_pos);
        background.style.backgroundImage=`url(${myimg})`


    })
}

function nextslide(){
    current_pos++;
    if(current_pos==listimg.length){
        current_pos=0;
    }
    var imgsrc=listimg[current_pos].getAttribute('src')
    background.style.backgroundImage=`url(${imgsrc})`
    console.log(current_pos);
}
function prevslide(){
    current_pos--;
    if(current_pos<0){
        current_pos=listimg.length -1;
    }
    var imgsrc=listimg[current_pos].getAttribute('src')
    background.style.backgroundImage=`url(${imgsrc})`
    console.log(current_pos);
}
function closes(){
    lightbackgroundcontainer.style.display='none'

}
close.nextElementSibling.addEventListener('click',nextslide);
close.previousElementSibling.addEventListener('click',prevslide);
close.addEventListener('click',closes);