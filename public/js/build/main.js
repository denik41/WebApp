(function (React,ReactDOM) {
'use strict';

React = 'default' in React ? React['default'] : React;
ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

class NavLink extends React.Component {
    render() {
        return React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                { href: this.props.link },
                this.props.title
            )
        );
    }
}

class NavPanel extends React.Component {
    getInitialState() {
        return [{
            link: "/reg",
            title: 'Реєстрація'
        }, {
            link: "/login",
            title: 'Ввійти'
        }];
    }

    render() {
        return React.createElement(
            'nav',
            { className: 'navbar navbar-default' },
            React.createElement(
                'div',
                { className: 'container-fluid' },
                React.createElement(
                    'div',
                    { className: 'header' },
                    React.createElement(
                        'a',
                        { href: '/', className: 'navbar-brand' },
                        React.createElement(
                            'span',
                            null,
                            'FastBet'
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    this.state.linksArray.map((link, key) => React.createElement(NavLink, { link: link.link, title: link.title }))
                )
            )
        );
    }
}

var linksArray = [{
    link: "/reg",
    title: 'Реєстрація'
}, {
    link: "/login",
    title: 'Ввійти'
}];

ReactDOM.render(React.createElement(NavPanel, { linksArray: linksArray }), document.getElementById('root'));

}(React,ReactDOM));
