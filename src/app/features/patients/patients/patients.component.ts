import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import {Store} from "@ngrx/store";
import {actionGetPatientsList} from "../../../core/patients/patietns.actions";
import {combineLatest, Observable} from "rxjs";
import {selectPatientsList} from "../../../core/patients/patients.selectors";
import {Patient} from "../../../shared/models/patient.model";
import {actionAddFavOrder, actionAddFavPatient} from "../../../core/favorite/favorite.actions";
import {map, withLatestFrom} from "rxjs/operators";
import {selectFavPatientsIds} from "../../../core/favorite/favorite.selectors";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  patients$: Observable<Array<Patient & {isFav: boolean}>>;

  constructor(
      private readonly store$: Store
  ) {}

  ngOnInit() {
    this.store$.dispatch(actionGetPatientsList());
    this.patients$ = combineLatest([
      this.store$.select(selectPatientsList),
      this.store$.select(selectFavPatientsIds)
    ]).pipe(
        map(([patients, ids]) => {
          return patients.map(p => {
            return {
              ...p,
              isFav: ids.includes(p.defaultId)
            }
          });
        })
    )
  }

    addToFav({defaultId}: Patient) {
        this.store$.dispatch(actionAddFavPatient({
          id: defaultId
        }))
    }
}
