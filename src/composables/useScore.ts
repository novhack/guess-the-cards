import { ref, Ref } from 'vue';

const score: Ref<number> = ref(0);

export function useScore() {

    function increaseScore() {
        score.value += 1;
    }

    function resetScore() {
        score.value = 0;
    }

    return {
        score,
        increaseScore,
        resetScore,
    }
}
