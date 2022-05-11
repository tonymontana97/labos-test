import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
import {patientsReducer} from "./patients/patients.reducer";
import {PatientsState} from "./patients/patients.state";
import {ordersReducer} from "./orders/orders.reducer";
import {OrdersState} from "./orders/orders.state";
import {favoriteReducer} from "./favorite/favorite.reducer";
import {FavoriteState} from "./favorite/favorite.state";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  patients: patientsReducer,
  orders: ordersReducer,
  favorite: favoriteReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectPatients = createFeatureSelector<AppState, PatientsState>('patients');

export const selectOrders = createFeatureSelector<AppState, OrdersState>('orders');

export const selectFavorite = createFeatureSelector<AppState, FavoriteState>('favorite');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  patients: PatientsState;
  orders: OrdersState;
  favorite: FavoriteState;
  router: RouterReducerState<RouterStateUrl>;
}
