<script setup lang="ts">
import CardsDeck from './CardsDeck.vue';
import GuessButtons from './GuessButtons.vue';
import GuessOverlay from './GuessOverlay.vue';
import { useCountdown } from '../composables/useCountdown';
import { useRankings } from '../composables/useRankings';
import { useHand } from '../composables/useHand';
import { useScore } from '../composables/useScore';
import { useLeaderboard } from '../composables/useLeaderboard';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RoutePaths } from '../plugins/router';

const CORRECT_GUESS_INCREMENT = 5;
const INCORRECT_GUESS_DECREMENT = 10;

const { countdown, addSeconds, removeSeconds, resetCountdown } = useCountdown();
const { solution, bestRanking, dealHand, solveHand } = useHand();
const { prepareRankings } = useRankings();
const { score, increaseScore } = useScore();
const { storeAttempt } = useLeaderboard();
const router = useRouter();

const showGuessOverlay = ref(false);
const wasGuessCorrect = ref(false);

function takeGuess(guessedRanking: string) {
  if (bestRanking.value === guessedRanking) {
    addSeconds(CORRECT_GUESS_INCREMENT);
    increaseScore();
  } else {
    removeSeconds(INCORRECT_GUESS_DECREMENT);
  }

  // Show guess overlay
  wasGuessCorrect.value = bestRanking.value === guessedRanking;
  showGuessOverlay.value = true;

  setupNewRound();
}

function restartGame() {
  resetCountdown();
  setupNewRound();
}

function setupNewRound() {
  dealHand();
  solveHand();
  prepareRankings(solution, 3);
}

onMounted(() => restartGame());

watch(countdown, (newValue: number) => {
  if (newValue <= 0) {
    console.log("GAME OVER!");
    console.log("Your score was: ", score.value);
    storeAttempt(score.value);
    router.push(RoutePaths.Leaderboard);
  }
});
</script>

<template>
  <div class="d-flex flex-column">
    <guess-overlay v-model="showGuessOverlay" :was-guess-correct="wasGuessCorrect"/>
    <cards-deck class="cards-deck" />
    <guess-buttons @guessed="(ranking: string) => { takeGuess(ranking) }" />
  </div>
</template>

<style scoped>
.cards-deck {
    padding: 0vh 0vw 1vh 0vw;
}
</style>
