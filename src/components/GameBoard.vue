<script setup lang="ts">
import ACard from './ACard.vue';
import { useCountdown } from '../composables/useCountdown';
import { useRankings } from '../composables/useRankings';
import { useHand } from '../composables/useHand';
import { useScore } from '../composables/useScore';
import { useLeaderboard } from '../composables/useLeaderboard';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RoutePaths } from '../plugins/router';
import GuessOverlay from './GuessOverlay.vue';

const { countdown, addSeconds, removeSeconds, startCountdown } = useCountdown();
const { hand, solution, bestRanking, dealHand, solveHand } = useHand();
const { rankings, prepareRankings } = useRankings();
const { score, increaseScore } = useScore();
const { storeAttempt } = useLeaderboard();
const router = useRouter();

const showGuessOverlay = ref(false);
const wasGuessCorrect = ref(false);

function takeGuess(guessedRanking: string) {
  if (bestRanking.value === guessedRanking) {
    addSeconds(10);
    increaseScore();
  } else {
    removeSeconds(10);
  }

  // Show guess overlay
  wasGuessCorrect.value = bestRanking.value === guessedRanking;
  showGuessOverlay.value = true;

  setupNewRound();
}

function restartGame() {
  startCountdown();
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
  <div>
    <guess-overlay v-model="showGuessOverlay" :was-guess-correct="wasGuessCorrect"/>
    <div class="d-flex flex-row justify-center pa-6">
      <a-card v-for="card of hand" :key="card" :definition="card"></a-card>
    </div>
    <div class="d-flex flex-column justify-center">
      <v-btn v-for="ranking of rankings" :key="ranking" @click="takeGuess(ranking)"> {{ ranking }}</v-btn>
    </div>
  </div>
</template>
