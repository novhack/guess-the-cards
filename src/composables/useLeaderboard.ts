import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

const STORAGE_NAME = "guess-the-cards-leaderboard-storage";

interface Leaderboard {
    attemptsCount: number, // The total amount of attempts
    previousAttempts: Attempt[],
}

export interface Attempt {
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

    const totalCorrectAnswers = computed(() => {
        return leaderboard.value.previousAttempts.reduce((sum: number, attempt: Attempt) => sum + attempt.score, 0);
    });

    return {
        leaderboard,
        totalCorrectAnswers,
        storeAttempt,
    }
}
