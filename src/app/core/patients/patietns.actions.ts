import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {Patient} from "../../shared/models/patient.model";

export const actionGetPatientsList = createAction(
    '[Patients] Get patients list',
);

export const actionGetPatientsListSuccess = createAction(
    '[Patients] Get patients list success',
    props<{ list: Array<Patient>, count: number }>()
);

export const actionGetPatientsListFailed = createAction(
    '[Patients] Get patients list failed',
    props<{error: HttpErrorResponse}>()
);
