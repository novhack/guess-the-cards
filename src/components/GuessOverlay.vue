<script setup lang="ts">
import { computed } from 'vue';

const SELF_HIDE_TIMEOUT = 2000;

const props = defineProps({
    wasGuessCorrect: {
        type: Boolean,
        required: true,
    },
    closeResolve: {
        type: Function,
        required: true,
    },
});

const model = defineModel({
    type: Boolean,
    required: true,
});

let timeout: ReturnType<typeof setTimeout>;

const overlayTitle = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.titleCorrect" : "guessOverlay.titleIncorrect";
});

const overlayText = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.playerCorrect" : "guessOverlay.playerIncorrect";
});

function afterEnter() {
    timeout = setTimeout(() => model.value = false, SELF_HIDE_TIMEOUT);
}

function afterLeave() {
    clearTimeout(timeout);
    props.closeResolve();
}
</script>

<template>
    <v-overlay
        v-model="model"
        class="align-center justify-center"
        opacity="1"
        scrim="white"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
    >
        <div class="d-flex flex-column">
            <h1 class="d-flex justify-center">{{ $t(overlayTitle) }}</h1>
            <div>{{ $t(overlayText) }}</div>
        </div>
    </v-overlay>
</template>
