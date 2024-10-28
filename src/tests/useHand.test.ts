import { expect, test } from 'vitest';
import { useHand } from '../composables/useHand';

test('Deal cards', () => {
    const { hand, dealHand } = useHand();
    dealHand();
    expect(hand.value.length).toBe(5);
});

test('Solve hand', () => {
    const { hand, bestRanking, solveHand } = useHand();
    hand.value = ["Ad", "As", "Ac", "2h", "2s"];
    solveHand();
    expect(bestRanking.value).toBe("Full House");
});
