import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FetchDeleteArticle} from "../../redux/ducks/news/actionCreators";
import {DeleteModal} from "./deleteModal";
import {RootState} from "../../redux/store";
import {useHistory} from "react-router";

type propsType = {
    id: any
}
export const Delete:React.FC<propsType> = (id: propsType):React.ReactElement => {
    let [open, setOpen] = React.useState(false);
    let history = useHistory();
    const dispatch = useDispatch();

    const {deleteArticle} = useSelector((state : RootState ) => {
        return {
            deleteArticle: state.news.deleteArticle
        }
    });

    const onDelete = (ArticleId:any):void => {
        dispatch(FetchDeleteArticle(ArticleId.id));
        setOpen(!open)
    };

    React.useEffect(() => {
        if (deleteArticle) {
            history.push(`/`)
        }
    });

    const onDeleteWindow = ():void => {
        setOpen(!open)
    };
    return (
        <>
            <div className={'ribbon-delete'} onClick={onDeleteWindow}>
                <svg width="22px" height="22px" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                </svg>
                <span>
                    Удаление
                </span>
            </div>
            {
                open && <DeleteModal id = {id} onDelete = {onDelete} onDeleteWindow = {onDeleteWindow}/>
            }
        </>
    )
};
