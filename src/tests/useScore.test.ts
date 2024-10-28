import { expect, test } from 'vitest';
import { useScore } from '../composables/useScore';

test('Init score', () => {
    const { score } = useScore();
    expect(score.value).toBe(0);
});

test('Increase score', () => {
    const { score, increaseScore } = useScore();
    for (let i = 0; i < 5; i++) {
        increaseScore();
    }
    expect(score.value).toBe(5);
}); 

test('Reset score', () => {
    const { score, increaseScore, resetScore } = useScore();
    increaseScore();
    resetScore();
    expect(score.value).toBe(0);
});
