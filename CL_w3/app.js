let xpos = 80;
let rot = 0;

let buttonLeft;
let buttonRot;
let buttonRight;

let colourButton;
let bgColours = ["#f3ed12", "#51e132", "#ffde12"];
let choice = 0;


buttonLeft = document.getElementById('buttonLeft');
buttonLeft.addEventListener("click", function() {
    xpos = xpos - 20;
    document.getElementById('greyStar').style.left = xpos+'px';
    console.log(xpos);

});



buttonRot = document.getElementById('buttonRot');
buttonRot.addEventListener('click',function(){
    rot = rot + 0.1;
    document.getElementById('whiteStar').style.rotate = rot+'turn';
    console.log(rot);
   
})

buttonRight = document.getElementById('buttonRight');
buttonRight.addEventListener("click", function() {
    xpos = xpos + 20;
    document.getElementById('greyStar').style.left = xpos+'px';
    console.log(xpos);

});

