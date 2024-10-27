import { ref, Ref } from 'vue';

export function useScore() {
    const score: Ref<number> = ref(0);

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
