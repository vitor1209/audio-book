const btn_play_pause = document.getElementById('play-pause');
const audio_cap = document.getElementById('audio-capitulos');

const numeroCapitulos = 10;

function tocar_audio() {
    audio_cap.play();
}

btn_play_pause.onclick(tocar_audio)