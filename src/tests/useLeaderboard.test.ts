import { beforeEach, expect, test } from 'vitest';
import { useLeaderboard } from '../composables/useLeaderboard';
import { useStorage } from '@vueuse/core';

const STORAGE_NAME = "guess-the-cards-leaderboard-storage";

beforeEach(() => {
    // Clear leaderboard storage
    const storage = useStorage(STORAGE_NAME, {});
    storage.value = null;
});

test('Store attempt', () => {
    const { leaderboard, storeAttempt } = useLeaderboard();
    storeAttempt(10);
    expect(leaderboard.value.attemptsCount).toBe(1);
    expect(leaderboard.value.previousAttempts[0].score).toBe(10);
});
