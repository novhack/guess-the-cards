<script setup lang="ts">
import { useLeaderboard } from '../composables/useLeaderboard';

const { leaderboard } = useLeaderboard();
</script>

<template>
    <div>Leaderboard View</div>
    <div v-for="previousAttempt of leaderboard.previousAttempts" :key="previousAttempt.name"> {{ previousAttempt.name }} - {{ previousAttempt.score }}</div>
</template>
