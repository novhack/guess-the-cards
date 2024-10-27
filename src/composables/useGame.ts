import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { RoutePaths } from '../plugins/router';
import { useCountdown } from '../composables/useCountdown';
import { useRankings } from '../composables/useRankings';
import { useHand } from '../composables/useHand';
import { useScore } from '../composables/useScore';
import { useLeaderboard } from '../composables/useLeaderboard';

const CORRECT_GUESS_INCREMENT = 5;
const INCORRECT_GUESS_DECREMENT = 10;

export function useGame() {
    const { countdown, addSeconds, removeSeconds, resetCountdown } = useCountdown();
    const { solution, bestRanking, dealHand, solveHand } = useHand();
    const { prepareRankings } = useRankings();
    const { score, increaseScore, resetScore } = useScore();
    const { storeAttempt } = useLeaderboard();
    const router = useRouter();

    function restartGame() {
        resetCountdown();
        resetScore();
        setupNewRound();
        }
        
    function setupNewRound() {
        dealHand();
        solveHand();
        prepareRankings(solution, 3);
    }

    function evaluateRound(guessedRanking: string) {
        if (bestRanking.value === guessedRanking) {
            addSeconds(CORRECT_GUESS_INCREMENT);
            increaseScore();
        } else {
            removeSeconds(INCORRECT_GUESS_DECREMENT);
        }
    }

    watch(countdown, (newValue: number) => {
        if (newValue <= 0) {
            console.log("GAME OVER! Score was: ", score.value);
            storeAttempt(score.value);
            router.push(RoutePaths.Leaderboard);
        }
    });

    return {
        setupNewRound,
        restartGame,
        evaluateRound,
    }
}
