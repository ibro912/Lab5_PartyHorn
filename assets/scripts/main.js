// main.js


document.getElementById('honk-btn').addEventListener("click", playSound);

document.getElementById('volume-number').addEventListener("input", changeVolume);

document.getElementById('volume-slider').addEventListener("change", changeSlider);


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

    if(volume <= 0)
    {
        document.getElementById('honk-btn').disabled = true;
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(volume > 0 && volume < 34)
    {
        document.getElementById('honk-btn').disabled = false;
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(volume > 33 && volume < 67)
    {
        document.getElementById('honk-btn').disabled = false;
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
    }
    else
    {
        document.getElementById('honk-btn').disabled = false;
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
    }
}

function playSound()
{ 
    event.preventDefault();
    let horn = document.getElementById("horn-sound");
    horn.play();
}



// document.getElementById('volume-number').input = changeVolume(document.getElementById('volume-number').value);
