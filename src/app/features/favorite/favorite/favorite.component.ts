import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectFavOrders, selectFavOrdersIds, selectFavPatients} from "../../../core/favorite/favorite.selectors";
import {Order} from "../../../shared/models/order.model";
import {Patient} from "../../../shared/models/patient.model";
import {actionGetPatientsList} from "../../../core/patients/patietns.actions";
import {actionGetOrdersList} from "../../../core/orders/order.actions";
import {actionAddFavOrder, actionAddFavPatient} from "../../../core/favorite/favorite.actions";

@Component({
    selector: 'st-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent implements OnInit {
    public favOrders$: Observable<Order[]>;
    public favPatients$: Observable<Patient[]>;

    constructor(
        private readonly store$: Store
    ) {
        this.favOrders$ = this.store$.select(selectFavOrders);
        this.favPatients$ = this.store$.select(selectFavPatients);
    }

    public ngOnInit() {
        this.store$.dispatch(actionGetPatientsList());
        this.store$.dispatch(actionGetOrdersList());
    }

    removePatient({defaultId}: Patient) {
        this.store$.dispatch(actionAddFavPatient({id: defaultId}))
    }

    removeOrder({identifier}: Order) {
        this.store$.dispatch(actionAddFavOrder({id: identifier}))
    }
}
