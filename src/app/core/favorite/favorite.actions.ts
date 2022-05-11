import {createAction, props} from "@ngrx/store";

export const actionAddFavPatient = createAction(
    '[Favorite] Add favorite patient',
    props<{ id: string }>()
);

export const actionAddFavOrder = createAction(
    '[Favorite] Add favorite order',
    props<{ id: string }>()
);
