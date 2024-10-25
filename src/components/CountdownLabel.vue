<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown';

const { countdown } = useCountdown();

</script>

<template>
    <div>
        {{ countdown }}
    </div>
</template>
