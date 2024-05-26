import state from './state.js'
import * as el from './elements.js'
import {reset} from './actions.js'
import * as sounds from './sounds.js'

export function countDown() {
    clearTimeout(state.countDownId)

    if (!state.isRunning) {
        return
    }
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }
    if (minutes < 0) {
        reset()
        sounds.kichenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countDownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function addMinutes() {
    let minutes = Number(el.minutes.textContent);
    minutes = isNaN(minutes) ? 0 : minutes;
    minutes += 5;
    minutes = Math.min(60, minutes); // Limita os minutos a 60
    updateDisplay(minutes, Number(el.seconds.textContent));
}

export function subtractMinutes() {
    let minutes = Number(el.minutes.textContent)
    minutes = isNaN(minutes) ? 0 : minutes
    minutes = Math.max(0, minutes - 5) // Evita minutos negativos
    updateDisplay(minutes, Number(el.seconds.textContent))
}

// Adiciona os event listeners aos botões
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button[data-action='more']").addEventListener("click", addMinutes)
    document.querySelector("button[data-action='minus']").addEventListener("click", subtractMinutes)
})
