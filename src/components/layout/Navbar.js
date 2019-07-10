import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github',
        bg: '',
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={['mx', this.props.icon].join(' ')} />
                    {this.props.title}
                </h1>
            </nav>
        );
    }
}
