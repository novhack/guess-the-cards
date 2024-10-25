<script setup lang="ts">
import { computed, watch } from 'vue';

const SELF_HIDE_TIMEOUT = 3000;

const model = defineModel({
    type: Boolean,
    required: true,
    default: false,
});

const props = defineProps({
    wasGuessCorrect: {
        type: Boolean,
        required: true,
        default: true,
    }
});

const emits = defineEmits(["closed"]);

let timeout: ReturnType<typeof setTimeout>;

const overlayTitle = computed(() => {
    return props.wasGuessCorrect ? "Correct" : "Incorrect";
});

const overlayText = computed(() => {
    const guessEffect = props.wasGuessCorrect ? "gain" : "lose";
    return `You ${guessEffect} 10s`
});

watch(model, (newValue: boolean) => {
    if (newValue) {
        timeout = setTimeout(() => model.value = false, SELF_HIDE_TIMEOUT);
    } else {
        emits("closed");
        clearTimeout(timeout);
    }
});
</script>

<template>
    <v-overlay v-model="model" class="align-center justify-center" opacity="1" scrim="white" open-delay="0">
        <div>
            <div>{{ overlayTitle }}</div>
            <div>{{ overlayText }}</div>
        </div>
    </v-overlay>
</template>
