var btn=document.querySelector("button")
var h1=document.querySelector("h1")
var dp = document.querySelector(".image")
var flag=0
var stop
btn.addEventListener("click",function(){
    
    if(flag == 0){

        h1.style.color="orangered"
        h1.innerHTML=`LOADING <i class="ri-loop-right-line"></i>`
        btn.style.backgroundColor="orangered"
        btn.innerHTML="WAITING.."
        stop=setTimeout(function(){
            h1.style.color="green"
            h1.innerHTML="😊FRIENDS😊"
            btn.style.backgroundColor="red"
            btn.innerHTML="UNFRIEND"
            dp.style.backgroundPosition="left"
        },3000)
        flag=1
    }else{
        h1.style.color="red"
        h1.innerHTML="STRANGER"
        btn.style.backgroundColor="royalblue"
        btn.innerHTML="ADD FRIEND"
        dp.style.backgroundPosition="right"
        clearTimeout(stop)
        flag=0
    }
})