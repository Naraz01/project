import React from "react";
import {ToDay} from "./today";
import {Ribbon} from "../../Components/ribbon";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Home: React.FC = ():React.ReactElement => {
    const {news} = useSelector((state : RootState ) => {
        return {
            news: state.news.items
        }
    });
    return (
        <div>
            <ToDay/>
            <Ribbon list={news} />
        </div>
    )
};
