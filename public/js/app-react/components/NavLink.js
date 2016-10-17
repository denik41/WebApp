import React from 'react';

export default class NavLink extends React.Component {
    render() {
        return (<li><a href={this.props.link}>{this.props.title}</a></li>)
    }
}
