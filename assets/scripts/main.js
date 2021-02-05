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
    let sound = document.getElementById('volume-number').value;
    let horn = document.getElementById('horn-sound');
    horn.volume = sound / 100.0;
    horn.play();
}


document.getElementById('volume-number').onchange = changeVolume(document.getElementById('volume-number').value);
document.getElementById('honk-btn').onclick = playSound(); 
