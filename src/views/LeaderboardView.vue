<script setup lang="ts">
import LeaderboardTable from '../components/LeaderboardTable.vue';
import { RoutePaths } from '../plugins/router';
</script>

<template>
    <div class="d-flex fill-height align-center justify-center flex-column">
        <h2>{{ $t('leaderboardView.title') }}</h2>
        <leaderboard-table class="leaderboard-table" />
        <v-btn :to="RoutePaths.Game">{{ $t('leaderboardView.playAgainButton') }}</v-btn>
    </div>
</template>

<style scoped>
.leaderboard-table {
    padding: 2vh 0vw 2vh 0vw;
}
</style>