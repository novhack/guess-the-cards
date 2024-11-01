<script setup lang="ts">
import { computed, defineEmits } from 'vue';
import { useFunny } from '../composables/useFunny';

const SELF_HIDE_TIMEOUT = 5000;

const emit = defineEmits(["overlayDisplayed", "overlayHidden"]);

const props = defineProps({
    wasGuessCorrect: {
        type: Boolean,
        required: true,
    },
});

const model = defineModel({
    type: Boolean,
    required: true,
});

const { funnyMessage, getFunnyMessage } = useFunny();

let timeout: ReturnType<typeof setTimeout>;

const overlayTitle = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.titleCorrect" : "guessOverlay.titleIncorrect";
});

const overlayText = computed(() => {
    return props.wasGuessCorrect ? "guessOverlay.playerCorrect" : "guessOverlay.playerIncorrect";
});

function afterEnter() {
    emit("overlayDisplayed");

    timeout = setTimeout(() => model.value = false, SELF_HIDE_TIMEOUT);
    // Load funny message and show it in the overlay
    getFunnyMessage();
}

function afterLeave() {
    clearTimeout(timeout);
    funnyMessage.value = "";
    emit("overlayHidden");
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
            <h1 class="text-center">{{ $t(overlayTitle) }}</h1>
            <div class="text-center">{{ $t(overlayText) }}</div>
            <v-divider />
            <div class="text-center">{{ funnyMessage }}</div>
        </div>
    </v-overlay>
</template>
