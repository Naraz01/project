import React from "react";
import {Link} from "react-router-dom";
export const Aside: React.FC = ():React.ReactElement => {
    let menu = [

        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                       className="bi bi-file-text" viewBox="0 0 16 16">
                <path
                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>,
            url: '/',
            text: 'Лента'
        },
       /* {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                       className="bi bi-person" viewBox="0 0 16 16">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>,
            url: 'my-news',
            text: 'Моё новости'
        },*/
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                       className="bi bi-layers" viewBox="0 0 16 16">
                <path
                    d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433L1.562 6 8 2.567 14.438 6 8 9.433z"/>
            </svg>,
            url: '/subscriptions',
            text: 'Подписки'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                       className="bi bi-star" viewBox="0 0 16 16">
                <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            ,
            url: '/saved',
            text: 'Сохраненные'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
            className="bi bi-people" viewBox="0 0 16 16">
            <path
            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>,
            url: '/bloggers',
            text: 'Блогеры'
        }
    ];
    let [menuActive, setMenuActive] = React.useState(0);
    const onMenuActive = (i:number):void => {
        setMenuActive(i)
    };
    return (
        <aside className={'aside'}>
            <nav className={'nav'}>
                <ul className={'nav-items'}>
                    {
                        menu.map((item, i: number) => {
                            return (
                                <li className = {menuActive === i ? 'nav-item nav-item__active': 'nav-item'} key={i} onClick={() => onMenuActive(i)}>
                                    <Link to={item.url}>
                                        {item.icon}
                                        <span>
                                            {item.text}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
};
