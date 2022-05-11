import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PatientsService} from "./patients.service";
import {
    actionGetPatientsList,
    actionGetPatientsListFailed,
    actionGetPatientsListSuccess
} from "./patietns.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class PatientsEffects {
    getPatientsListReq$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionGetPatientsList),
            switchMap(() => this.patientsService.getList().pipe(
                map(({ patient, count }) => actionGetPatientsListSuccess({
                    list: patient,
                    count
                })),
                catchError((error) => of(actionGetPatientsListFailed(error)))
            ))
        )
    )

    constructor(
        private readonly actions$: Actions,
        private readonly patientsService: PatientsService
    ) {
    }
}
