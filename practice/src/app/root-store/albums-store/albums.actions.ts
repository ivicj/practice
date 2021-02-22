import { createAction, props } from "@ngrx/store";
import { Album } from "src/app/modules/model/album";

export const LoadAlbumsDataRequestAction = createAction(
    '[Albums] Load Albums Data Request'
);

export const LoadAlbumsDataFailureAction = createAction(
    '[Albums] Load Albums Data Failure',
     props<{ error: string }>()
);

export const LoadAlbumsDataSuccessAction = createAction(
    '[Albums] Load Albums Data Success',
    props<{ albums: Album[] }>()
);