export const buttonPressAudio = new Audio('./assets/button-press.wav')
export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')

export const sounds = {
    naturals: new Audio('./assets/floresta.wav'),
    rain: new Audio('./assets/rain.wav'),
    coffee: new Audio('./assets/coffee.wav'),
    campfire: new Audio('./assets/fire.wav')
};


let currentAudio = null; // Variável para armazenar o áudio atualmente reproduzido

// Função para reproduzir ou pausar o áudio correspondente ao botão clicado
function playOrPauseAudio(event) {
    // Obtém o valor do atributo data-action do botão clicado
    const action = event.target.dataset.action;
    
    // Verifica se o valor do atributo data-action é válido e se há um áudio correspondente
    if (action && sounds[action]) {
        // Se o áudio correspondente ao botão clicado for o mesmo que está sendo reproduzido atualmente
        if (currentAudio === sounds[action]) {
            // Pausa o áudio
            currentAudio.pause();
            currentAudio = null;
        } else {
            // Pausa todos os áudios antes de reproduzir ou pausar o áudio correspondente ao botão clicado
            Object.values(sounds).forEach(audio => {
                if (audio !== sounds[action]) {
                    audio.pause();
                }
            });
            // Reproduz o áudio correspondente ao botão clicado
            sounds[action].play();
            currentAudio = sounds[action];
        }
    }
}

// Adiciona um evento de clique para cada botão
document.querySelectorAll('.control-music button').forEach(button => {
    button.addEventListener('click', playOrPauseAudio);
});
