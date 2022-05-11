import {FavoriteState} from "./favorite.state";
import {Action, createReducer, on} from "@ngrx/store";
import {actionAddFavOrder, actionAddFavPatient} from "./favorite.actions";

export const initialState: FavoriteState = {
    orders: [],
    patients: []
}

const reducer = createReducer(
    initialState,
    on(
        actionAddFavOrder,
        (state, {id}) => ({
            ...state,
            orders: state.orders.includes(id) ? state.orders.filter(item => item !== id) : [...state.orders, id]
        })
    ),
    on(
        actionAddFavPatient,
        (state, {id}) => ({
            ...state,
            patients: state.patients.includes(id) ? state.patients.filter(item => item !== id) : [...state.patients, id]
        })
    )
)

export function favoriteReducer(
    state: FavoriteState | undefined,
    action: Action
) {
    return reducer(state, action)
}
