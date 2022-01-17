import React from "react";
import {NewEntry} from "../NewEntry";
import {Search} from "../Search/search";
import {Logo} from "../Logo/logo";
import { HeaderUser } from "../headerUser";
export const Header: React.FC = ():React.ReactElement => {
    return (
        <header className="header">
            <div className={'container'}>
                <div className="header-left">
                    <Logo />
                    <Search />
                    <NewEntry />
                </div>
                <div className={"header-right"}>
                    <HeaderUser />
                </div>
            </div>
        </header>
    )
};
