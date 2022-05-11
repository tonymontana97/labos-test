import {createSelector} from "@ngrx/store";
import {selectFavorite} from "../core.state";
import {selectOrdersList} from "../orders/orders.selectors";
import {selectPatientsList} from "../patients/patients.selectors";

export const selectFavOrdersIds = createSelector(selectFavorite, (state) => state.orders);
export const selectFavPatientsIds = createSelector(selectFavorite, (state) => state.patients);
export const selectFavOrders = createSelector(selectFavOrdersIds, selectOrdersList, (ids = [], orders = []) => orders.filter(order => ids.includes(order.identifier)));
export const selectFavPatients = createSelector(selectFavPatientsIds, selectPatientsList, (ids = [], patients = []) => patients.filter(order => ids.includes(order.defaultId)));
