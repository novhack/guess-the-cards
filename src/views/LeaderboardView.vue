<script setup lang="ts">
import { useLeaderboard } from '../composables/useLeaderboard';

const { leaderboard } = useLeaderboard();
</script>

<template>
    <h2>{{ $t('leaderboardView.title') }}</h2>
    <div v-for="previousAttempt of leaderboard.previousAttempts" :key="previousAttempt.name">
        {{ $t('leaderboardView.attempt') }} {{ previousAttempt.name }} - {{ previousAttempt.score }} {{ $t('leaderboardView.answers') }}
    </div>
</template>
