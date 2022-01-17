import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

interface item {
    id?: number,
    name?: string,
    logo?: string,
    direction?: string,
    url?: string
    fullName?: string,
    avatarUrl?: string,
    friends?: any
}

export const Common:React.FC<item> = ({id, name, logo, direction, url, fullName}:item):React.ReactElement => {
    let [isFriends, setIsFriends] = React.useState(false);

    const {friends} = useSelector((state : RootState ) => {
        return {
            friends: state.user.data && state.user.data.friends
        }
    });

    React.useEffect(() => {
        if (friends) {
            friends.forEach((item) => {
                if (item === id) {
                    setIsFriends(true);
                }
                else {
                    setIsFriends(false);
                }
            })
        }
    },);

    const Aaa:React.FC = ():React.ReactElement => {
        return <p> Qwe </p>
    };

    const Friends = ():void => {
      console.log(id)
    };

    return (
        <>
            <div className={'common'}>
                <div className={'common-photo'}>
                    <img src={logo} alt={name}/>
                </div>
                <div className={'common-text'}>
                    <Link to={`${url}/${id}`} className={'common-text__name'}>{name} {fullName} </Link>
                    <p className={'common-text__direction'}>{direction}</p>
                </div>
                <div>
                    {
                        isFriends ?
                            <p className={'common-friends'}>Вы подписно</p>
                                :
                            <div className={'common-btn'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                     className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                </svg>
                                <span>
                                    Подписаться
                                </span>
                            </div>
                    }
                </div>
            </div>
        </>
    )
};
