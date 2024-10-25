<script setup lang="ts">
import GameBoard from './components/GameBoard.vue';
import CountdownLabel from './components/CountdownLabel.vue';
</script>

<template>
  <v-app>
    <v-main>
      <countdown-label />
      <game-board />
    </v-main>
  </v-app>
</template>
