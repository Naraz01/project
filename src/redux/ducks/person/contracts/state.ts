import { News } from "../../news/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export interface person {
    id: number,
    fullname: string,
    username: string
    city: string,
    friends?: Array<number>,
    direction: string,
    avatarUrl: string,
    news?: Array<News>
}

export interface personState {
    items: person[];
    myFriends: any;
    notFriends: any;
    loadingState: LoadingState;
}
