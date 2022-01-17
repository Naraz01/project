import { News } from "../../news/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface articlesState {
    data?: News;
    loadingState: LoadingState;
}
