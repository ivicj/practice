import { Post } from "src/app/modules/model/post";
import { PostsForStoreModel } from "src/app/modules/model/posts-for-store.model";

export interface State {
    posts: PostsForStoreModel[],
    isLoading: boolean,
    error: string
}

export const initialState: State = {
    posts: [],
    isLoading: false,
    error: null
}
