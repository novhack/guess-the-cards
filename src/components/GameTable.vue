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

let lastGuessedRanking = "";

async function takeGuess(guessedRanking: string) {
    lastGuessedRanking = guessedRanking;
    pauseCountdown();
    wasGuessCorrect.value = bestRanking.value === guessedRanking;
    showGuessOverlay.value = true;
}

function overlayDisplayed() {
    evaluateRound(lastGuessedRanking);
    setupNewRound();
}

function overlayHidden() {
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
            @overlay-displayed="overlayDisplayed"
            @overlay-hidden="overlayHidden"
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
