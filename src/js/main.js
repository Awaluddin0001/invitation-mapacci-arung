const audio = document.querySelector('#audio');
const rek = document.querySelector('.undangan__rekNo');
const mute = document.querySelector('.icon')
const muteOff = document.querySelector('.icon__bunyi')
const muteOn = document.querySelector('.icon__non')
const hide = document.querySelector('.popup');
let count = 1;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        muteOff.classList.remove('remove');
        muteOn.classList.add('remove');
    } else {
        count = 0;
        audio.pause();
        muteOff.classList.add('remove');
        muteOn.classList.remove('remove');
    }
}

function copyRek() {
    navigator.clipboard.writeText(rek.innerHTML)
}

function hideIt() {
    if (hide.classList[1] == undefined) {
        hide.classList.add('popup__hide');
        audio.play();
    } else {
        hide.classList.remove('popup__hide');
    }
}