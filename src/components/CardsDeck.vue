<script setup lang="ts">
import PlayingCard from './PlayingCard.vue';
import { useHand } from '../composables/useHand';
const { hand } = useHand();
</script>

<template>
    <div class="d-flex flex-row justify-center">
        <playing-card class="playing-card" v-for="card of hand" :key="card" :definition="card" />
    </div>
</template>

<style scoped>
.playing-card {
    margin: 0vh 0.5vw 0vh 0.5vw;
}
</style>
