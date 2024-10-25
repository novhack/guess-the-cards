<script setup lang="ts">
import GameBoard from '../components/GameBoard.vue';
import CountdownLabel from '../components/CountdownLabel.vue';
</script>

<template>
    <div class="fill-height">
        <div class="d-flex justify-end">
            <countdown-label/>
        </div>
        <div class="d-flex flex-column fill-height aling-center justify-center">
            <game-board />
        </div>
    </div>
</template>
