import NavLink from './NavLink';
import React from 'react';

export default class NavPanel extends React.Component {
    getInitialState() {
        return [
            {
                link: "/reg",
                title: 'Реєстрація'
            },
            {
                link: "/login",
                title: 'Ввійти'
            }
        ]
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="header">
                        <a href="/" className="navbar-brand">
                            <span>FastBet</span>
                        </a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {this.state.map(
                            (link, key) => <NavLink link={link.link} title={link.title}/>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}