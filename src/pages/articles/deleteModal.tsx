import React from "react";

type propsType = {
    id: any
    onDelete: any,
    onDeleteWindow: any
}

export const DeleteModal:React.FC<propsType> = ({id, onDelete, onDeleteWindow}: propsType):React.ReactElement => {
    return (
        <div className={'deleteModal'}>
            <div className={'deleteModal-content'}>
                <p className={'deleteModal-content__text'}>Вы действительно хотите удалить?</p>
                <div className={'deleteModal-content__panel'}>
                    <button className={'deleteModal-content__btn deleteModal-content__btn-yes'} onClick={() => onDelete(id)}> Да </button>
                    <button className={'deleteModal-content__btn deleteModal-content__btn-now'} onClick={onDeleteWindow}> Нет </button>
                </div>
            </div>
        </div>
    )
};
