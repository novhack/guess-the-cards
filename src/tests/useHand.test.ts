import { expect, test } from 'vitest';
import { useHand } from '../composables/useHand';

test('Deal cards', () => {
    const { hand, dealHand } = useHand();
    dealHand();
    expect(hand.value.length).toBe(5);
});

test('Solve hand', () => {
    const { dealHand, solveHand } = useHand();
    dealHand();
    solveHand();
});
