<script setup lang="ts">
import { computed } from 'vue';
import { Attempt, useLeaderboard } from '../composables/useLeaderboard';
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Add type for virtual data table header - there is currently no types for this in Vuetify 3.7
import type { VDataTableVirtual } from 'vuetify/components'
type VDataTableHeader = Exclude<NonNullable<VDataTableVirtual["$props"]["headers"]>[number], Readonly<unknown[]>>;

const { leaderboard } = useLeaderboard();

const headers: Array<VDataTableHeader> = [
    { title: "Attempt", align: "start", key: "name"},
    { title: "Score", align: "start", key: "score"},
];

const tableItems = computed(() => {
    return leaderboard.value.previousAttempts.map((attempt: Attempt) => {
        return {
            "name": `${t('leaderboardView.attempt')} ${attempt.name}`,
            "score": `${attempt.score} ${t('leaderboardView.answers')}`,
        };
    });
})
</script>

<template>
    <v-data-table-virtual
        :headers="headers"
        :items="tableItems"
        item-value="name"
        height="50vh"
    />
</template>
