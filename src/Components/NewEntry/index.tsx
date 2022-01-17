import React from "react";
import { Link } from "react-router-dom";

export const NewEntry: React.FC = ():React.ReactElement => {
    return (
        <div className="newEntry">
            <Link to={'write'}>
                Новая запись
            </Link>
        </div>
    )
};
