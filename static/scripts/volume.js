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
    console.log(dist)
});