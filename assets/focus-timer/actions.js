import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
    sounds.btnPressAudio.play()
}
export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.btnPressAudio.play()

    
}
export function set () {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    sounds.btnPressAudio.play()
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#controls-music button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Verifica se o botão clicado está ativo
            const isActive = button.classList.contains("active");
            // Desativa todos os botões
            buttons.forEach(btn => btn.classList.remove("active"));
            // Ativa apenas o botão clicado se ele não estiver ativo
            if (!isActive) {
                button.classList.add("active");
            }
        });
    });
});
