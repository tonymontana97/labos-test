import {OrdersState} from "./orders.state";
import {Action, createReducer, on} from "@ngrx/store";
import {actionGetOrdersList, actionGetOrdersListFailure, actionGetOrdersListSuccess} from "./order.actions";

export const initialState: OrdersState = {
    list: {
        items: [],
        count: 0
    },
    isLoading: false,
}

const reducer = createReducer(
    initialState,
    on(
        actionGetOrdersList,
        (state) => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        actionGetOrdersListSuccess,
        (state, { count, list }) => ({
            ...state,
            list: {
                items: list,
                count
            },
            isLoading: false
        })
    ),
    on(
        actionGetOrdersListFailure,
        (state) => ({
            ...state,
            isLoading: false
        })
    )
)

export function ordersReducer(
    state: OrdersState | undefined,
    action: Action
): OrdersState {
    return reducer(state, action);
}
