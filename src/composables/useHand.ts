import { ref, Ref } from 'vue';
import { useDeck } from './useDeck';
import { Hand as PokerSolver } from 'pokersolver';

const HAND_CARDS_COUNT = 5;

const hand: Ref<Array<string>> = ref([]);
const bestRanking: Ref<string> = ref("");

export function useHand() {
    const { buildDeck, shuffleDeck, dealCards } = useDeck();
    const solution: Ref<any> = ref();

    function dealHand() {
        buildDeck();
        shuffleDeck();
        hand.value = dealCards(HAND_CARDS_COUNT);
    }

    function solveHand() {
        solution.value = PokerSolver.solve(hand.value);
        bestRanking.value = solution.value.name;
    }

    return {
        hand,
        solution,
        bestRanking,
        dealHand,
        solveHand,
    }
}
