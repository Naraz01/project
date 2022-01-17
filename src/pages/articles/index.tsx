import React from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {FetchArticle} from '../../redux/ducks/articles/actionCreators';
import {RootState} from "../../redux/store";
import {Save} from "../../Components/save";
import {Like} from "../../Components/like";
import {Delete} from './delete';
import {CommentIcon} from '../../Components/comment/commentIcon';
import {Comment} from '../../Components/comment';
import axios from "axios";
import {NewsApi} from "../../services/api/newsApi";


export const Articles:React.FC = ():React.ReactElement | null => {
    let [news, setNews] = React.useState();
    const {article, user} = useSelector((state : RootState ) => {
        return {
            article: state.article.data,
            user: state.user.data
        }
    });
    const params: {id:string} = useParams();
    const id = params.id;
    const dispatch = useDispatch();

    const onAddPost = async () => {
        try {
            let data = await NewsApi.fetchArticle(id);
            setNews(data);
            console.log(data);
        } catch (err) {
            console.warn('get post', err);
            alert(err)
        }
    };

    React.useEffect(() => {
        //let data = NewsApi.fetchArticle(id);
        //console.log(data)
        dispatch(FetchArticle(id));
        onAddPost();
    }, []);

    if (!article) {
        return null
    }
    return (
        <div className={'article'}>
            <div className="article-top">
                <div className={'article-info'}>
                    {
                        article.writer &&
                        <>
                            <div className={'article-info__photo'}>
                                <img src={article.writer.avatarUrl} alt={article.writer.userName}/>
                            </div>
                            <div className={'article-info__name'}>
                                {article.writer.userName}
                            </div>
                        </>
                    }

                </div>
                <p>{article.date}</p>
            </div>

            <p className={'article-title'}>
                {article.title}
            </p>
            <p className={'article-text'}>
                {article.text}
            </p>
            <div className={'article-footer'}>
                <div className={'ribbon-footer'}>
                    <CommentIcon comments = {article.comments}/>
                    <Save newsId={article.id} saved={article.saved}/>
                    <Like newsId={article.id} likes={article.likes}/>
                </div>
                {
                    user && user.id === article.personId ?
                        <Delete id={article.id}/>
                        :
                        ''
                }
            </div>
            <Comment comments = {article.comments}/>
        </div>
    )
};
