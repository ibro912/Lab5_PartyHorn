// main.js0
document.getElementById('honk-btn').addEventListener("submit", playSound(event));
document.getElementById('volume-number').addEventListener("input", changeVolume(event, document.getElementById('volume-number').value));


function changeVolume(event, newVolumeNumber)
{
    event.preventDefault();
    let sound = document.getElementById('volume-number');
    let slider = document.getElementById('volume-slider');
    sound.value = newVolumeNumber;
    slider.value = newVolumeNumber;

}

function playSound(event)
{ 
    event.preventDefault();
    let sound = document.getElementById('volume-number').value;
    let horn = document.getElementById('horn-sound');
    horn.volume = sound / 100.0;
    horn.play();
}


// document.getElementById('volume-number').input = changeVolume(document.getElementById('volume-number').value);
