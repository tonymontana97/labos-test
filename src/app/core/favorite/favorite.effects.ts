import {Injectable} from "@angular/core";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {actionAddFavOrder, actionAddFavPatient} from "./favorite.actions";
import {tap} from "rxjs/operators";

const FAVORITE_KEY = 'FAVORITE';

@Injectable()
export class FavoriteEffects {

    addFavOrder$ = createEffect(() => this.actions$.pipe(
        ofType(actionAddFavOrder),
        tap(({ id }) => {
            let orders: string[] = this.localStorageService.getItem(FAVORITE_KEY)?.orders || [];
            orders = orders.includes(id) ? orders.filter(item => item !== id) : [...orders, id];
            this.localStorageService.setItem(FAVORITE_KEY, {
                patients: this.localStorageService.getItem(FAVORITE_KEY)?.patients,
                orders
            })
        })
    ), { dispatch: false })

    addFavPatient$ = createEffect(() => this.actions$.pipe(
        ofType(actionAddFavPatient),
        tap(({ id }) => {
            let patients: string[] = this.localStorageService.getItem(FAVORITE_KEY)?.patients || [];
            patients = patients.includes(id) ? patients.filter(item => item !== id) : [...patients, id];
            this.localStorageService.setItem(FAVORITE_KEY, {
                orders: this.localStorageService.getItem(FAVORITE_KEY)?.orders || [],
                patients
            })
        })
    ), { dispatch: false })

    constructor(
        private readonly actions$: Actions,
        private readonly localStorageService: LocalStorageService
    ) {
    }
}
