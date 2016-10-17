import NavPanel from './components/NavPanel';
import React from 'react';
import ReactDOM from 'react-dom';

var linksArray = [
    {
        link: "/reg",
        title: 'Реєстрація'
    },
    {
        link: "/login",
        title: 'Ввійти'
    }
];

ReactDOM.render(
    <NavPanel linksArray={linksArray}/>,
    document.getElementById('root')
);