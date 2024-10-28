<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown';
const { countdown } = useCountdown();
</script>

<template>
    <div class="countdown-label d-flex flex-row">
        <div>✚ {{ countdown }} s</div>
    </div>
</template>

<style scoped>
.countdown-label {
    font-size: 2.5vh;
}
</style>
