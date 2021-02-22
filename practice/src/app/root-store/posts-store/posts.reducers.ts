import { createReducer, on, Action } from "@ngrx/store";
import { PostsActions, PostsState } from ".";

const reducer = createReducer(
    PostsState.initialState,
    on(PostsActions.LoadPostsDataRequestAction, (state) => ({
        ...state,
        isLoading: true,
        error: null

    })),
    on(PostsActions.LoadPostsDataFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    })),
    on(PostsActions.LoadPostsDataSuccessAction, (state, { posts }) => ({
        ...state,
        isLoading: false,
        error: null,
        posts: posts
    })),
    on(PostsActions.LoadPostsByUserIdDataRequestAction, (state, { userId }) => ({
        ...state,
        isLoading: true,
        error: null,
        userId: userId
    })),
    on(PostsActions.LoadPostsByUserIdDataFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    })),
    on(PostsActions.LoadPostsByUserIdDataSuccessAction, (state, { posts }) => ({
        ...state,
        isLoading: false,
        error: null,
        posts: state.posts.concat({ userId: posts[0].userId, posts })
    })),

    //todo napraviti akciju set loading to false
    on(PostsActions.SetLoadingToFalse, state => ({
        ...state,
        isLoading: false
    }))
);

export function postsReducer(state: PostsState.State, action: Action) {
    return reducer(state, action);
}

