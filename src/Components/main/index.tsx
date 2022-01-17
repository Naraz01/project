import React from "react";
import {Home} from "../../pages/home";
import { Switch, Route } from 'react-router-dom'
import { Bloggers } from "../../pages/bloggers";
import { Subscriptions } from "../../pages/Subscriptions";
import { Blogger } from "../../pages/bloggers/blogger";
import { Articles } from "../../pages/articles";
import { Write } from "../../pages/write";
import { My } from "../../pages/my";
import { Saved } from "../../pages/saved";

export const Main: React.FC = (): React.ReactElement => {
    return (
        <main className={'main'}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/bloggers" exact component = {Bloggers} />
                <Route path="/bloggers/:id" exact component = {Blogger} />
                <Route path="/subscriptions" exact component = {Subscriptions} />
                <Route path="/articles/:id" exact component = {Articles}/>
                <Route path="/bloggers/articles/:id" exact component = {Articles}/>
                <Route path="/write" exact component = {Write}/>
                <Route path="/my" exact component = {My} />
                <Route path="/saved" exact component = {Saved}/>
            </Switch>
        </main>
    )
};
