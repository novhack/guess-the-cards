import { ref, Ref } from 'vue';

// Notation used by pokersolver package
const RANKS = "AKQJT98765432";
const SUITS = "dsch";

export function useDeck() {
    const deck: Ref<Array<string>> = ref([]);

    function buildDeck() {
        const ranks = RANKS.split("");
        const suits = SUITS.split("");
        // Cartesian product of ranks and suits
        deck.value = ranks.flatMap((rank) => suits.map((suit) => rank + suit));
    }

    function shuffleDeck() {
        // Simple random shuffle, should be enough for a prototype game
        deck.value = deck.value.sort(() => Math.random() - 0.5);
    }

    function dealCards(count: number) {
        // Pop cards count times
        return deck.value.splice(-count, count);
    }

    return {
        deck,
        buildDeck,
        shuffleDeck,
        dealCards,
    }
}
