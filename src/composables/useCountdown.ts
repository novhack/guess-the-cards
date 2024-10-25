import { ref, Ref } from 'vue';

const STARTING_VALUE = 100;
const ONE_SECOND = 1000;

const countdown: Ref<number> = ref(STARTING_VALUE);
let interval: number;

export function useCountdown() {
    function decrementCountdown() {
        if (countdown.value !== 0) {
            countdown.value -= 1;
        }
    }

    function startCountdown() {
        interval = setInterval(decrementCountdown, ONE_SECOND);
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
        resetCountdown,
        addSeconds,
        removeSeconds,
    }
}
