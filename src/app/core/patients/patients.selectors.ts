import {createSelector} from "@ngrx/store";
import {selectPatients} from "../core.state";

export const selectPatientsList = createSelector(
    selectPatients,
    (state) => state?.list?.items
)

export const selectPatientsLoading = createSelector(
    selectPatients,
    (state) => state.isLoading
);
