import {createSelector} from "@ngrx/store";
import {selectOrders} from "../core.state";

export const selectOrdersList = createSelector(selectOrders, (state) => state.list.items);
export const selectOrdersListLoading = createSelector(selectOrders, (state) => state.isLoading);
