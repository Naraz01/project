import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { FetchUserNewsLike } from "../../redux/ducks/user/actionCreators";
import {RootState} from "../../redux/store";

type propsType = {
    newsId: number,
    likes: Array<number>,
};
export const Like:React.FC<propsType> = ({newsId, likes}:propsType):React.ReactElement => {
    const [like, setLike] = React.useState<boolean>(true);
    const {user} = useSelector((state : RootState ) => {
        return {
            user: state.user.data,
        }
    });

    let userId = user && user.id;
    const dispatch = useDispatch();

    const onLikeAdd = () => {
        let date = {
            newsId: newsId,
            likes: [...likes, userId ]
        };
        dispatch(FetchUserNewsLike(date));
        setLike(false);
        console.log(like)

        console.log(user && user.news);
        console.log('likes', likes);
        console.log('newsId', newsId);
    };

    const onLikeDelete = () => {
        let newLikes = likes.filter((item:number, i: any) => {
            return item !== userId
        });
        let date = {
            newsId: newsId,
            likes: [...newLikes]
        };
        dispatch(FetchUserNewsLike(date));
        setLike(true);
        console.log(like)

        console.log(user && user.news);
        console.log('likes', likes);
        console.log('newsId', newsId);

    };

    React.useEffect(() => {
        likes &&
        likes.map((item:number) => {
            if (item === userId) {
                setLike(false)
            }
            else {
                setLike(true)
            }
        })
    }, [likes]);

    return (
        <div className={'like'}>
            {
                like ?
                    <span onClick = {onLikeAdd}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                           className="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </span>
                    :
                    <span onClick = {onLikeDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                         className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </span>
            }
            <span>
                {!likes?.length ? '' : likes?.length}
            </span>
        </div>
    )
};
