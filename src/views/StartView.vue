<script setup lang="ts">
</script>

<template>
    <div class="d-flex fill-height align-center justify-center flex-column">
        <h2 class="game-title">{{ $t('startView.gameTitle') }}</h2>
        <v-btn to="/game"> {{ $t('startView.playButton') }}</v-btn>
    </div>
</template>

<style scoped>
.game-title {
    padding-bottom: 1vh;
}
</style>
