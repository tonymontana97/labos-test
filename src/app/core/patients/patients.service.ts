import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Patient} from "../../shared/models/patient.model";

const routes = {
    getList: () => `${environment.apiPrefix}/51597ef3`
}

interface GetListResponse {
    count: number;
    patient: Array<Patient>;
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PatientsService {
    constructor(
        private readonly http: HttpClient
    ) {
    }

    getList(): Observable<Pick<GetListResponse, "count" | "patient">> {
        return this.http.get<GetListResponse>(routes.getList()).pipe(
            map(({ count, patient }) => ({count, patient}))
        );
    }
}
