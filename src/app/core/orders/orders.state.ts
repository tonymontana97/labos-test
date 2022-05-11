import {Order} from "../../shared/models/order.model";

export interface OrdersState {
    list: {
        count: number;
        items: Array<Order>
    },
    isLoading: boolean;
}
