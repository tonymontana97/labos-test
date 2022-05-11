import {RouterModule, Routes} from "@angular/router";
import {FavoriteComponent} from "./favorite/favorite.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: FavoriteComponent,
        data: {
            title: 'stms.favorite.title'
        }
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class FavoriteRoutingModule {}
