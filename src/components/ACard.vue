<script setup lang="ts">
defineProps({
    value: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <div> {{ value }}</div>
</template>
