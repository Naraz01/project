
export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
type userType = {
    userName: string | undefined,
    avatarUrl: string | undefined,
    userId: number | undefined
}

export interface comment {
    id?: number,
    newsId: any,
    date: string,
    text: string,
    user: userType
}

export interface commentState {
    data: Array<comment> | undefined;
    loadingState: LoadingState;
}
