import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {Order} from "../../shared/models/order.model";

export const actionGetOrdersList = createAction(
    '[Orders] Get orders list'
)

export const actionGetOrdersListSuccess = createAction(
    '[Orders] Get orders list success',
    props<{ list: Array<Order>, count: number; }>()
)

export const actionGetOrdersListFailure = createAction(
    '[Orders] Get orders list failure',
    props<{ error: HttpErrorResponse }>()
)
