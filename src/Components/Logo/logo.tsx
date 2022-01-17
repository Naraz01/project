import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = ():React.ReactElement => {
    return (
        <div className="logo">
            <Link to="/">
                Блог
            </Link>
        </div>
    )
};
