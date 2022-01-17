import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Common} from "../../Components/common/common";
import { SetNotFriends } from "../../redux/ducks/person/actionCreators";

export const Bloggers:React.FC = ():React.ReactElement => {
    const {notFriends, friends, users} = useSelector((state : RootState ) => {
        return {
            notFriends: state.person.notFriends,
            friends: state.user.data && state.user.data.friends,
            users: state.person.items
        }
    });
    let [menuActive, setMenuActive] = React.useState(0);
    let menu = ['Блогер', 'Подписок'];
    let dispatch = useDispatch();
    let [person, setPerson] = React.useState<any>(users);
    const selectMenu = (index: number):void => {
        setMenuActive(index)
    };

    React.useEffect(() => {
        dispatch(SetNotFriends(friends))
    },[friends]);


    return (
        <div className={'bloggers'}>
            <ul className={'bloggers-title'}>
                {
                    menu.map((item:any, i:any) => {
                        return <li key={i} className={`${menuActive === i && 'bloggers-title__active'}`} onClick={() => selectMenu(i)}>{item}</li>
                    })
                }
            </ul>
            <div className="bloggers-items">
                {
                    person && person.map((item:any, i:number) => {
                        return (
                                <Common id = {item.id}
                                    name={item.username}
                                    key={i}
                                    logo={item.avatarUrl}
                                    fullName={item.fullname}
                                    direction={item.direction}
                                    url='bloggersi'
                                    friends = {item.friends}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
};
