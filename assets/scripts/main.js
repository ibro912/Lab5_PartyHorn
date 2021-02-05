// main.js0
function changeVolume(newVolumeNumber)
{
    let sound = document.getElementById('volume-number');
    let slider = document.getElementById('volume-slider');
    sound.value = newVolumeNumber;
    slider.value = newVolumeNumber;

}

function playSound()
{
    let sound = document.getElementById('volume-number');
    let horn = document.getElementById('horn-sound');
    horn.volume = sound;
    horn.play();
}


document.getElementById('volume-number').value = changeVolume(document.getElementById('volume-number').value);
document.getElementById('honk-btn').onclick = playSound(); 
// TODO
