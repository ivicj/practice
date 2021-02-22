import { AlbumsState } from "./albums-store";
import { PostsState } from "./posts-store";
import { UsersState } from "./users-store";

export interface State {
    users: UsersState.State
    posts: PostsState.State
    // postsByUserId: PostsState.State2
    albums: AlbumsState.State
}