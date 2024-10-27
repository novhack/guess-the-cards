<script setup lang="ts">
import { useRankings } from '../composables/useRankings';

const emit = defineEmits(["guessed"]);

const { rankings } = useRankings();
</script>

<template>
    <div class="d-flex flex-column">
        <v-btn class="guess-button" v-for="ranking of rankings" :key="ranking" @click="emit('guessed', ranking)"> {{ ranking }}</v-btn>
    </div>
</template>

<style scoped>
.guess-button {
    margin-bottom: 0.5vh;
}
</style>
