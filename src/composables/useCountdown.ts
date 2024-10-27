import { ref, Ref } from 'vue';

const STARTING_VALUE = 100;
const ONE_SECOND = 1000;

const countdown: Ref<number> = ref(STARTING_VALUE);
let paused = false;
let interval: number;

export function useCountdown() {
    function decrementCountdown() {
        if (countdown.value !== 0 && !paused) {
            countdown.value -= 1;
        }
    }

    function startCountdown() {
        interval = setInterval(decrementCountdown, ONE_SECOND);
    }

    function pauseCountdown() {
        paused = true;
    }

    function resumeCountdown() {
        paused = false;
    }

    function resetCountdown() {
        clearInterval(interval);
        countdown.value = STARTING_VALUE;
        startCountdown();
    }

    function addSeconds(seconds: number) {
        countdown.value += seconds;
    }

    function removeSeconds(seconds: number) {
        const newValue = countdown.value - seconds;
        countdown.value = newValue < 0 ? 0 : newValue;
    }

    return {
        countdown,
        startCountdown,
        pauseCountdown,
        resumeCountdown,
        resetCountdown,
        addSeconds,
        removeSeconds,
    }
}
