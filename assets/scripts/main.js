// main.js0
var soundEvt
var btnEvt

document.getElementById('honk-btn').addEventListener("submit", playSound);
document.getElementById('volume-number').addEventListener("input", changeVolume);


function changeVolume()
{
    event.preventDefault();
    let sound = document.getElementById('volume-number');
    let slider = document.getElementById('volume-slider');
    let hornSound = document.getElementById("horn-sound").volume = sound.value/100;
    slider.value = sound.value;

}

function playSound()
{ 
    event.preventDefault();
    let horn = document.getElementById("horn-sound");
    horn.play();
}


// document.getElementById('volume-number').input = changeVolume(document.getElementById('volume-number').value);
