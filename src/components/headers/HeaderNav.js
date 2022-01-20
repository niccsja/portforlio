import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import '../../index.css';

const HeaderNav = () => {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <p>logo</p>
                </div>
                <nav className="">
                    <ul className="flex flex-row justify-around  ">
                        <li className="basis-1/4 pl-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="basis-1/4 pl-2">
                            <Link to="/about">about</Link>
                        </li>
                        <li className="basis-1/4 pl-2">
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </>
    );
};

export default HeaderNav;
