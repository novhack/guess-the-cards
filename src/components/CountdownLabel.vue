<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown';

const { countdown } = useCountdown();

</script>

<template>
    <div class="d-flex flex-row">
        <v-icon icon="mdi-hospital" />
        <div>{{ countdown }}s</div>
    </div>
</template>
