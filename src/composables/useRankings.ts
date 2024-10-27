import { ref, Ref } from 'vue';

const rankings: Ref<Array<string>> = ref([]);

export function useRankings() {
    const gameHandValues: string[] = [];

    /**
     * Prepares a count of rankings with one of them being the highest in the solution
     * @param solution Pokersolver solution object
     * @param count Number of rankings to return
     */
    function prepareRankings(solution: Ref<any>, count: number) {
        const bestRanking: string = solution.value.name;
        const rankingsInHand: Array<string> = solution.value.descr.split(",");

        // Get all possible hand values of the current game
        extractGameHandValues(solution);

        const possibleRankings = rankingsInHand.concat(gameHandValues);

        // Remove all duplicate rankings
        possibleRankings.filter((ranking: string, pos: number) => possibleRankings.indexOf(ranking) === pos);

        // Remove best ranking so it's not added twice
        possibleRankings.splice(possibleRankings.indexOf(bestRanking), 1);

        // Shuffle rankings
        possibleRankings.sort(() => Math.random() - 0.5);

        rankings.value = [bestRanking];
        for (let i = 1; i < count; i++) {
            const ranking = possibleRankings.pop();
            rankings.value.push(ranking ?? "");
        }

        // One last shuffle of possible rankings at hand
        rankings.value.sort(() => Math.random() - 0.5);
    }

    function extractGameHandValues(solution: Ref<any>) {
        for (const handValue of solution.value.game.handValues) {
            gameHandValues.push(handValue.name);
        }
    }

    return {
        rankings,
        prepareRankings,
    }
}
