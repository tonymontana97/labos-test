import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {OrdersService} from "./orders.service";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {actionGetOrdersList, actionGetOrdersListFailure, actionGetOrdersListSuccess} from "./order.actions";

@Injectable()
export class OrdersEffects {
    getOrdersListReq$ = createEffect(() => this.actions$.pipe(
        ofType(actionGetOrdersList),
        switchMap(() => this.ordersService.getList().pipe(
            map(({ order, count }) => actionGetOrdersListSuccess({list: order, count})),
            catchError((error) => of(actionGetOrdersListFailure({error})))
        ))
    ))

    constructor(
        private readonly actions$: Actions,
        private readonly ordersService: OrdersService
    ) {
    }
}
