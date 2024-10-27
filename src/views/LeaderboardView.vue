<script setup lang="ts">
import LeaderboardTable from '../components/LeaderboardTable.vue';
import { RoutePaths } from '../plugins/router';
import { useLeaderboard } from '../composables/useLeaderboard';
const { totalCorrectAnswers } = useLeaderboard();
</script>

<template>
    <div class="d-flex fill-height align-center justify-center flex-column">
        <h1>{{ $t('leaderboardView.title') }}</h1>
        <h2>{{ $t('leaderboardView.totalCorrectAnswers') }}{{ totalCorrectAnswers }}</h2>
        <leaderboard-table class="leaderboard-table" />
        <v-btn :to="RoutePaths.Game">{{ $t('leaderboardView.playAgainButton') }}</v-btn>
    </div>
</template>

<style scoped>
.leaderboard-table {
    padding: 2vh 0vw 2vh 0vw;
}
</style>
