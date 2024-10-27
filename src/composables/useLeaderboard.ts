import { useStorage } from '@vueuse/core';

const STORAGE_NAME = "guess-the-cards-leaderboard-storage";

interface Leaderboard {
    attemptsCount: number,
    previousAttempts: Attempt[],
}

interface Attempt {
    name: string,
    score: number,
}

export function useLeaderboard() {
    const defaultLeaderboard: Leaderboard = {
        attemptsCount: 0,
        previousAttempts: [],
    };

    const leaderboard = useStorage(STORAGE_NAME, defaultLeaderboard);

    function storeAttempt(score: number) {
        leaderboard.value.attemptsCount += 1;
        leaderboard.value.previousAttempts.push({
            name: generateAttemptName(leaderboard.value.attemptsCount),
            score: score,
        })
    }

    function generateAttemptName(attemptsCount: number) {
        return `${attemptsCount}`;
    }

    return {
        leaderboard,
        storeAttempt,
    }
}
