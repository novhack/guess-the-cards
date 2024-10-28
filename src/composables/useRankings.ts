import { ref, Ref } from 'vue';
import shuffleArray from 'shuffle-array';
import { useHand } from './useHand';

const rankings: Ref<Array<string>> = ref([]);

export function useRankings() {
    // All possible rankings of a standard game
    // Extracted from pokersolver
    const possibleRankings = [
        "Straight Flush",
        "Four of a Kind",
        "Full House",
        "Flush",
        "Straight",
        "Three of a Kind",
        "Two Pair",
        "Pair",
        "High Card",
    ];

    const { bestRanking } = useHand();

    /**
     * Prepares a count of rankings with one of them being the highest in the solution
     * @param count Number of rankings to return
     */
    function getRankings(count: number) {
        // Remove best ranking from possible rankings
        let rankingsToSelect = possibleRankings.filter((ranking: string) => ranking !== bestRanking.value);

        // Shuffle rankings
        rankingsToSelect = shuffleArray(rankingsToSelect);

        // Add count rankings to return array
        rankings.value = [bestRanking.value].concat(rankingsToSelect.slice(0, count - 1));

        // One last shuffle so the best ranking is not always on top
        rankings.value = shuffleArray(rankings.value);
    }

    return {
        rankings,
        getRankings,
    }
}
