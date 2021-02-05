// main.js0
document.getElementById('honk-btn').addEventListener("submit", playSound);
document.getElementById('volume-number').addEventListener("input", changeVolume(input));


function changeVolume(evt, newVolumeNumber)
{
    evt.preventDefault();
    let sound = document.getElementById('volume-number');
    let slider = document.getElementById('volume-slider');
    sound.value = newVolumeNumber;
    slider.value = newVolumeNumber;

}

function playSound(evt)
{ 
    evt.preventDefault();
    let sound = document.getElementById('volume-number').value;
    let horn = document.getElementById('horn-sound');
    horn.volume = sound / 100.0;
    horn.play();
}


document.getElementById('volume-number').input = changeVolume(document.getElementById('volume-number').value);
