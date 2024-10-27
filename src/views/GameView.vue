<script setup lang="ts">
import GameTable from '../components/GameTable.vue';
import CountdownLabel from '../components/CountdownLabel.vue';
</script>

<template>
    <div class="d-flex fill-height flex-column">
        <countdown-label class="countdown-label justify-end"/>
        <game-table class="game-table fill-height justify-center"/>
    </div>
</template>

<style scoped>
.countdown-label {
    padding: 1vh 1vw 0vh 0vw;
}

.game-table {
    padding: 0vh 15vw 0vh 15vw;
}
</style>
