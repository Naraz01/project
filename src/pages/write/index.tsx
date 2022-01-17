import React from "react";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {FetchAddNews} from "../../redux/ducks/news/actionCreators";
import {RootState} from "../../redux/store";
import {AddNewsState} from "../../redux/ducks/news/contracts/state";
import {useHistory} from "react-router-dom";

export const Write:React.FC = ():React.ReactElement => {
    const {user, addNewsState, addNews, article} = useSelector((state : RootState ) => {
        return {
            user: state.user.data,
            addNewsState: state.news.addNewsState,
            addNews: state.news.addNews,
            article: state.news.items
        }
    });
    const [valueTitle, setValueTitle] = React.useState<string>('');
    const [valueText, setValueText] = React.useState<string>('');

    const [isEmptyTitle, setIsEmptyTitle] = React.useState<boolean>(false);
    const [isEmptyText, setIsEmptyText] = React.useState<boolean>(false);
    const dispatch = useDispatch();

    const onChangeTitle = (e:any):void => {
        setValueTitle(e.currentTarget.value);
        setIsEmptyTitle(false);
    };

    const onChangeText = (e:any):void => {
        setValueText(e.currentTarget.value);
        setIsEmptyText(false);

    };
    let history = useHistory();

    React.useEffect(() => {
        if (addNews) {
            history.push(`/articles/${article[0].id}`)
        }
    });


    const onButton = ():void => {
        let date = new Date();
        let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let relDate = date.getDate() + '.' + month[date.getMonth()] + '.' + date.getFullYear();
        if (valueTitle.length === 0) {
            setIsEmptyTitle(true)
        }
        else if (valueText.length === 0) {
            setIsEmptyText(true)
        }
         else {
             let data = {
                 title: valueTitle,
                 text: valueText,
                 date: relDate,
                 writer: {
                     userName: user && user.username + ' ' + user.fullname,
                     avatarUrl: user && user.avatarUrl,
                 },
                 personId: user && user.id,
                 saved: [0],
                 likes: [0]
             };
            dispatch(FetchAddNews(data))
        }
    };



    return (
        <div className={'write'}>
            <h1 className={'write-title'}>
                Добавить новости
            </h1>
            <div>
            <input type={'text'} value={valueTitle} onChange={(e) => onChangeTitle(e)} className={classNames('write-input__title')} />
                {
                    valueTitle.length + 1 >= 180 && <p className={'write-input__title-error'}>Заголовка не должен превышать от 180 символ</p>
                }
                {
                    isEmptyTitle && <p className={'write-input__title-error'}>пустой</p>
                }
            </div>
            <div>
                <textarea
                    value={valueText}
                    onChange={(e) => onChangeText(e)}
                    className={classNames('write-textarea__text')}
                />
                {
                    isEmptyText && <p className={'write-input__title-error'}>пустой</p>
                }
            </div>
            <div>
                <button disabled={ valueTitle.length + 1 >= 180 ? true: false }
                        className={'write-btn__send'}
                        onClick={onButton}
                >
                    {addNewsState === AddNewsState.LOADING ? 'Добавление' : 'Добавить'}
                </button>
            </div>
        </div>
    )
};
