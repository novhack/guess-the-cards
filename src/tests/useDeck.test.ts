import { expect, test } from 'vitest';
import { toRaw } from 'vue';
import { useDeck } from '../composables/useDeck';

test('Build the deck', () => {
    const { deck, buildDeck } = useDeck();
    buildDeck();
    expect(deck.value.length).toBe(52);
});

test('Shuffle deck', () => {
    const { deck, buildDeck, shuffleDeck } = useDeck();
    buildDeck();
    const builtDeck = structuredClone(toRaw(deck.value));
    shuffleDeck();
    expect(builtDeck).not.toEqual(deck.value);
});

test('Deal cards', () => {
    const { deck, buildDeck, shuffleDeck, dealCards } = useDeck();
    buildDeck();
    shuffleDeck();
    const lastFourCards = deck.value.slice(48, 52);
    const dealtCards = dealCards(4);
    expect(dealtCards).toEqual(lastFourCards);
    expect(deck.value.length).toBe(48);
});