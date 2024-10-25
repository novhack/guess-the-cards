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
})


</script>

<template>
    <div class="card card-border" :style="{ backgroundColor: suitColor }">
        <div :style="{ color: 'black', opacity: '50%' }">{{ suit }}</div>
        <div class="card-value">{{ definition[0] }}</div>
    </div>
</template>

<style scoped>
.card {
    height: 15vh;
    width: auto;
    min-height: 150px;
    min-width: 100px;
}

.card-border {
    border-radius: 1em;
    border: solid 1px;
}

.card-value {
    font-weight: 1000;
    color: white;
}

</style>