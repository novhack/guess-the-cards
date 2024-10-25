<script setup lang="ts">
import ACard from './ACard.vue';
import { useCountdown } from '../composables/useCountdown';
import { useRankings } from '../composables/useRankings';
import { useHand } from '../composables/useHand';
import { useScore } from '../composables/useScore';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RoutePaths } from '../plugins/router';

const { countdown, addSeconds, removeSeconds, startCountdown } = useCountdown();
const { hand, solution, bestRanking, dealHand, solveHand } = useHand();
const { rankings, prepareRankings } = useRankings();
const { score, increaseScore } = useScore();
const router = useRouter();

function takeGuess(guessedRanking: string) {
  if (bestRanking.value === guessedRanking) {
    addSeconds(10);
    increaseScore();
  } else {
    removeSeconds(10);
  }
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
    router.push(RoutePaths.Leaderboard);
  }
});
</script>

<template>
  <div>
    <a-card v-for="card of hand" :key="card" :value="card"></a-card>
    <v-btn v-for="ranking of rankings" :key="ranking" @click="takeGuess(ranking)"> {{ ranking }}</v-btn>
  </div>
</template>
