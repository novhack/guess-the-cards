import { ref, Ref } from 'vue';
import { useDeck } from './useDeck';
import { Hand as PokerSolver } from 'pokersolver';

const HAND_CARDS_COUNT = 5;

const hand: Ref<Array<string>> = ref([]);
const bestRanking: Ref<string> = ref("");

export function useHand() {
    const { buildDeck, shuffleDeck, dealCards } = useDeck();

    function dealHand() {
        buildDeck();
        shuffleDeck();
        hand.value = dealCards(HAND_CARDS_COUNT);
    }

    function solveHand() {
        const solution = PokerSolver.solve(hand.value);
        bestRanking.value = solution.name;
    }

    return {
        hand,
        bestRanking,
        dealHand,
        solveHand,
    }
}
