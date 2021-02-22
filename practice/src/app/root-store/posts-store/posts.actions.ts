import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/modules/model/post";
import { PostsForStoreModel } from "src/app/modules/model/posts-for-store.model";

export const LoadPostsDataRequestAction = createAction(
    '[Posts] Load Posts Data Request',
);

export const LoadPostsDataFailureAction = createAction(
    '[Posts] Load Posts Data Failure',
    props<{ error: string }>()
);

export const LoadPostsDataSuccessAction = createAction(
    '[Posts] Load Posts Data Success',
    props<{ posts: PostsForStoreModel[] }>()
);

export const LoadPostsByUserIdDataRequestAction = createAction(
    '[Posts] Load Posts By User Id Data Request',
    props<{ userId: number }>()
);

export const LoadPostsByUserIdDataFailureAction = createAction(
    '[Posts] Load Posts By User Id Data Failure',
    props<{ error: string }>()
);

export const LoadPostsByUserIdDataSuccessAction = createAction(
    '[Posts] Load Posts By User Id Data Success',
    props<{ posts: Post[] }>()
);

export const SetLoadingToFalse = createAction(
    '[Posts] Set Loading To False'
);
