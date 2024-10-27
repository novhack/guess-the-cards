import { createRouter, createWebHistory } from 'vue-router'

import StartView from '../views/StartView.vue';
import GameView from '../views/GameView.vue';
import LeaderboardView from '../views/LeaderboardView.vue'

export enum RoutePaths {
  Start = '/',
  Game = '/game',
  Leaderboard = '/leaderboard',
}

const routes = [
  { path: RoutePaths.Start, component: StartView },
  { path: RoutePaths.Game, component: GameView },
  { path: RoutePaths.Leaderboard, component: LeaderboardView}
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
