import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { pipe } from "rxjs";
import { filter, map } from "rxjs/operators";
import { PostsState } from ".";

export const selectPostsState = createFeatureSelector<PostsState.State>('Posts');

export const selectProjectedPostsState = createSelector(
    selectPostsState,
    state => state && state.posts.length ? state : null
);

export const selectProjectedPosts = createSelector(
    selectPostsState,
    state => state && state.posts.length ? state.posts : []
)

export const selectPostsData = pipe(
    select(selectProjectedPosts),
    // map(posts => userId ? posts.push(posts.find(post => post.userId === userId)) : posts)
    map(posts => posts)
);

export const selectPostsByUserIdData = (userId: number) => pipe(
    select(selectProjectedPosts),
    filter(posts => !!posts.length),
    map(posts => {
        const foundPosts = posts.find(post => post.userId == userId);
        return foundPosts ? [foundPosts] : []
    })
);
