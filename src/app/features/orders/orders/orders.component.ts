import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import {combineLatest, Observable} from "rxjs";
import {Order} from "../../../shared/models/order.model";
import {Store} from "@ngrx/store";
import {selectOrdersList} from "../../../core/orders/orders.selectors";
import {actionGetOrdersList} from "../../../core/orders/order.actions";
import {actionAddFavOrder} from "../../../core/favorite/favorite.actions";
import {selectFavOrdersIds} from "../../../core/favorite/favorite.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  orders$: Observable<Array<Order & {isFav: boolean}>>;

  constructor(
      private readonly store$: Store
  ) {
  }

  ngOnInit() {
    this.store$.dispatch(actionGetOrdersList());
    this.orders$ = combineLatest([
      this.store$.select(selectOrdersList),
      this.store$.select(selectFavOrdersIds),
    ]).pipe(
        map(([orders, ids]) => {
          return orders.map(order => ({
            ...order,
            isFav: ids.includes(order.identifier)
          }))
        })
    )
  }

    addToFav(order: Order) {
        this.store$.dispatch(actionAddFavOrder({id: order.identifier}))
    }
}
