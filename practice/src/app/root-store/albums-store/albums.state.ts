import { Album } from "src/app/modules/model/album";

export interface State {
    albums: Album[],
    isLoading: boolean,
    error: string
}

export const initialState: State = {
    albums: [],
    isLoading: false,
    error: null
}