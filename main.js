const btn_play_pause = document.getElementById('play-pause');
const audio_cap = document.getElementById('audio-capitulos');
const btn_avancar = document.getElementById('proximo');
const lbl_cap = document.getElementById('capitulo')

const numeroCapitulos = 10;
let ta_tocando = 0;
let cap_atual = 1;

function tocar_audio() {
    ta_tocando = 1;
    btn_play_pause.classList.remove("bi-play-circle-fill");
    btn_play_pause.classList.add("bi-pause-circle-fill");
    audio_cap.play();
}

function parar_audio() {
    ta_tocando = 0;
    btn_play_pause.classList.add("bi-play-circle-fill");
    btn_play_pause.classList.remove("bi-pause-circle-fill");
    audio_cap.pause();
}

function tocar_parar (){
    if (ta_tocando === 0) {
        tocar_audio();
    } else  {
        parar_audio();
    }
}

function avancar_cap (){
    if (cap_atual === 10) {
        cap_atual = 1;
    } else {
        cap_atual = cap_atual + 1;
    }
    
    audio_cap.src = "books/dom-casmurro/" + cap_atual + ".mp3";
    tocar_audio();
    btn_play_pause.classList.remove("bi-play-circle-fill");
    btn_play_pause.classList.add("bi-pause-circle-fill");
    lbl_cap.innerText = 'capitulo' + cap_atual
}


btn_avancar.addEventListener('click', avancar_cap);
btn_play_pause.addEventListener('click', tocar_parar);
audio_cap.addEventListener("ended", avancar_cap);