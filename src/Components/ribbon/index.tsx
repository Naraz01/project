import React from "react";
import { Link } from "react-router-dom";
import { Like } from "../like";
import {Save} from "../save";
import { CommentIcon } from "../comment/commentIcon";

type propsType = {
    list: any
}

export const Ribbon: React.FC<any> = ({list}:any):React.ReactElement | null => {
    if (!list) { return null }
    return (
        <>
            {
                list.map((item:any) => {
                    return (
                        <div className={'ribbon'} key={item.id}>
                            <Link to={`bloggers/${item.personId}`}>
                                <div className={'ribbon-head'}>
                                    {item.writer &&
                                    <>
                                        <div className="ribbon-head__ava">
                                            <img src={item.writer.avatarUrl} alt={'#'}/>
                                        </div>
                                        <p className={'ribbon-head__name'}>
                                            {item.writer.userName}
                                        </p>
                                    </>
                                    }
                                </div>
                            </Link>
                            <Link to={`articles/${item.id}`}>
                                <div className="ribbon-body">
                                    <p className="ribbon-body__title">
                                        {item.title}
                                    </p>
                                    <p className="ribbon-body__text">
                                        {
                                            item.text &&
                                            item.text.split('.', 1)
                                        }.
                                    </p>
                                </div>
                            </Link>

                            <div className={'ribbon-footer'}>
                                <CommentIcon comments = {item.comments}/>
                                <Save newsId={item.id}  saved={item.saved}/>
                                <Like newsId={item.id}  likes={item.likes}/>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
};
