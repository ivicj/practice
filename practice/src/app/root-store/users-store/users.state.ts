import { User } from "src/app/modules/model/user";

export interface State {
    users: User[],
    isLoading: boolean,
    error: string
}

export const initialState: State = {
    users: [],
    isLoading: false,
    error: null
}