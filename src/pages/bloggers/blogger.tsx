import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchBlogger, SetArticles, SetBlogger} from "../../redux/ducks/blogger/actionCreators";
import {RootState} from "../../redux/store";
import {useParams} from "react-router";
import {Ribbon} from "../../Components/ribbon";
import { News } from "../../redux/ducks/news/contracts/state";

export const Blogger:React.FC = ():React.ReactElement | null => {
    const params: {id:string} = useParams();
    const id = params.id;
    const {blogger, articles, myArticles} = useSelector((state : RootState ) => {
        return {
            blogger: state.blogger.data,
            myArticles: state.blogger.articles,
            articles: state.news.items
        }
    });


    let dispatch = useDispatch();
    React.useEffect(() => {

        if (id) {
            dispatch(FetchBlogger(id));
            let filterArticles = articles.filter((item:News, i:number) => {
                if (item.personId === parseInt(id)) {
                   return item
                }
            });
            dispatch(SetArticles(filterArticles))
        }
        return () => {
            dispatch(SetBlogger(undefined));
            dispatch(SetArticles(undefined));
        }
    }, [id]);

    if(!blogger) {
        return null;
    }
    return (
        <>
        <div className={'blogger'}>
            <div className={'blogger-top'}>
                <div className='blogger-photo'>
                    <img src={blogger.avatarUrl} alt={blogger.username} className='blogger-photo__ava'/>
                </div>
                <div>
                    <div className='blogger-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-person-plus" viewBox="0 0 16 16">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            <path fillRule="evenodd"
                                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        <span>
                            Подписаться
                        </span>
                    </div>
                </div>
            </div>
            <div className = {'blogger-info'}>
                <p className = {'blogger-info__name'}>{blogger.username} {blogger.fullname}</p>
                <p className={'blogger-info__direction'}>{blogger.direction}</p>
                <p className = {'blogger-info__city'}>{blogger.city}</p>
            </div>

        </div>
        <div className={'blogger-articles'}>
            {
                myArticles.length === 0 ?
                    <p> нету </p> :
                    <Ribbon list={myArticles} />
            }
        </div>
        </>
    )
};
