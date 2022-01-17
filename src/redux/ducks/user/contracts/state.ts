import { person } from "../../person/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export enum SaveLoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export enum LikeLoadingState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export interface userState {
    data?: person;
    saved?: any;
    saveLoadingState: SaveLoadingState;
    loadingState: LoadingState;
    likeLoadingState: LikeLoadingState
}
