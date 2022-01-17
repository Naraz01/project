import React from "react";

export const ToDay:React.FC = ():React.ReactElement => {
    let date = new Date();
    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let days = ['воскресенье','понедельник','Вторник','Среда','Четверг','Пятница','суббота'];
    let [rollUp, setRollUp] = React.useState(true);
    let onRollUp = ():void => {
        setRollUp(!rollUp)
    };
    let stateToDay = [
        {
            date: '19:32',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?'
        },
        {
            date: '18:20',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?'
        },
        {
            date: '08:36',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?'
        },
        {
            date: '16:40',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, qui?'
        }
    ];
    return (
        <div className={'today'}>
            <div className={'today-head'}>
                <div className={'today-date'}>
                    {date.getDate() }
                    {' '}
                    {months[date.getMonth()]},
                    {' '}
                    {days[date.getDay()]}
                </div>

                <div className={'today-rollUp'} onClick={onRollUp}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className={`bi bi-chevron-up ${rollUp ? "" : "today-chevron"}`} viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                    <span> {rollUp ? "свернуть" : "развернут"}  </span>
                </div>
            </div>
            <div className={'today-body'}>
                {
                    rollUp &&
                    <div className={'today-body__items'}>
                        {
                            stateToDay.map((item, index) => {
                                return (
                                    <div className={'today-body__item'} key={index}>
                                        <div className="today-body__time">
                                            {item.date}
                                        </div>
                                        <div className="today-body__content">
                                            {item.text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

            </div>
            <div className={'today-footer'}>

            </div>
        </div>
    )
};
