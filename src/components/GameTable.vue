<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardsDeck from './CardsDeck.vue';
import GuessButtons from './GuessButtons.vue';
import GuessOverlay from './GuessOverlay.vue';
import { useCountdown } from '../composables/useCountdown';
import { useHand } from '../composables/useHand';
import { useGame } from '../composables/useGame';

const { pauseCountdown, resumeCountdown } = useCountdown();
const { bestRanking } = useHand();

const { setupNewRound, restartGame, evaluateRound } = useGame();

// Overlay properties
const showGuessOverlay = ref(false);
const wasGuessCorrect = ref(false);
const resolveAfterGuessOverlayCloses = ref(() => {});

async function takeGuess(guessedRanking: string) {
    pauseCountdown();

    // Show guess overlay and wait for it to close
    await new Promise<void>(resolve => {
        wasGuessCorrect.value = bestRanking.value === guessedRanking;
        showGuessOverlay.value = true;
        resolveAfterGuessOverlayCloses.value = resolve;
    });

    evaluateRound(guessedRanking);

    setupNewRound();
    // Only resume countdown after the new round is setup
    resumeCountdown();
}

onMounted(() => restartGame());
</script>

<template>
    <div class="d-flex flex-column">
        <guess-overlay
            v-model="showGuessOverlay"
            :was-guess-correct="wasGuessCorrect"
            :closeResolve="resolveAfterGuessOverlayCloses"
        />
        <cards-deck class="cards-deck" />
        <guess-buttons @guessed="(ranking: string) => { takeGuess(ranking) }" />
    </div>
</template>

<style scoped>
.cards-deck {
    padding: 0vh 0vw 1vh 0vw;
}
</style>
