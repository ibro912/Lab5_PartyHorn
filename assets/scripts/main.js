// main.js


document.getElementById('honk-btn').addEventListener("click", playSound);

document.getElementById('volume-number').addEventListener("input", changeVolume);

document.getElementById('volume-slider').addEventListener("change", changeSlider);

document.getElementById('audio-selection').addEventListener("change", changeAudio);

function changeVolume()
{
    event.preventDefault();
    let sound = document.getElementById('volume-number');
    let slider = document.getElementById('volume-slider');
    document.getElementById("horn-sound").volume = sound.value/100.0;
    slider.value = sound.value;
    changeVolIcon();

}

function changeSlider()
{
    let slider = document.getElementById('volume-slider');
    let sound = document.getElementById('volume-number');
    sound.value = slider.value;
    document.getElementById("horn-sound").volume = sound.value/100.0;
    changeVolIcon();
}

function changeVolIcon()
{
    let volume = document.getElementById('volume-number');
    let button = document.getElementById('honk-btn');
    let volIcon = document.getElementById('volume-image');

    if(volume.value <= 0)
    {
        button.disabled = true;
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(volume.value > 0 && volume.value < 34)
    {
        button.disabled = false;
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(volume.value > 33 && volume.value < 67)
    {
        button.disabled = false;
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else
    {
        button.disabled = false;
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function changeAudio()
{
    let hornType = document.getElementById('horn-sound');
    let soundImage = document.getElementById('sound-image');

    if(document.getElementById('radio-air-horn').checked)
    {
        hornType.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    }
    if(document.getElementById('radio-car-horn').checked)
    {
        hornType.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    }
    if(document.getElementById('radio-party-horn').checked)
    {
        hornType.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }


}

function playSound()
{ 
    event.preventDefault();
    let horn = document.getElementById("horn-sound");
    horn.play();
}



// document.getElementById('volume-number').input = changeVolume(document.getElementById('volume-number').value);
