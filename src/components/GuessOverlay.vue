<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFunny } from '../composables/useFunny';

const SELF_HIDE_TIMEOUT = 5000;

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

const { getFunnyMessage } = useFunny();

let timeout: ReturnType<typeof setTimeout>;
const funnyMessage = ref("");

const overlayTitle = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.titleCorrect" : "guessOverlay.titleIncorrect";
});

const overlayText = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.playerCorrect" : "guessOverlay.playerIncorrect";
});

function afterEnter() {
    timeout = setTimeout(() => model.value = false, SELF_HIDE_TIMEOUT);

    // Load funny message and show it in the overlay
    getFunnyMessage()
        .then((message: string) => {
            funnyMessage.value = message;
        })
        .catch((error: string) => {
            funnyMessage.value = error;
        })
}

function afterLeave() {
    clearTimeout(timeout);
    props.closeResolve();
    funnyMessage.value = "";
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
            <div class="d-flex justify-center">{{ $t(overlayText) }}</div>
            <div class="justify-center">{{ funnyMessage }}</div>
        </div>
    </v-overlay>
</template>
