import { person } from "../../person/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface blogger {
    id: number,
    fullname: string,
    username: string,
    city: string,
    direction: string
    avatarUrl: string
}
export interface articles {

}
export interface bloggerState {
    data?: person;
    articles?: any;
    loadingState: LoadingState;
}
