import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Ribbon} from "../../Components/ribbon";

export const Saved:React.FC = ():React.ReactElement | null => {
    const {user} = useSelector((state : RootState ) => {
        return {
            user: state.user.data,
        }
    });

    const userId = user && user.id;

    let dispatch = useDispatch();
    React.useEffect(() => {
    }, []);


    return (
        <div className='preservation'>
        </div>
    )
};
