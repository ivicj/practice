import { Post } from "./post";

export interface PostsForStoreModel {
    userId: number,
    posts: Post[];
}