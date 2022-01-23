function playMyAudio(){
    var audio=document.getElementById("myAudio");
    audio.play()
    document.getElementById("play").style.display="none";
    let vol=0.1

    window.addEventListener("mousemove", function(e) {    
        var sui = document.getElementById('sui').style
        var img_x=parseFloat(sui.left)
        var img_y=parseFloat(sui.top)
        var diff_x=img_x-e.x
        var diff_y=img_y-e.y
        var sq_x=Math.pow(diff_x,2)
        var sq_y=Math.pow(diff_y,2)
        var sum=sq_x+sq_y
        var dist= Math.sqrt(sum)
        
        if(dist<80){
            vol=1
        }else if(dist>80 && dist<100){
            vol=0.9
        }else if(dist>100 && dist<150){
            vol=0.8
        }else if(dist>150 && dist<200){
            vol=0.7
        }else if(dist>200 && dist<250){
            vol=0.6
        }else if(dist>250 && dist<300){
            vol=0.5
        }else if(dist>300 && dist<350){
            vol=0.4
        }else if(dist>350 && dist<400){
            vol=0.3
        }else if(dist>400 && dist<600){
            vol=0.2
        }else if(dist>700){
            vol=0.1
        }
    
        audio.volume=vol;
        document.getElementById("play").style.display="none";
    })

}
