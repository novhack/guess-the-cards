<script setup lang="ts">
import { RoutePaths } from '../plugins/router';
</script>

<template>
    <div class="d-flex fill-height align-center justify-center flex-column">
        <h1 class="game-title">{{ $t('startView.gameTitle') }}</h1>
        <v-btn :to="RoutePaths.Game"> {{ $t('startView.playButton') }}</v-btn>
    </div>
</template>

<style scoped>
.game-title {
    padding-bottom: 1vh;
}
</style>
