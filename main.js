const btn_play_pause = document.getElementById('play-pause');
const audio_cap = document.getElementById('audio-capitulo');
const btn_avancar = document.getElementById('proximo');
const lbl_cap = document.getElementById('capitulo')
const btn_voltar = document.getElementById('anterior')

const numeroCapitulos = 10;
let ta_tocando = 0;
let cap_atual = 1;

function tocar_audio() {
    ta_tocando = 1;
    btn_play_pause.classList.remove("bi-play-circle-fill");
    btn_play_pause.classList.add("bi-pause-circle-fill");
    audio_cap.src = "books/dom-casmurro/" + cap_atual + ".mp3";
    if (audio_cap.readyState >= 2) {
        audio_cap.play();
    } else {
        // Adiciona um evento de carregamento para aguardar o áudio carregar completamente
        audio_cap.addEventListener('loadeddata', function() {
            audio_cap.play();
        });
}
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
    lbl_cap.innerText = 'Capítulo' + '  ' + cap_atual
}

function voltar_cap(){
    if (cap_atual === 1) {
        cap_atual = 10;
    } else {
        cap_atual = cap_atual - 1;
    }
    
    audio_cap.src = "books/dom-casmurro/" + cap_atual + ".mp3";
    tocar_audio();
    btn_play_pause.classList.remove("bi-play-circle-fill");
    btn_play_pause.classList.add("bi-pause-circle-fill");
    lbl_cap.innerText = 'Capítulo' + '  ' + cap_atual
}

btn_voltar.addEventListener('click', voltar_cap);
btn_avancar.addEventListener('click', avancar_cap);
btn_play_pause.addEventListener('click', tocar_parar);
audio_cap.addEventListener("ended", avancar_cap);