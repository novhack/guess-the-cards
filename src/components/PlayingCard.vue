<script setup lang="ts">
import { computed } from 'vue';

enum Suit {
    Spade = "♠",
    Heart = "♥",
    Diamond = "♦",
    Club = "♣",
}

const props = defineProps({
    definition: {
        type: String,
        required: true,
    }
});

const suit = computed(() => {
    switch (props.definition[1]) {
        case "s":
            return Suit.Spade;
        case "h":
            return Suit.Heart;
        case "d":
            return Suit.Diamond;
        case "c":
            return Suit.Club;
        default:
            return "";
    }
});

const suitColor = computed(() => {
    switch (suit.value) {
        case Suit.Spade:
            return "#4d4d4d";
        case Suit.Club:
            return "#4bbf63";
        case Suit.Heart:
            return "#890901";
        case Suit.Diamond:
            return "#273ac3";
        default:
            return "";
    }
});
</script>

<template>
    <div class="card d-flex flex-column" :style="{ backgroundColor: suitColor }">
        <div class="card-suit">{{ suit }}</div>
        <div class="card-value d-flex justify-center">{{ definition[0] }}</div>
    </div>
</template>

<style scoped>
.card {
    aspect-ratio: 63/88;
    width: 100%;
    border-radius: 2cqw;
    border: solid 1px black;
}

.card-suit {
    color: black;
    opacity: 50%;
    margin: 0 0 0 1cqw;
    font-size: 4cqw;
}

.card-value {
    font-weight: 1000;
    font-size: 8cqw;
    color: white;
}
</style>
