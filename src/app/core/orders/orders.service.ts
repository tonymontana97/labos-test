import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../shared/models/order.model";

const routes = {
    getList: () => `${environment.apiPrefix}/79fb05cb`,
};

interface GetOrdersListResponse {
    count: number;
    order: Array<Order>,
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    getList(): Observable<GetOrdersListResponse> {
        return this.http.get<GetOrdersListResponse>(routes.getList())
    }

    constructor(
        private readonly http: HttpClient
    ) {
    }
}
