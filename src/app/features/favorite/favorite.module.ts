import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FavoriteComponent} from "./favorite/favorite.component";
import {SharedModule} from "../../shared/shared.module";
import {FavoriteRoutingModule} from "./favorite-routing.module";

@NgModule({
    imports: [CommonModule, SharedModule, FavoriteRoutingModule],
    declarations: [FavoriteComponent],
    providers: []
})
export class FavoriteModule {

}
