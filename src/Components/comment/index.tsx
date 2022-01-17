import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchComment} from "../../redux/ducks/comment/actionCreators";
import {RootState} from "../../redux/store";
import {LoadingState} from "../../redux/ducks/articles/contracts/state";

type propsType = {
    list: any
}
export const Comment:React.FC<any> = ():React.ReactElement | null => {
    const {user, comments, loadingState} = useSelector((state : RootState ) => {
        return {
            user: state.user.data,
            comments: state && state.article.data,
            loadingState : state && state.comment.loadingState
        }
    });
    let [text, setText] = React.useState<string>('');
    let commentsInfo = comments && comments.comments;
    let newsId = comments && comments.id;

    const [textIsEmpty, setTextIsEmpty] = React.useState<boolean>(false);

    let dispatch = useDispatch();
    const onChangeTextarea = (e:any):void => {
        setText(e.currentTarget.value);
    };

    const onSend = ():void => {
        let date = new Date();
        let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let relDate = date.getDate() + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        let data = {
            newsId: newsId,
            date: relDate,
            text: text,
            user: {
                userName: user && user.username,
                avatarUrl: user && user.avatarUrl,
                userId: user && user.id
            }
        };
        setText('');
        if (text.length === 0) {
            setTextIsEmpty(true)
        }
        else {
            dispatch(FetchComment(data));
            setTextIsEmpty(false)
        }
    };

    if (!user) {
        return null
    }
    return (
        <div className={'comment-items'}>
            <div className={'comment-add'}>
                <div className={'comment-add__photo'}>
                    <img src={user.avatarUrl} alt={'#'} className={'comment-add__img'}/>
                </div>
                <div className={'comment-add__text'}>
                    <textarea className={'comment-add__text-textarea'}
                              placeholder={"Напишите комментарий"}
                              value={text}
                              onChange={(e) => onChangeTextarea(e)}/>
                    {
                        textIsEmpty ? <p> Напешите коментари </p> : ''
                    }
                    <button className={'comment-add__btn'} onClick={onSend}>
                        {loadingState === LoadingState.LOADING ? 'Отправка' : 'Отправить'}
                    </button>
                </div>
            </div>
            <div className={'comment-lists'}>
                {
                    commentsInfo && commentsInfo.length === 0
                        ?
                        <p> Пака нет комментарий </p>
                        :
                        commentsInfo && commentsInfo.map((item: any) => {
                        return (
                            <div className={'comment-list'} key={item.id}>
                                <div className={'comment-list__photo'}>
                                    <img src={item.user.avatarUrl} alt={'#'} className={'comment-list__img'}/>
                                </div>
                                <div className={'comment-list__text'}>
                                    <p className={'comment-list__user-info'}>{item.user.userName},  <span className={'comment-list__date'}>дата: {item.date}</span></p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
