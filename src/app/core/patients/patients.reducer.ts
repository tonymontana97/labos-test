import {PatientsState} from "./patients.state";
import {Action, createReducer, on} from "@ngrx/store";
import {
    actionGetPatientsList,
    actionGetPatientsListFailed,
    actionGetPatientsListSuccess
} from "./patietns.actions";

export const initialState: PatientsState = {
    list: {
        count: 0,
        items: []
    },
    isLoading: false
}

const reducer = createReducer(
    initialState,
    on(
        actionGetPatientsList,
        (state) => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        actionGetPatientsListSuccess,
        (state, { count, list }) => ({
            ...state,
            list: {
                count,
                items: list
            },
            isLoading: false
        })
    ),
    on(
        actionGetPatientsListFailed,
        (state) => ({
            ...state,
            isLoading: false
        })
    )
)

export function patientsReducer(
    state: PatientsState | undefined,
    action: Action
): PatientsState {
    return reducer(state, action)
}
