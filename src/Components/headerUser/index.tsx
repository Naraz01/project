import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {RootState} from "../../redux/store";

export const HeaderUser:React.FC = ():React.ReactElement | null => {
    const [open, setOpen] = React.useState<boolean>(false);
    const myRef = React.useRef<HTMLDivElement>(null);
    const {user} = useSelector((state : RootState ) => {
        return {
            user: state.user.data
        }
    });
    const onOpen = ():void => {
        setOpen(!open);
    };

    const handleClick = (e:any):void => {
     if (!e.path.includes(myRef.current)) {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleClick)
    },[]);

    return (
        <div className="header-user">
            {
                user && (
                    <>
                        <div className='header-user__photo'>
                            <img src={user.avatarUrl} alt='Фото'/>
                        </div>
                        <div className='header-user__name' onClick={onOpen} ref = {myRef}>
                            <span>
                                {user.username}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </>
                )
            }

            {
                open &&
                <ul className={'header-user__menu'}>
                    <li>
                        <Link to = "my">
                            Профиль
                        </Link>
                    </li>
                    <li>
                        <Link to = "customization">
                            Настройка
                        </Link>
                    </li>
                    <li>
                        <Link to = "output">
                            Выход
                        </Link>
                    </li>
                </ul>
            }


        </div>
    )
};
