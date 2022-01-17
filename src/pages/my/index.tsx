import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Ribbon} from "../../Components/ribbon";

export const My:React.FC = ():React.ReactElement | null => {
    const {user} = useSelector((state : RootState ) => {
        return {
            user: state.user.data,
        }
    });
    if (!user) {
        return null
    }
    return (
        <>
            <div className={'my'}>
                <div className='my-info'>
                    <div className={'my-photo'}>
                        <img src={user.avatarUrl} alt={'#'}  className={'my-photo__img'}/>
                    </div>
                    <div className={'my-text'}>
                        <p>Имя: {user.username} {user.fullname} </p>
                        <p>Город: {user.city} </p>
                        <p>Цитата: {user.direction} </p>
                    </div>
                </div>
            </div>
            <p className={'my-news__title'}>Моя новосты</p>
            <Ribbon list={user.news} />
        </>
    )
};
